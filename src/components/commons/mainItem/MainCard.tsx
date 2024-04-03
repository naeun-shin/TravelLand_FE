import React from 'react';
import * as S from './MainCard.style';
import CategoryButton from '../buttons/CategoryButton';

//메인 헤더 카드 인터페이스
interface CardProps {
  title: string;
  category: string;
  price: string;
  imageUrl: string;
}
interface MainCardProps {
  cards: CardProps[];
}

// 메인 리스트 인터페이스
export interface ListItemProps {
  title: string;
  location: string;
  description: string;
  likes: number;
  imageUrl: string;
}

// 메인 TOP 10 리스트 임시 데이터

const MainCard: React.FC<MainCardProps> = ({ cards = [] }) => {
  return (
    <S.CardContainerWrapper>
      {cards &&
        cards.map((card, index) => (
          <S.CardContainer key={index}>
            <S.ImageContainer>
              {/* 이미지 */}
              <img src={card.imageUrl} alt={card.title} />
            </S.ImageContainer>
            <S.TextContainer>
              {/* 카테고리, 타이틀, 가격 */}
              <CategoryButton title={card.category} />
              <S.Title>{card.title}</S.Title>
              <S.Price>{card.price}</S.Price>
            </S.TextContainer>
          </S.CardContainer>
        ))}
    </S.CardContainerWrapper>
  );
};

export default MainCard;
