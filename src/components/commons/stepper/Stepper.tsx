import React, { useState } from 'react';
import styled from 'styled-components';

interface StepProps {
  steps: string[];
  contents: string[];
  currentStep: number;
  onStepClick: (stepIndex: number) => void;
}

interface ContentContainerProps {
  visible: boolean;
}
const StepperContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;
const Step = styled.div<{ isActive: boolean }>`
  margin-bottom: 10px;
  font-size: 18px;
  color: ${(props) => (props.isActive ? 'blue' : 'black')};
  cursor: pointer;
`;

const ContentContainer = styled.div<ContentContainerProps>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  margin-top: 10px;
`;

const ContentInput = styled.textarea`
  width: 200px;
  height: 100px;
`;

const Stepper: React.FC<StepProps> = ({
  steps,
  contents,
  currentStep,
  onStepClick,
}) => {
  const [isContentVisible, setIsContentVisible] = useState<boolean>(false);
  const [content, setContent] = useState<string>('');

  const handleClick = (stepIndex: number) => {
    onStepClick(stepIndex);
    setIsContentVisible(true);
    setContent(contents[stepIndex]);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  return (
    <StepperContainer>
      {steps.map((step, index) => (
        <div key={index}>
          <Step
            isActive={index === currentStep}
            onClick={() => handleClick(index)}
          >
            {step}
          </Step>
          {isContentVisible && currentStep === index && (
            <ContentContainer visible={isContentVisible}>
              <ContentInput value={content} onChange={handleChange} />
            </ContentContainer>
          )}
        </div>
      ))}
    </StepperContainer>
  );
};

export default Stepper;
