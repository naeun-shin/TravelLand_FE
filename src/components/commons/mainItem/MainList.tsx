import React from 'react';
import * as S from '@/components/commons/mainItem/MainItemStyle';
import CategoryButton from '../buttons/CategoryButton';
import { useNavigate } from 'react-router-dom';

interface ListItemProps {
  // rank: string;
  tripId: number;
  placeName?: string;
  area: string;
  content: string;
  title: string;
  location: string;
  hashtagList: string[];
  thumbnailUrl: string;
  tripStartDate: string;
  tripEndDate: string;
}

interface MainListProps {
  items: ListItemProps[];
}

const MainList: React.FC<MainListProps> = ({ items }) => {
  const navigate = useNavigate();

  const handleGoToDetail = (tripId: number) => {
    navigate(`/travelDetail/${tripId}`);
  };

  return (
    <S.MainListContainer>
      {items.map((item, index) => (
        <S.ItemContainer key={index}>
          <S.ImageSection>
            <S.Image
              src={item.thumbnailUrl}
              alt="이미지"
              onClick={() => handleGoToDetail(item.tripId)}
            />
            <S.BookmarkIcon />
          </S.ImageSection>
          <S.TextSection>
            <S.CategoriesContainer>
              {item.hashtagList.map((category, categoryIndex) => (
                <CategoryButton
                  key={categoryIndex}
                  title={category}
                  hoverColor="none"
                />
              ))}
            </S.CategoriesContainer>
            <S.Rank>{index + 1}</S.Rank>
            <S.Title>
              {item.area} | {item.tripStartDate} - {item.tripEndDate}
            </S.Title>
            <S.MainTitle>{item.title}</S.MainTitle>
            <S.Content>
              {item.content}...{' '}
              <span onClick={() => handleGoToDetail(item.tripId)}>더보기</span>{' '}
            </S.Content>
          </S.TextSection>
        </S.ItemContainer>
      ))}
    </S.MainListContainer>
  );
};

export default MainList;
