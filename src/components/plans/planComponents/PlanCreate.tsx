import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ToggleButton from '@/components/commons/buttons/ToggleButton';
import { ModernInput } from '@/components/commons/inputs/Input';
import * as S from '@/components/plans/Plan.style';
import DatePicker, { registerLocale } from 'react-datepicker';
import '@/components/DatePicker.styles.css';
import { Locale } from 'node_modules/date-fns/locale/types';
import ko from 'date-fns/locale/ko';
registerLocale('ko', ko as unknown as Locale);
import { TfiArrowCircleRight } from 'react-icons/tfi';
import { SlLocationPin } from 'react-icons/sl';
import { BiCoinStack } from 'react-icons/bi';
import { CiCalendar } from 'react-icons/ci';

const PlanCreate = () => {
  const navigate = useNavigate();
  const [isPublic, setIsPublic] = useState<boolean>(true);
  const [dateRange, setDateRange] = useState<(Date | undefined)[]>([
    undefined,
    undefined,
  ]);
  const [totalPlanTitle, setTotalPlanTitle] = useState<string>('');
  const [totalBudget, setTotalBudget] = useState<number>(0);
  const [, setTotalBudgetFormatted] = useState<string>(''); // 추가된 상태

  const [area, setArea] = useState<string>('');

  const [focusState, setFocusState] = useState({
    title: false,
    area: false,
    budget: false,
  });

  // Handle field focus and blur to toggle image display
  const handleFocus = (field: keyof typeof focusState) =>
    setFocusState({ ...focusState, [field]: true });

  const handleBlur = (
    field: keyof typeof focusState,
    e: React.FocusEvent<HTMLInputElement>,
  ) => {
    if (field === 'budget' && e.target.value.trim() === '') {
      setTotalBudget(0); // 빈 문자열인 경우 0으로 설정
      // e.target.value = '0'; // 입력 필드에 "0" 표시
    }
    setFocusState({ ...focusState, [field]: false });
  };
  // 컴포넌트 마운트 시 localStorage에서 데이터 로드
  useEffect(() => {
    const storedData = localStorage.getItem('planData');
    if (storedData) {
      const data = JSON.parse(storedData);
      setIsPublic(data.isPublic);
      setDateRange([
        data.startDate ? new Date(data.startDate) : undefined,
        data.endDate ? new Date(data.endDate) : undefined,
      ]);
      setTotalPlanTitle(data.totalPlanTitle);
      setTotalBudget(data.totalBudget);
      setArea(data.area);
    }
  }, []);

  // 지역
  const handleAreaChange = (e: any) => {
    setArea(e.target.value);
  };

  // 비용 변경 핸들러
  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const budgetValue = e.target.value.replace(/\D/g, ''); // 숫자 이외 삭제
    if (budgetValue === '') {
      setTotalBudget(0);
      setTotalBudgetFormatted(''); // 빈 문자열로 상태 업데이트
    } else {
      const numericValue = parseInt(budgetValue, 10);
      setTotalBudget(numericValue); // 상태 업데이트
      setTotalBudgetFormatted(numericValue.toLocaleString()); // 포맷된 문자열로 상태 업데이트
    }
  };
  const today = new Date();
  today.setHours(0, 0, 0, 0); // 시간, 분, 초, 밀리초를 0으로 설정하여 오늘의 시작을 의미

  // 날짜 범위 변경 핸들러
  const handleDateRangeChange = (update: [Date, Date]) => {
    // 시작 날짜가 오늘 이전인지 확인
    if (update[0] && update[0] < today) {
      alert('오늘 이전의 날짜는 선택할 수 없습니다.');
      return; // 함수 실행 중단
    }
    setDateRange(update);
  };

  // 여행 기간 텍스트를 표시하기 위한 함수
  const displayDateRange = () => {
    const start = dateRange[0] ? dateRange[0].toLocaleDateString() : '';
    const end = dateRange[1] ? dateRange[1].toLocaleDateString() : '';
    if (!start && !end) {
      return (
        <>
          <ModernInput
            type="text"
            placeholder="우측 달력에서 기간을 선택하세요"
            width={400}
            height={30}
            border="transparent"
            fontSize={16}
            readonly={true}
            // onKeyDown={(e) => activeEnter(e)}
            // onChange={handleAreaChange}
          />
        </>
      );
    }

    return (
      <div
        style={{
          padding: '5px',
          width: '400px',
          border: ' 1px solid transparent',
          height: '30px',
          fontSize: '16px',
          fontWeight: 'bold',
        }}
      >
        {start} - {end}
      </div>
    );
  };

  // 상태가 업데이트될 때마다 localStorage에 저장
  useEffect(() => {
    const data = {
      isPublic,
      startDate: dateRange[0]?.toDateString(),
      endDate: dateRange[1]?.toDateString(),
      totalPlanTitle,
      totalBudget,
      area,
    };
    localStorage.setItem('planData', JSON.stringify(data));
  }, [isPublic, dateRange, totalPlanTitle, totalBudget, area]);

  // 토글
  const toggleIsPublic = () => {
    setIsPublic((prev) => !prev); // 이전 상태를 참조하여 반전
  };

  // 입력 값
  const canProceed =
    totalPlanTitle.trim() !== '' &&
    totalBudget > 0 &&
    area.trim() !== '' &&
    dateRange[0] !== undefined &&
    dateRange[1] !== undefined;

  // 다음 페이지 넘어가기
  const handleNextClick = () => {
    if (
      !totalPlanTitle ||
      !totalBudget ||
      !area ||
      !dateRange[0] ||
      !dateRange[1]
    ) {
      alert('모든 입력을 완료해야 다음으로 진행할 수 있습니다.');
      return;
    }

    // dateRange 값 확인
    if (dateRange[0] && dateRange[1]) {
      // 날짜 범위가 모두 선택되었다면, 처리 로직 추가
      navigate('/planCreate/2', {
        state: {
          tripStartDate: dateRange[0]?.toDateString(),
          tripEndDate: dateRange[1]?.toDateString(),
          isPublic,
          totalPlanTitle,
          totalBudget,
          area,
        },
      });
    } else {
      alert('전체 입력이 필요합니다!');
    }
  };

  const dateFormat = 'yyyy-MM';

  return (
    <>
      {/* 전체 컨테이너 */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* 작성 컨테이너 */}
        <div
          style={{
            width: '100%',
            paddingRight: '10%',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
              }}
            >
              {' '}
              제목 &nbsp; <img src="/assets/icons/requiredPoint.svg" />
            </div>
            <S.PlanBoxWithSpaceBetween>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {focusState.title && (
                  <img
                    src="/assets/icons/Rectangle.png"
                    style={{ height: '30px' }}
                  />
                )}
                <ModernInput
                  type="text"
                  placeholder="제목"
                  width={400}
                  height={50}
                  border="transparent"
                  onFocus={() => handleFocus('title')}
                  onBlur={(e) => handleBlur('title', e)}
                  onChange={(e) => setTotalPlanTitle(e.target.value)}
                  fontSize={18}
                  fontWeight={'bold'}
                  value={totalPlanTitle} // 상태값을 input의 value로 설정
                  // onKeyDown={(e) => activeEnter(e)}
                />
              </div>

              <div>
                <ToggleButton isChecked={isPublic} onToggle={toggleIsPublic} />
              </div>
            </S.PlanBoxWithSpaceBetween>
          </div>
          <div>
            {/* 플랜 계획 첫페이지 */}
            <div>
              {/* 지역 */}
              <S.PlanBox>
                <div
                  style={{
                    backgroundColor: '#C5F1FF',
                    width: '35px',
                    height: '35px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <SlLocationPin size="25px" color="white" />
                </div>
                <S.PlanContent>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                    }}
                  >
                    지역 &nbsp; <img src="/assets/icons/requiredPoint.svg" />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {focusState.area && (
                      <img
                        src="/assets/icons/Rectangle.png"
                        style={{ height: '25px' }}
                      />
                    )}
                    <ModernInput
                      type="text"
                      placeholder="지역"
                      onFocus={() => handleFocus('area')}
                      onBlur={(e) => handleBlur('area', e)}
                      width={400}
                      height={30}
                      border="transparent"
                      fontSize={16}
                      onChange={handleAreaChange}
                      value={area}
                    />
                  </div>
                </S.PlanContent>
              </S.PlanBox>
              <hr />
              {/*예산 */}
              <S.PlanBox>
                <div
                  style={{
                    backgroundColor: '#C5F1FF',
                    width: '35px',
                    height: '35px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <BiCoinStack size="25px" color="white" />
                </div>
                <S.PlanContent>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                    }}
                  >
                    예산 &nbsp; <img src="/assets/icons/requiredPoint.svg" />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {focusState.budget && (
                      <img
                        src="/assets/icons/Rectangle.png"
                        style={{ height: '30px' }}
                      />
                    )}
                    <ModernInput
                      type="text"
                      placeholder="예산을 입력해주세요."
                      onFocus={() => handleFocus('budget')}
                      onBlur={(e) => handleBlur('budget', e)}
                      width={400}
                      height={30}
                      border="transparent"
                      fontSize={16}
                      onChange={handleBudgetChange}
                      value={totalBudget.toLocaleString()}
                    />
                  </div>
                </S.PlanContent>
              </S.PlanBox>
              <hr />
              {/*기간 선택*/}
              <S.PlanBox>
                <div
                  style={{
                    backgroundColor: '#C5F1FF',
                    width: '35px',
                    height: '35px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CiCalendar size="25px" color="white" />
                </div>
                <S.PlanBoxWithCalendar>
                  <div style={{ paddingLeft: '15px' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                      }}
                    >
                      여행기간 &nbsp;{' '}
                      <img src="/assets/icons/requiredPoint.svg" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div> {displayDateRange()}</div>
                    </div>
                  </div>
                  <div style={{ paddingLeft: '400px' }}>
                    <TfiArrowCircleRight size="35px" color="lightGray" />
                  </div>
                </S.PlanBoxWithCalendar>
              </S.PlanBox>
              <hr />
            </div>
          </div>
        </div>
        {/* 달력 컨테이너 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <DatePicker
            locale="ko"
            selectsRange={true}
            startDate={dateRange[0]}
            endDate={dateRange[1]}
            inline
            dateFormat={dateFormat}
            onChange={handleDateRangeChange}
            minDate={today} // 오늘 날짜 이후만 선택 가능하도록 설정
          />
        </div>
      </div>
      <S.PlanBottomSection>
        {/* 다음 버튼 */}
        <S.PlanNextButton onClick={handleNextClick} disabled={!canProceed}>
          다음
        </S.PlanNextButton>
      </S.PlanBottomSection>
    </>
  );
};

export default PlanCreate;
