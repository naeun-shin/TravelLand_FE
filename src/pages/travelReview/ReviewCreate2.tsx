import { useState } from 'react';
import TReviewCreate2 from '@/components/reviews/reviewIndex/TReviewCreate2';
import styled from 'styled-components';
import ReDesignHeader from '@/components/layouts/Header2';

const ReviewCreate2 = () => {
  const [step, _] = useState<number>(2); // 현재 단계를 2로 설정

  return (
    <>
      <ReDesignHeader needSearchInput={true} />
      <CenteredContainer>
        <h2>여행 정보 작성하기</h2>
        <StepperContainer>
          <ProgressBar width={(step * 33).toString() + '%'} />{' '}
          {/* 현재 단계에 따라 프로그레스 바의 너비 설정 */}
        </StepperContainer>
      </CenteredContainer>
      <TReviewCreate2 />
    </>
  );
};

export default ReviewCreate2;

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
