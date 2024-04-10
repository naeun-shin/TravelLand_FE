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
  const location = useLocation();
  // 타입 단언을 사용하여 location.state의 타입을 명시합니다.
  const state = location.state as LocationState;

  // 이제 state에서 startDate와 endDate를 안전하게 사용할 수 있습니다.
  const { startDate, endDate } = state;

  const [currentStep, setCurrentStep] = useState<number>(0); // 현재 스텝 인덱스
  // planList를 객체의 배열로 변경합니다.
  // 각 객체는 개별 PlanListInput 컴포넌트의 상태를 담습니다.
  const [planList, _] = useState([
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

  // Subscribe to unitPlans from the store
  const unitPlans = useUnitPlansStore((state) => state.unitPlans);
  console.log(unitPlans);

  const handleDayChange = (stepIndex: number) => {
    // 현재 날짜의 계획 저장
    usePlanStore
      .getState()
      .setUnitPlansForDay(currentStep.toString(), planList);

    // 선택된 날짜의 계획 불러오기 혹은 초기화
    // const nextDayPlans = usePlanStore
    //   .getState()
    //   .getUnitPlansForDay(stepIndex.toString());

    // nextDayPlans를 올바른 형태로 매핑
    // const nextDayPlansMapped = nextDayPlans.map((plan) => ({
    //   departure: plan.departure, // departure가 undefined인 경우 빈 문자열을 사용
    //   time: plan.time,
    //   schedule: plan.schedule,
    //   location: plan.location,
    // }));

    // 매핑된 배열을 상태로 설정
    // setPlanList(nextDayPlansMapped);
    // nextDayPlansMapped.length
    //   ? nextDayPlansMapped
    //   : [{ departure: '', time: '', schedule: '', location: '' }],

    // 현재 스텝 업데이트
    setCurrentStep(stepIndex);
  };

  // 등록하기 버튼
  const handlePlanSubmit = () => {
    // 현재 날짜의 계획을 반드시 저장
    usePlanStore
      .getState()
      .setUnitPlansForDay(currentStep.toString(), planList);

    // 서버로 제출하기 위한 준비
    const wholePlan = usePlanStore.getState().dayPlans;
    console.log(wholePlan);
  };
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
        {planList.map((plan, index) => (
          <PlanListInput key={index} {...plan} /> // {...plan}은 plan 객체의 속성을 PlanListInput에 전달한다고 가정
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
