// import React from 'react';
import * as S from './MainCard.style';
// import Button from '../buttons/Button';

// interface CardProps {
//   title?: string;
//   category?: string;
//   price?: string;
//   imageUrl?: string;
// }

const MainCard = () => {
  return (
    <S.CardContainerWrapper>
      <S.CardContainer>
        <S.ImageContainer>
          {/* <img src={imageUrl} alt="이미지" /> */}
        </S.ImageContainer>
        <S.TextContainer>
          <S.Category>#특급호텔</S.Category>
          {/* <h3>{title}</h3> */}
          <S.Title>일본 후쿠오카</S.Title>
          {/* <p>{price}</p> */}
          <S.Price>199,000원</S.Price>
        </S.TextContainer>
      </S.CardContainer>
      <S.CardContainer>
        <S.ImageContainer>
          {/* <img src={imageUrl} alt="이미지" /> */}
        </S.ImageContainer>
        <S.TextContainer>
          <S.Category>#특급호텔</S.Category>
          {/* <h3>{title}</h3> */}
          <S.Title>일본 후쿠오카</S.Title>
          {/* <p>{price}</p> */}
          <S.Price>199,000원</S.Price>
        </S.TextContainer>
      </S.CardContainer>
      <S.CardContainer>
        <S.ImageContainer>
          {/* <img src={imageUrl} alt="이미지" /> */}
        </S.ImageContainer>
        <S.TextContainer>
          <S.Category>#카테고리</S.Category>
          {/* <h3>{title}</h3> */}
          <S.Title>일본 후쿠오카</S.Title>
          {/* <p>{price}</p> */}
          <S.Price>199,000원</S.Price>
        </S.TextContainer>
      </S.CardContainer>
    </S.CardContainerWrapper>
  );
};

export default MainCard;
