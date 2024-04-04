// import React from 'react';
import * as S from '@components/commons/user/TravelReview/Review.style';

const ReviewDetailHeader = () => {
  return (
    <S.Container>
      <S.Title>상세보기</S.Title>
      <S.UserSection>
        <S.UserImage src="" alt="사진" />
        <S.UserName>황*미님</S.UserName>
      </S.UserSection>
      <S.ImageBox>
        {/* 이미지 삽입 */}
        <S.SliderDots>
          {/* 슬라이더 도트 */}
          {[...Array(5)].map((_, i) => (
            <S.Dot key={i} />
          ))}
        </S.SliderDots>
      </S.ImageBox>
    </S.Container>
  );
};

export default ReviewDetailHeader;
