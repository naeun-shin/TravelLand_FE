import ReDesignHeader2 from '@/components/layouts/Header3';
import TReviewCreate3 from '@/components/reviews/reviewIndex/TReviewCreate3';
import { useState } from 'react';
// import React from 'react';
import styled from 'styled-components';

const ReviewCreate3 = () => {
  const [step, _] = useState<number>(3);

  return (
    <>
      <ReDesignHeader2 />
      <CenteredContainer>
        <h2>여행 정보 작성하기</h2>
        <StepperContainer>
          <ProgressBar width={(step * 33.5).toString() + '%'} />
        </StepperContainer>
        <TReviewCreate3 />
      </CenteredContainer>
    </>
  );
};

export default ReviewCreate3;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 120px;

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 40px;
  }
`;

const StepperContainer = styled.div`
  max-width: 700px;
  width: 100%;
  height: 20px;
  background-color: #eee;
  border-radius: 10px;
  margin-bottom: 30px;
`;

const ProgressBar = styled.div<{ width: string }>`
  border-radius: 10px;
  height: 100%;
  background-color: #5ac8ec;
  width: ${({ width }) => width};
`;
