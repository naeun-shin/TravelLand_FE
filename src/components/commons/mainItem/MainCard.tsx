import React, { useState } from 'react';
import * as S from './MainCard.style';
import CategoryButton from '../buttons/CategoryButton';

// 메인 헤더 카드 인터페이스 업데이트
interface CardProps {
  title: string;
  categories: string[];
  imageUrl: string;
  location: string;
  startDate: string;
  endDate: string;
}

interface MainCardProps {
  cards: CardProps[];
}

export interface MainCardStyle {
  BookmarkIcon: string;
  // 다른 스타일 속성들...
}
const MainCard: React.FC<MainCardProps> = ({ cards = [] }) => {
  // 각 카드의 북마크 상태를 관리하는 state
  const [bookmarks, setBookmarks] = useState<boolean[]>(
    new Array(cards.length).fill(false),
  );

  // 북마크 토글 함수
  // const toggleBookmark = (index: number) => {
  //   const updatedBookmarks = [...bookmarks];
  //   updatedBookmarks[index] = !updatedBookmarks[index];
  //   setBookmarks(updatedBookmarks);
  // };

  // const BookmarkIcon: React.FC<{
  //   src: string;
  //   alt: string;
  //   onClick: () => void;
  // }> = ({ src, alt, onClick }) => <img src={src} alt={alt} onClick={onClick} />;

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
              {/* 위치, 날짜 */}
              <div>
                <S.Title>
                  {card.location} | {card.startDate} - {card.endDate}
                </S.Title>
              </div>
              {/* 제목 */}
              <div>
                <S.Price>{card.title}</S.Price>
              </div>
              {/* 카테고리 버튼 */}
              <S.CategoriesContainer>
                {card.categories.map((category, index) => (
                  <CategoryButton key={index} title={category} />
                ))}
              </S.CategoriesContainer>
            </S.TextContainer>
          </S.CardContainer>
        ))}
    </S.CardContainerWrapper>
  );
};

export default MainCard;
