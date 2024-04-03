import Header from '@/components/layouts/Header';
import * as S from './TravelReview.styles';
import ReviewPageTab from '@/components/commons/user/TravelReview/ReviewTab';
import Card from '@/components/commons/cards/Card';
import { useNavigate } from 'react-router-dom';

const TravelReviewPage = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/TravelDetailPage');
  };

  const handleTextClick = () => {
    navigate('/travelCreate');
  };
  return (
    <>
      <Header />
      <S.TravelReviewstyle>
        <h2>여행 후기</h2>
        <h2 onClick={handleTextClick}>작성하기</h2>
        <ReviewPageTab />
        <S.TravelReviewCardSection>
          <Card
            title="황*미님"
            writer="2024.04.03"
            date="♥20"
            onClick={handleCardClick}
          />
          <Card
            title="신*은님"
            writer="2024.04.03"
            date="♥20"
            onClick={handleCardClick}
          />
          <Card
            title="김*용님"
            writer="2024.04.03"
            date="♥20"
            onClick={handleCardClick}
          />
        </S.TravelReviewCardSection>
      </S.TravelReviewstyle>
    </>
  );
};

export default TravelReviewPage;
