import { useState } from 'react';
import Stepper from '@/components/commons/stepper/Stepper';
import * as S from '../Plan.style';

const PlanCreate2 = () => {
  const dateArray: string[] = ['1일차', '2일차', '3일차']; // 표시할 일자 목록
  const [currentStep, setCurrentStep] = useState<number>(0); // 현재 스텝 인덱스
  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const startDate: Date = (() => {
    const today = new Date();
    const start = new Date(today);
    start.setDate(today.getDate() + currentStep);
    return start;
  })();
  return (
    <>
      {/* 여행 일자 박스 영역 */}
      <S.PlanDetailDateBox>
        {dateArray.map((_, index) => {
          const date = new Date(startDate); // 시작일을 복사
          date.setDate(startDate.getDate() + index); // 해당 날짜로 설정
          return (
            <S.PlanDetailDateButton
              key={index}
              onClick={() => handleStepClick(index)}
              active={index === currentStep}
            >
              {`${index + 1}일차 `}
            </S.PlanDetailDateButton>
          );
        })}
      </S.PlanDetailDateBox>
      {/* 스태퍼 박스 영역 */}
      <S.PlanDetailContentBox>
        {/* 스테퍼 헤더 영역 */}
        <S.PlanDetailContentHeader>
          <S.DetailHeaderContent>
            {dateArray[currentStep]}
          </S.DetailHeaderContent>
          <S.DetailHeaderSubContent>
            <S.DetailHeaderSubDate>
              {`${startDate.getFullYear()}년 |  ${startDate.getMonth() + 1}월  | ${startDate.getDate()}일`}
            </S.DetailHeaderSubDate>
            |
            <S.DetaiHeaderSubDestination>
              <div>출발지</div>
              인사동 | 명동 | <div>도착지</div>
              서울타워{' '}
            </S.DetaiHeaderSubDestination>
          </S.DetailHeaderSubContent>
        </S.PlanDetailContentHeader>
      </S.PlanDetailContentBox>
    </>
  );
};

export default PlanCreate2;
