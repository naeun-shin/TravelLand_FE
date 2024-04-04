import { useState } from 'react';
import * as S from '../Plan.style';
import { PlanListInput } from '@/components/commons/inputs/Input';
import Button from '@/components/commons/buttons/Button';

const PlanCreate2 = () => {
  const dateArray: string[] = ['1일차', '2일차', '3일차']; // 표시할 일자 목록
  const [currentStep, setCurrentStep] = useState<number>(0); // 현재 스텝 인덱스
  const [planList, setPlanList] = useState<string[]>([]); // 계획 목록 상태 추가

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
    setPlanList(['0']);
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
        {/* 박스 헤더 영역 */}
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
        {/* 첫 번째 리스트 영역 */}
        <PlanListInput
          // value={planList[0]} // 첫 번째 값만 보이도록 설정
          onChange={(event) => handlePlanInputChange(0, event.target.value)}
        />
        {/* 나머지 리스트 영역 */}
        {/* {planList.slice(1).map((value, index) => (
          <PlanListInput
            key={index + 1} // 첫 번째 영역이 있으므로 index + 1부터 시작
            value={value}
            onChange={(event) =>
              handlePlanInputChange(index + 1, event.target.value)
            }
            currentListNumber={currentListNumber}
          />
        ))} */}
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
          onClick={handlePlanSubmit} // 추가하기 버튼 클릭 핸들러 추가
        />
      </S.ButtonBox>
    </>
  );
};

export default PlanCreate2;
