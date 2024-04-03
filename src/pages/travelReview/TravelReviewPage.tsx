import Header from '@/components/layouts/Header';
import * as S from './TravelReview.styles';
import ReviewPageTab from '@/components/commons/user/TravelReview/ReviewTab';
import Card from '@/components/commons/cards/Card';

const TravelReviewPage = () => {
  return (
    <>
      y
      <Header />
      <S.TravelReviewstyle>
        <S.TitleLink to="/travelDetail">여행 후기</S.TitleLink>
        <ReviewPageTab />
        <Card />
      </S.TravelReviewstyle>
    </>
  );
};

export default TravelReviewPage;
