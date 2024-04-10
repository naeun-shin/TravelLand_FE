import { useEffect, useState } from 'react';
import * as S from '../Plan.style';
import { PlanListInput } from '@components/commons/inputs/PlanListInput';
import Button from '@/components/commons/buttons/Button';
import { useLocation } from 'react-router-dom';
import { usePlanStore } from '@/store/usePlanStore';
import { useUnitPlansStore } from '@/store/useUnitPlanStore';

const PlanCreate2: React.FC = () => {
  const location = useLocation();
  const { startDate, endDate } = location.state as {
    startDate: Date;
    endDate: Date;
    area: string;
    budget: number;
    // 다른 상태 데이터를 추가로 타입에 명시할 수 있습니다.
  };

  const { addDayPlan, finalizePlan } = usePlanStore();
  // 현재 스텝의 unitPlans를 저장하는 함수
  const saveCurrentStepPlans = () => {
    const unitPlansForDay = useUnitPlansStore.getState().unitPlans;
    addDayPlan(currentStep.toString(), unitPlansForDay);
  };

  const [currentStep, setCurrentStep] = useState<number>(0); // 현재 스텝 인덱스
  // planList를 객체의 배열로 변경합니다.
  // 각 객체는 개별 PlanListInput 컴포넌트의 상태를 담습니다.
  const [planList, _] = useState([
    { departure: '', time: '', schedule: '', location: '' },
  ]);

  useEffect(() => {
    useUnitPlansStore.getState().clearUnitPlans();
    // 새로운 일차에 대한 빈 unitPlan을 추가
    useUnitPlansStore
      .getState()
      .addUnitPlan({ departure: '', time: '', schedule: '', location: '' });
  }, [currentStep]); // currentStep이 변경될 때마다 실행

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
  const displayDate = calculateDateForStep(
    startDate.toDateString(),
    currentStep,
  );

  useEffect(() => {
    setTotalDays(calculateTotalDays());
  }, [startDate, endDate]);

  // Subscribe to unitPlans from the store
  const unitPlans = useUnitPlansStore((state) => state.unitPlans);
  console.log(unitPlans);

  const handleDayChange = (stepIndex: number) => {
    saveCurrentStepPlans(); // 현재 스텝의 unitPlans 저장
    setCurrentStep(stepIndex); // 다음 스텝으로 이동
    useUnitPlansStore.getState().clearUnitPlans(); // unitPlans 상태 초기화
  };

  // 등록하기 버튼
  const handlePlanSubmit = () => {
    saveCurrentStepPlans(); // 마지막 스텝의 unitPlans 저장
    const finalPlan = finalizePlan(); // 최종 계획 객체 생성
    console.log(finalPlan); // 콘솔에 최종 계획 객체 로깅

    // 여기에서 서버로 finalPlan을 전송하는 로직을 추가하세요.
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
