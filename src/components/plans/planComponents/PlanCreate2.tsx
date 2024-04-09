import { useEffect, useState } from 'react';
import * as S from '../Plan.style';
import { PlanListInput } from '@components/commons/inputs/PlanListInput';
import Button from '@/components/commons/buttons/Button';
import { useLocation } from 'react-router-dom';
import { usePlanStore } from '@/store/usePlanStore';
import { useUnitPlansStore } from '@/store/useUnitPlanStore';

// 네비게이션에서 받을 수 있는 state의 타입 정의
interface LocationState {
  startDate: string;
  endDate: string;
}

const PlanCreate2: React.FC = () => {
  const location = useLocation<LocationState>(); // 타입스크립트를 사용하여 위치 상태의 타입 지정
  const { startDate, endDate } = location.state;

  const [currentStep, setCurrentStep] = useState<number>(0); // 현재 스텝 인덱스
  // planList를 객체의 배열로 변경합니다.
  // 각 객체는 개별 PlanListInput 컴포넌트의 상태를 담습니다.
  const [planList, setPlanList] = useState([
    { departure: '', time: '', schedule: '', location: '' },
  ]);

  // 총 일수 계산
  const calculateTotalDays = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diff = end.getTime() - start.getTime();
    const totalDays = Math.ceil(diff / (1000 * 3600 * 24)) + 1; // 종료 날짜 포함
    return totalDays;
  };

  // 총 일수 상태
  const [totalDays, setTotalDays] = useState(calculateTotalDays());

  // startDate와 currentStep을 기반으로 해당 일차의 날짜 계산
  const calculateDateForStep = (start: string, step: number): string => {
    const resultDate = new Date(start);
    resultDate.setDate(resultDate.getDate() + step);
    return resultDate.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // 각 일차의 날짜를 보여주는 부분을 업데이트
  const displayDate = calculateDateForStep(startDate, currentStep);

  useEffect(() => {
    setTotalDays(calculateTotalDays());
  }, [startDate, endDate]);

  const handleDayChange = (stepIndex: number) => {
    setCurrentStep(stepIndex);
    setPlanList(['']); // 다른 일차를 클릭하면 리스트를 초기화하여 1개의 항목만 보이도록 함
    usePlanStore.getState().clearPlansForDay(currentStep.toString());
  };

  // Subscribe to unitPlans from the store
  const unitPlans = useUnitPlansStore((state) => state.unitPlans);

  console.log(unitPlans);

  // // 추가하기 버튼
  // const handlePlanAdd = () => {};

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
        {planList.map((plan, index) => (
          <PlanListInput key={index} />
        ))}
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
    </>
  );
};

export default PlanCreate2;
