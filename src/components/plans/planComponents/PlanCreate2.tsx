import { useState } from 'react';
import Stepper from '@/components/commons/stepper/Stepper';
import * as S from '../Plan.style';

const PlanCreate2 = () => {
  const dateArray: Array<String> = ['1일차', '2일차', '3일차'];
  const [currentStep, setCurrentStep] = useState<number>(0);
  const steps: string[] = ['Step 1', 'Step 2', 'Step 3']; // 각 스텝의 이름
  const contents: string[] = [
    'Step 1의 내용',
    'Step 2의 내용',
    'Step 3의 내용',
  ];

  const goToNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  return (
    <>
      {/* 여행 일자 박스 영역 */}
      <S.PlanDateButton>
        {dateArray.map((date, index) => (
          <button key={index}>{date}</button>
        ))}
      </S.PlanDateButton>
      {/* 스태퍼 박스 영역 */}
      <div>
        <Stepper
          steps={steps}
          contents={contents}
          currentStep={currentStep}
          onStepClick={handleStepClick}
        />
      </div>
    </>
  );
};

export default PlanCreate2;
