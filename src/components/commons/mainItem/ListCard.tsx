import React from 'react';
import * as S from './MainCard.style';
import CategoryButton from '../buttons/CategoryButton';
// import styled from 'styled-components';

// 여행 정보 목록 카드 인터페이스
export interface ListCardProps {
  tripId?: number;
  area?: string;
  title?: string;
  tripStartDate?: string;
  tripEndDate?: string;
  thumbnailUrl?: string;
  hashtagList?: string[];
  isScrap?: boolean;
  viewCount?: number;
  onClick?: () => void; // 클릭 이벤트 핸들러 함수를 props로 추가
}

export const ListCard: React.FC<ListCardProps> = ({
  tripId,
  area,
  title,
  tripStartDate,
  tripEndDate,
  thumbnailUrl,
  hashtagList,
  // isScrap,
  // viewCount,
  onClick,
}) => {
  return (
    <S.CardContainer key={tripId} onClick={onClick}>
      <S.ImageContainer>
        <img src={thumbnailUrl} alt={title} />
      </S.ImageContainer>
      <S.TextContainer>
        <div>
          <S.Title>
            {area} | {tripStartDate} - {tripEndDate}
          </S.Title>
        </div>
        <div>
          <S.Price>{title}</S.Price>
        </div>
        <S.CategoriesContainer>
          {hashtagList?.map((category, idx) => (
            <CategoryButton key={idx} title={category} hoverColor="none" />
          ))}
        </S.CategoriesContainer>
      </S.TextContainer>
    </S.CardContainer>
  );
};

export default ListCard;
