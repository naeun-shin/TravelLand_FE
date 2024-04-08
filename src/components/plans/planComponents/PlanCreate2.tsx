import { useEffect, useState } from 'react';
import * as S from '../Plan.style';
import { PlanListInput } from '@/components/commons/inputs/Input';
import Button from '@/components/commons/buttons/Button';
import { useLocation } from 'react-router-dom';

// 네비게이션에서 받을 수 있는 state의 타입 정의
interface LocationState {
  startDate: string;
  endDate: string;
}

const PlanCreate2 = () => {
  const location = useLocation<LocationState>(); // 타입스크립트를 사용하여 위치 상태의 타입 지정
  const { startDate, endDate } = location.state;

  const [currentStep, setCurrentStep] = useState<number>(0); // 현재 스텝 인덱스
  // 초기 상태에 하나의 빈 항목을 포함하는 배열로 설정
  const [planList, setPlanList] = useState<string[]>(['']);

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
  };

  const handlePlanAdd = () => {
    setPlanList([...planList, '']); // 빈 문자열을 추가하여 새로운 PlanListInput을 생성
  };

  const handlePlanSubmit = () => {};
  const handlePlanInputChange = (index: number, value: string) => {
    const updatedPlanList = [...planList];
    updatedPlanList[index] = value;
    setPlanList(updatedPlanList);
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
            <S.DetailHeaderSubDate>{displayDate}</S.DetailHeaderSubDate>|
            <S.DetaiHeaderSubDestination>
              <div>출발지</div>
              인사동 | 명동 | <div>도착지</div>
              서울타워{' '}
            </S.DetaiHeaderSubDestination>
          </S.DetailHeaderSubContent>
        </S.PlanDetailContentHeader>
        {planList.map((plan, index) => (
          <PlanListInput
            key={index}
            value={plan}
            onChange={(event) =>
              handlePlanInputChange(index, event.target.value)
            }
          />
        ))}
        {/* 추가하기 버튼 영역 */}
        <S.ButtonBoxToCenter>
          <Button
            text="추가하기"
            width="150px"
            height="50px"
            color="white"
            borderColor="black"
            borderRadius="15px"
            fontWeight="bold"
            onClick={handlePlanAdd} // 추가하기 버튼 클릭 핸들러 추가
          />
        </S.ButtonBoxToCenter>
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
