import { useEffect, useState } from 'react';
import * as S from '../Plan.style';
import * as IS from '@components/commons/inputs/Input.style';
import * as PS from '@components/plans/Plan.style';
import Button from '@/components/commons/buttons/Button';
import { useLocation } from 'react-router-dom';
import { ModernInput } from '@/components/commons/inputs/Input';
import KaKaoMap from '@/components/maps/KaKaoMap';

export interface UnitPlan {
  title: string;
  content: string;
  time: string;
  budget: string;
  schedule: string;
  address: string;
  x: number;
  y: number;
}

export interface DayPlan {
  title: string;
  content: string;
  budget: string;
  date: string;
  unitPlans: UnitPlan[];
}

export interface WholePlan {
  title: string;
  content: string;
  budget: string;
  area: string;
  isPublic: boolean;
  tripStartDate: string;
  tripEndDate: string;
  isVotable: boolean;
  dayPlans: DayPlan[];
}

const PlanCreate2: React.FC = () => {
  const location = useLocation();
  const { tripStartDate, tripEndDate } = location.state as {
    tripStartDate: Date;
    tripEndDate: Date;
    area: string;
    budget: string;
  };

  // useState부분
  const [currentStep, setCurrentStep] = useState<number>(0);

  const [unitPlans, setUnitPlans] = useState<UnitPlan[]>([
    {
      title: '',
      time: '',
      schedule: '',
      address: '',
      content: '',
      budget: '',
      x: 0,
      y: 0,
    },
  ]);
  const [dayPlans, setDayPlans] = useState<DayPlan[]>([
    {
      title: '',
      content: '',
      budget: '',
      date: '',
      unitPlans: [],
    },
  ]);
  // const [wholePlan, setWholePlan] = useState<WholePlan[]>([
  //   {
  //     title: '',
  //     content: '',
  //     budget: '',
  //     area: '',
  //     isPublic: false,
  //     tripStartDate: '',
  //     tripEndDate: '',
  //     isVotable: false,
  //     dayPlans: [],
  //   },
  // ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLocationIndex, setSelectedLocationIndex] = useState<number>(0);

  // 총 일수 계산
  const calculateTotalDays = () => {
    const start = new Date(tripStartDate);
    const end = new Date(tripEndDate);
    const diff = end.getTime() - start.getTime();
    const totalDays = Math.ceil(diff / (1000 * 3600 * 24)) + 1; // 종료 날짜 포함
    return totalDays;
  };

  // 상태를 초기화하는 부분에서 함수를 호출
  const [totalDays, setTotalDays] = useState(calculateTotalDays());

  // startDate와 currentStep을 기반으로 해당 일차의 날짜 계산
  const calculateDateForStep = (start: string | Date, step: number): string => {
    const resultDate = new Date(start);
    resultDate.setDate(resultDate.getDate() + step);
    return resultDate.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // 각 일차의 날짜를 보여주는 부분을 업데이트
  const displayDate = calculateDateForStep(tripStartDate, currentStep);

  useEffect(() => {
    setTotalDays(calculateTotalDays());
  }, [tripStartDate, tripEndDate]);

  const handleInputChange = (
    index: number,
    field: keyof UnitPlan,
    value: string,
  ) => {
    const newUnitPlans = [...unitPlans];
    // 'x' 또는 'y' 필드일 경우, 문자열을 숫자로 변환
    if (field === 'x' || field === 'y') {
      const numericValue = parseFloat(value);
      newUnitPlans[index][field] = isNaN(numericValue) ? 0 : numericValue;
    } else {
      // 그 외의 경우, 문자열 값을 직접 할당
      newUnitPlans[index][field] = value;
    }
    setUnitPlans(newUnitPlans);
  };

  // KaKaoMap 컴포넌트에서 위치가 선택되었을 때 호출될 함수
  // 위치 선택 핸들러 수정
  const handleSelectPlace = (selectedLocation: any, index: number) => {
    // const locationName = selectedLocation.place_name;
    handleInputChange(index, 'address', selectedLocation);
    console.log(selectedLocation);
    setIsModalOpen(false);
  };

  const handleOpenMapClick = (index: number) => {
    setSelectedLocationIndex(index);
    setIsModalOpen(true);
  };

  // 추가하기 버튼
  const handlePlanAdd = () => {
    setUnitPlans([
      ...unitPlans,
      {
        title: '',
        time: '',
        schedule: '',
        address: '',
        content: '',
        budget: '',
        x: 0,
        y: 0,
      },
    ]);
    console.log(unitPlans); // 현재 planInputs 상태를 확인하기 위한 로그 (선택적)
  };

  const handleDayChange = (stepIndex: number) => {
    setDayPlans([
      ...dayPlans,
      {
        title: '',
        content: '',
        budget: '',
        date: '',
        unitPlans: [],
      },
    ]);
    setCurrentStep(stepIndex); // 다음 스텝으로 이동
    console.log(dayPlans);
  };

  // 등록하기 버튼
  const handlePlanSubmit = () => {};

  return (
    <>
      {/* 여행 일자 박스 영역 */}
      <S.PlanDetailDateBox>
        {Array.from({ length: totalDays }, (_, index) => (
          <S.PlanDetailDateButton
            key={index}
            onClick={() => handleDayChange(index)}
            active={index === currentStep}
            text=""
          >
            {`${index + 1}일차`}
          </S.PlanDetailDateButton>
        ))}
      </S.PlanDetailDateBox>
      {/* 스태퍼 박스 영역 */}
      <S.PlanDetailContentBox>
        {/* 박스 헤더 영역 */}
        <S.PlanDetailContentHeader>
          <S.DetailHeaderContent>
            {`${currentStep + 1}일차`}
          </S.DetailHeaderContent>
          <S.DetailHeaderSubContent>
            <S.DetailHeaderSubDate>{displayDate}</S.DetailHeaderSubDate>
          </S.DetailHeaderSubContent>
        </S.PlanDetailContentHeader>
        {unitPlans.map((input, index) => (
          <IS.PlanListInputContainer key={index}>
            {/* 출발지 영역 */}
            <IS.ListInputbox>
              <div>제목</div>
              <input placeholder="서울시 강남구" value={input.title} />
            </IS.ListInputbox>
            {/* 시간 영역 */}
            <IS.ListInputbox>
              <div>시간</div>
              <input placeholder="09:30" value={input.time} />
            </IS.ListInputbox>
            {/* 일정 영역 */}
            <IS.ListInputbox>
              <div>일정 *</div>
              <ModernInput
                placeholder="가이드 만나기"
                value={input.schedule}
                type="text"
                height={50}
              />
            </IS.ListInputbox>
            {/* 위치 영역 */}
            <IS.ListInputbox>
              <div>
                위치
                <img
                  src="/assets/icons/pin.png"
                  alt="pin"
                  onClick={() => handleOpenMapClick(index)}
                />
                <p>아이콘을 클릭하면 지도가 보입니다.</p>
              </div>
              <input
                placeholder="서울특별시 중구 을지로 201"
                value={input.address}
                readOnly
              />
            </IS.ListInputbox>
          </IS.PlanListInputContainer>
        ))}
        <PS.ButtonBoxToCenter>
          <Button
            text="추가하기"
            width="150px"
            height="50px"
            color="white"
            borderColor="black"
            borderRadius="15px"
            fontWeight="bold"
            onClick={handlePlanAdd}
          />
        </PS.ButtonBoxToCenter>
      </S.PlanDetailContentBox>
      {/* 등록하기 버튼 영역 */}
      <S.ButtonBox>
        <Button
          text="등록하기"
          width="150px"
          height="50px"
          color="black"
          borderRadius="15px"
          fontWeight="bold"
          textColor="white"
          onClick={handlePlanSubmit} // 등록하기 버튼 클릭 핸들러 추가
        />
      </S.ButtonBox>

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

export default PlanCreate2;
