import { useEffect, useState } from 'react';
import * as S from '../Plan.style';
import * as IS from '@components/commons/inputs/Input.style';
import * as PS from '@components/plans/Plan.style';
import Button from '@/components/commons/buttons/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { ModernInput } from '@/components/commons/inputs/Input';
import KaKaoMap from '@/components/maps/KaKaoMap';
// import { useCreatePlanMutaton } from '@/hooks/useMutation';
import { TfiArrowCircleRight } from 'react-icons/tfi';
import { TimeSelectBox } from '@/components/commons/timeSelect/TimeSelectBox';
import { useUpdatePlanMutation } from '@/hooks/useMutation';

export interface UnitPlan {
  title: string;
  content: string;
  time: string;
  budget: number;
  place_name: string;
  address: string;
  x: number;
  y: number;
  budgetFormatted?: string; // 추가된 필드
}

export interface DayPlan {
  date: string;
  unitPlans: UnitPlan[];
}

export interface WholePlan {
  planId: number;
  title: string;
  budget: number;
  area: string;
  isPublic: boolean;
  tripStartDate: string;
  tripEndDate: string;
  isVotable: boolean;
  dayPlans: DayPlan[];
}
// 날짜 변환 함수
// const formatDate = (date: Date) => {
//   if (isNaN(date.getTime())) {
//     return ''; // 유효하지 않은 날짜는 빈 문자열 반환
//   }
//   return date.toISOString().split('T')[0];
// };

const PlanUpdate2: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 상태 초기화
  const [wholePlan, setWholePlan] = useState<WholePlan>(() => {
    const localData = localStorage.getItem('updatePlanData2');
    if (localData) return JSON.parse(localData);
    else if (location.state?.planDetails) return location.state.planDetails;
    else
      return {
        title: '',
        budget: 0,
        area: '',
        isPublic: false,
        tripStartDate: '',
        tripEndDate: '',
        dayPlans: [],
        planId: 0,
      };
  });

  const [dayPlans, setDayPlans] = useState<DayPlan[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLocationIndex, setSelectedLocationIndex] = useState(0);
  const [isSubmit] = useState<boolean>(false);
  // 여기에 planId 상태를 추가합니다.
  const [planId, _] = useState<number | null>(null);

  useEffect(() => {
    // 페이지 초기 로드 또는 리로드 시 실행
    function loadPlanData() {
      const savedPlan = localStorage.getItem('updatePlanData2');

      if (savedPlan) {
        // localStorage에서 데이터를 성공적으로 읽었을 때
        const parsedPlan = JSON.parse(savedPlan);
        setWholePlan(parsedPlan);
        setDayPlans(parsedPlan.dayPlans || []);
      } else if (location.state?.planDetails) {
        // location.state에서 데이터를 읽을 때 (새로운 세션에서 접근)
        const details = location.state.planDetails as WholePlan;
        setWholePlan(details);
        setDayPlans(details.dayPlans);
        localStorage.setItem('updatePlanData2', JSON.stringify(details)); // 새 데이터를 localStorage에 저장
      } else {
        // 데이터를 찾을 수 없을 때 에러 페이지로 이동
        navigate('/error');
      }
    }

    loadPlanData();
  }, [location, navigate]);

  const handleInputChange = (
    index: number,
    field: keyof UnitPlan,
    value: string,
    dayIndex: number = currentStep,
  ) => {
    // wholePlan에서 직접 dayPlans를 업데이트
    const updatedWholePlan = { ...wholePlan }; // 현재 wholePlan을 복사
    const updatedUnitPlans = [...updatedWholePlan.dayPlans[dayIndex].unitPlans]; // 현재 단계의 unitPlans를 복사
    const updatedUnitPlan = { ...updatedUnitPlans[index], [field]: value }; // 특정 unitPlan을 업데이트

    updatedUnitPlans[index] = updatedUnitPlan; // 업데이트된 unitPlan을 배열에 할당
    updatedWholePlan.dayPlans[dayIndex].unitPlans = updatedUnitPlans; // 업데이트된 unitPlans 배열을 dayPlans에 할당

    setWholePlan(updatedWholePlan); // 업데이트된 wholePlan을 상태로 설정
  };

  const handleTimeChange = (
    part: 'hour' | 'minute',
    value: string,
    index: number,
  ) => {
    const timeParts = dayPlans[currentStep].unitPlans[index].time.split(':');
    if (part === 'hour') {
      timeParts[0] = value;
    } else if (part === 'minute') {
      timeParts[1] = value;
    }
    handleInputChange(index, 'time', timeParts.join(':'));
  };

  const handlePlanAdd = () => {
    const newUnitPlan: UnitPlan = {
      title: '',
      time: '00:00',
      place_name: '',
      address: '',
      content: '',
      budget: 0,
      x: 0,
      y: 0,
    };
    const updatedWholePlan = { ...wholePlan };
    updatedWholePlan.dayPlans[currentStep].unitPlans.push(newUnitPlan);

    setWholePlan(updatedWholePlan);
  };

  const handleOpenMapClick = (index: number) => {
    setSelectedLocationIndex(index);
    setIsModalOpen(true);
  };

  // KaKaoMap 컴포넌트에서 위치가 선택되었을 때 호출될 함수
  // 위치 선택 핸들러 수정
  const handleSelectPlace = (selectedLocation: any, index: number) => {
    const x = parseFloat(selectedLocation.x);
    const y = parseFloat(selectedLocation.y);
    const address =
      selectedLocation.road_address_name || selectedLocation.address_name;
    const place_name = selectedLocation.place_name;
    handleInputChange(index, 'x', x.toString());
    handleInputChange(index, 'y', y.toString());
    handleInputChange(index, 'address', address);
    handleInputChange(index, 'place_name', place_name);
    setIsModalOpen(false);
  };

  const handleDeleteUnitPlanClick = (index: number) => {
    const updatedWholePlan = { ...wholePlan };
    updatedWholePlan.dayPlans[currentStep].unitPlans.splice(index, 1);

    setWholePlan(updatedWholePlan);
  };

  const handleDayChange = (index: number) => {
    setCurrentStep(index);
  };

  const handlePlanGoBack = () => {
    navigate(`/planUpdate/1/${planId}`, { state: { wholePlan } });
  };

  const updatePlanList = useUpdatePlanMutation();

  const handlePlanUpdateSubmit = () => {
    // console.log('Submit:', wholePlan);
    updatePlanList.mutate(wholePlan);
    console.log('수정 데이터 wholePlan > ', wholePlan);
  };

  return (
    <>
      {/* 여행 일자 박스 영역 */}
      <S.PlanDetailDateBox>
        {dayPlans.map((dayPlan, index) => (
          <S.PlanDetailDateButton
            key={index}
            onClick={() => handleDayChange(index)}
            isActive={currentStep === index}
          >
            {`${index + 1}일차`}
            {currentStep === index && (
              <>
                <hr />
                <div>{dayPlan.date}</div>
              </>
            )}
          </S.PlanDetailDateButton>
        ))}
      </S.PlanDetailDateBox>
      {/* 스태퍼 박스 영역 */}

      {dayPlans[currentStep] &&
        dayPlans[currentStep].unitPlans.map((unitPlan, index) => (
          <>
            <div style={{ marginBottom: '20px' }}>
              <S.PlanDetailCreateBox>
                <IS.PlanListInputContainer key={index}>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {/* 첫 번째 작성 영역이 아닐 때만 삭제 버튼을 보여줌 */}
                    {index > 0 && (
                      <Button
                        text="삭제하기"
                        borderColor="gray"
                        color="white"
                        textColor="gray"
                        hoverColor="#5AC8EC"
                        onClick={() => handleDeleteUnitPlanClick(index)}
                      />
                    )}
                  </div>
                  {/* 출발지 영역 */}
                  <IS.ListInputbox>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                      }}
                    >
                      제목 &nbsp; <img src="/assets/icons/requiredPoint.svg" />
                    </div>
                    <input
                      placeholder="제목을 입력해주세요"
                      value={unitPlan.title}
                      onChange={(e) =>
                        handleInputChange(index, 'title', e.target.value)
                      }
                    />
                  </IS.ListInputbox>
                  {/* 시간 영역 */}
                  <IS.ListInputbox>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                      }}
                    >
                      시간 &nbsp; <img src="/assets/icons/requiredPoint.svg" />
                    </div>{' '}
                    <div key={index}>
                      <TimeSelectBox
                        hourValue={unitPlan.time.split(':')[0]}
                        minuteValue={unitPlan.time.split(':')[1]}
                        onHourChange={(hour) =>
                          handleTimeChange('hour', hour, index)
                        }
                        onMinuteChange={(minute) =>
                          handleTimeChange('minute', minute, index)
                        }
                      />
                    </div>
                    {/* <input
                    placeholder="09:30"
                    value={input.time}
                    onChange={(e) =>
                      handleInputChange(index, 'time', e.target.value)
                    }
                  /> */}
                  </IS.ListInputbox>
                  {/* 일정 영역 */}
                  <IS.ListInputbox>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                      }}
                    >
                      일정 &nbsp; <img src="/assets/icons/requiredPoint.svg" />
                    </div>
                    <ModernInput
                      placeholder="일정을 입력해주세요."
                      value={unitPlan.content}
                      type="text"
                      height={50}
                      onChange={(e) =>
                        handleInputChange(index, 'content', e.target.value)
                      }
                    />
                  </IS.ListInputbox>
                  {/* 경비 영역 */}
                  <IS.ListInputbox>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                      }}
                    >
                      경비 &nbsp; <img src="/assets/icons/requiredPoint.svg" />
                    </div>
                    <ModernInput
                      placeholder="경비는 숫자로 입력해주세요."
                      value={unitPlan.budget || ''}
                      type="text" // Set input type as number to allow only numeric values
                      height={50}
                      onChange={(e) =>
                        handleInputChange(index, 'budget', e.target.value)
                      }
                    />
                  </IS.ListInputbox>
                  {/* 위치 영역 */}
                  <IS.ListInputboxWithFlex>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                      }}
                    >
                      위치 &nbsp; <img src="/assets/icons/requiredPoint.svg" />
                    </div>
                    <IS.ListContent>
                      <ModernInput
                        placeholder="우측 화살표를 클릭하여 지도에서 검색해서 입력해주세요."
                        value={
                          unitPlan.place_name && unitPlan.address
                            ? `${unitPlan.place_name}, ${unitPlan.address}`
                            : ''
                        }
                        readonly={true}
                        type={'text'}
                        border="transparent"
                        width={1000}
                        fontSize={18}
                      />
                      <IS.ImgBox>
                        {/* <IoIosArrowDropright
                    color="lightGray"
                    size="2rem"
                    onClick={() => handleOpenMapClick(index)}
                  /> */}
                        <TfiArrowCircleRight
                          size="35px"
                          color="lightGray"
                          onClick={() => handleOpenMapClick(index)}
                          style={{ cursor: 'pointer' }}
                        />
                      </IS.ImgBox>
                    </IS.ListContent>
                  </IS.ListInputboxWithFlex>
                </IS.PlanListInputContainer>
              </S.PlanDetailCreateBox>
            </div>
          </>
        ))}

      <PS.ButtonBox>
        <Button
          text="+"
          width="78%"
          height="60px"
          color="white"
          borderColor="gray"
          borderRadius="25px"
          textColor="gray"
          onClick={handlePlanAdd}
        />
      </PS.ButtonBox>
      {/* 등록하기 버튼 영역 */}
      <S.ButtonBoxToRight>
        <Button
          text="뒤로가기"
          width="150px"
          height="50px"
          borderRadius="15px"
          fontWeight="bold"
          textColor="white"
          color="#5AC8EC"
          borderColor="#5AC8EC"
          marginRight="15px"
          onClick={() => handlePlanGoBack()} // 뒤로가기 버튼 클릭 핸들러 추가
          disabled={isSubmit}
        />
        <Button
          text="수정하기"
          width="150px"
          height="50px"
          borderRadius="15px"
          fontWeight="bold"
          textColor="white"
          color="#5AC8EC"
          borderColor="#5AC8EC"
          marginRight="15px"
          onClick={handlePlanUpdateSubmit} // 수정하기 버튼 클릭 핸들러 추가
          disabled={isSubmit}
        />
      </S.ButtonBoxToRight>

      {isModalOpen && (
        <KaKaoMap
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSelect={(location) =>
            handleSelectPlace(location, selectedLocationIndex)
          }
          searchKeyword=""
        />
      )}
    </>
  );
};

export default PlanUpdate2;
