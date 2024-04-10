import React from 'react'; // ReactElement import 추가

import ToggleButton from '@/components/commons/buttons/ToggleButton';
import * as S from '@/components/plans/Plan.style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.min.css';

import DatePicker from 'react-datepicker';
import { ModernInput } from '@/components/commons/inputs/Input';
import { usePlanStore } from '@/store/usePlanStore';

const PlanCreate = () => {
  const navigate = useNavigate();
  // 로컬 상태 훅 대신 Zustand 스토어 사용
  const { isPublic, dateRange, setIsPublic, setDateRange } = usePlanStore();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const { setArea, setBudget } = usePlanStore();

  // 이 컴포넌트는 달력 포탈을 열기 위한 버튼을 렌더링합니다.
  const CalendarButton = React.forwardRef<
    HTMLImageElement,
    { onClick: () => void }
  >(({ onClick }, ref) => (
    <img
      ref={ref}
      src="/assets/icons/arrow_to_right.png"
      onClick={onClick}
      alt="Calendar"
      style={{ cursor: 'pointer' }}
    />
  ));

  CalendarButton.displayName = 'CalendarButton';

  // 날짜 범위 변경 핸들러
  const handleDateRangeChange = (update: [Date, Date]) => {
    setDateRange(update);
    // 선택 범위가 완료되면 달력을 자동으로 닫도록 설정할 수 있음
    if (update[0] && update[1]) {
      setIsCalendarOpen(false);
    }
  };
  // 지역 입력 필드 onChange 핸들러
  const handleAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArea(e.target.value); // Zustand 스토어의 setArea 메소드 호출
  };

  // 예산 입력 필드 onChange 핸들러
  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(parseInt(e.target.value, 10)); // Zustand 스토어의 setBudget 메소드 호출
  };

  // 여행 기간 텍스트를 표시하기 위한 함수
  const displayDateRange = () => {
    const start = dateRange[0] ? dateRange[0].toLocaleDateString() : '';
    const end = dateRange[1] ? dateRange[1].toLocaleDateString() : '';

    return `${start} - ${end}`;
  };

  // 토글
  const toggleIsPublic = () => setIsPublic(!isPublic);

  // 다음 페이지 넘어가기
  const handleNextClick = () => {
    if (dateRange[0] && dateRange[1]) {
      // 날짜 범위가 모두 선택되었다면, 지역과 예산 데이터를 가져옵니다.
      const { area, budget } = usePlanStore.getState();

      // navigate 함수를 사용하여 다음 페이지로 넘어가면서 상태 데이터를 전달합니다.
      navigate('/planCreate/2', {
        state: {
          startDate: dateRange[0],
          endDate: dateRange[1],
          area,
          budget,
          // 다른 필요한 상태 데이터도 이곳에 추가할 수 있습니다.
        },
      });
    } else {
      // 날짜가 제대로 선택되지 않았다면, 경고 메시지를 표시하거나 다른 처리를 할 수 있습니다.
      console.log('날짜를 모두 선택해주세요.');
    }
  };

  return (
    <>
      <S.PlanFirstSection>
        <h3>[일본 | 도쿄] 일본 여행</h3>
        <div>
          <ToggleButton isChecked={isPublic} onToggle={toggleIsPublic} />
        </div>
      </S.PlanFirstSection>
      <S.PlanSecondSection>
        {/* 플랜 계획 첫페이지 */}
        <div>
          {/* 작성자 칸 */}
          <S.PlanWriterBox>
            <img src="/assets/icons/pinPoint.png" />
            <div></div>
          </S.PlanWriterBox>
          {/* 지역 */}
          <S.PlanBox>
            <img src="/assets/icons/pinPoint.png" />
            <S.PlanContent>
              <S.PlanContentTitle>지역</S.PlanContentTitle>
              <ModernInput
                type="text"
                placeholder="부산"
                width={100}
                height={30}
                border="transparent"
                onChange={handleAreaChange} // 지역 입력 필드에 onChange 이벤트 추가
              />
            </S.PlanContent>
          </S.PlanBox>
          {/*예산 */}
          <S.PlanBox>
            <img src="/assets/icons/dolor.png" />
            <S.PlanContent>
              <S.PlanContentTitle>예산</S.PlanContentTitle>
              <ModernInput
                type="text"
                placeholder="100000"
                width={100}
                height={30}
                border="transparent"
                onChange={handleBudgetChange} // 예산 입력 필드에 onChange 이벤트 추가
              />
            </S.PlanContent>
          </S.PlanBox>
          {/*기간 선택*/}
          <S.PlanBox>
            <img src="/assets/icons/calendar.png" />
            <S.PlanHorizontalContent>
              <S.PlanContentTitle>기간</S.PlanContentTitle>
              <div>{displayDateRange()}</div>
              <DatePicker
                selectsRange={true}
                startDate={dateRange[0]}
                endDate={dateRange[1]}
                onChange={handleDateRangeChange}
                customInput={
                  <CalendarButton
                    onClick={function (): void {
                      throw new Error('Function not implemented.');
                    }}
                  />
                } // 이제 여기서 ref와 onClick 모두 처리 가능
                withPortal
                open={isCalendarOpen}
                shouldCloseOnSelect={true}
                onCalendarOpen={() => setIsCalendarOpen(true)}
                onCalendarClose={() => setIsCalendarOpen(false)} // 달력이 닫힐 때 상태를 업데이트하는 콜백 추가
              />
            </S.PlanHorizontalContent>
          </S.PlanBox>
        </div>
      </S.PlanSecondSection>
      <S.PlanBottomSection>
        {/* 다음 버튼 */}
        <S.PlanNextButton onClick={handleNextClick}>다음</S.PlanNextButton>
      </S.PlanBottomSection>
    </>
  );
};

export default PlanCreate;
