import Header from '@/components/layouts/Header';
import * as S from './TravelReview.styles';
import ReviewPageTab from '@/components/commons/user/TravelReview/ReviewTab';
import Card from '@/components/commons/cards/Card';
// import MyPageIndex from '@/components/commons/user/myPage/MyPageIndex';

const TravelReviewPage = () => {
  return (
    <>
      <Header />
      <S.TravelReviewstyle>
        {/* 타이틀 */}
        <h2>여행 후기</h2>
        <ReviewPageTab />
        <Card />
      </S.TravelReviewstyle>
    </>
  );
};

export default TravelReviewPage;
