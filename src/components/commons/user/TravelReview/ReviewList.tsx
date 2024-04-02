import * as S from './Review.style';

const ReviewList = () => {
  return (
    <>
      <S.ReviewListContaier>
        <S.ReviewListLeft>
          <S.ReviewListCity>아시아</S.ReviewListCity>
          <S.ReviewListTitle>
            [일본 | 도쿄] 즐거운 여행었습니다
          </S.ReviewListTitle>
        </S.ReviewListLeft>
        <S.ReviewListRight>
          <div>이*애 님</div>
          <div>2024.03.31</div>
          <div>19</div>
        </S.ReviewListRight>
      </S.ReviewListContaier>
    </>
  );
};

export default ReviewList;
