// import * as S from '@/pages/travelPlan/TravelPlanMain.style';
import Header from '@/components/layouts/Header';
import ReviewCreate from '@/components/reviews/reviewIndex/ReviewCreate';
import styled from 'styled-components';

const ReviewCreate1 = () => {
  return (
    <>
      <Header />
      <CenteredContainer>
        <h2>여행 정보 작성하기</h2>
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
  max-width: 1100px;
  margin: 0 auto;
`;
