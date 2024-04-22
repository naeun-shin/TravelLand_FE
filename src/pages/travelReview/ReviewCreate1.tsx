// import Header from '@/components/layouts/Header';
import ReDesignHeader2 from '@/components/layouts/Header3';
import ReviewCreate from '@/components/reviews/reviewIndex/TReviewCreate';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ReviewCreate1 = () => {
  // const navigate = useNavigate();
  const [step, _] = useState<number>(1);

  return (
    <>
      <ReDesignHeader2 />
      <CenteredContainer>
        <h2>여행 정보 작성하기</h2>
        <StepperContainer>
          <ProgressBar width={(step * 33).toString() + '%'} />
        </StepperContainer>
        <ReviewCreate />
      </CenteredContainer>
    </>
  );
};

export default ReviewCreate1;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
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
