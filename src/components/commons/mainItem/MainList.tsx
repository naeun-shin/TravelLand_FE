import React from 'react';
import styled from 'styled-components';
import { CiBookmark } from 'react-icons/ci';
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
    <MainListContainer>
      {items.map((item, index) => (
        <ItemContainer key={index}>
          <ImageSection>
            <Image
              src={item.thumbnailUrl}
              alt="이미지"
              onClick={() => handleGoToDetail(item.tripId)}
            />
            <BookmarkIcon />
          </ImageSection>
          <TextSection>
            <CategoriesContainer>
              {item.hashtagList.map((category, categoryIndex) => (
                <CategoryButton
                  key={categoryIndex}
                  title={category}
                  hoverColor="none"
                />
              ))}
            </CategoriesContainer>
            <Rank>{index + 1}</Rank>
            <Title>
              {item.area} | {item.tripStartDate} - {item.tripEndDate}
            </Title>
            <MainTitle onClick={() => handleGoToDetail(item.tripId)}>
              {item.title}
            </MainTitle>
            <Content>
              {item.content}...{' '}
              <span onClick={() => handleGoToDetail(item.tripId)}>더보기</span>{' '}
            </Content>
          </TextSection>
        </ItemContainer>
      ))}
    </MainListContainer>
  );
};

export default MainList;

const MainListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 20px;
  width: 1400px;
  margin: 0 auto;
  margin-bottom: 100px;
  cursor: pointer;
`;

const BookmarkIcon = styled(CiBookmark)`
  position: absolute;
  bottom: 20px;
  right: 12px;
  font-size: 18px;
  color: #666;
  border: 2px solid #c5f1ff;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 5px;
  z-index: 9;
  background-color: #c5f1ff;
  cursor: pointer;
`;

const Rank = styled.div`
  /* position: absolute; */
  /* top: 10px; */
  /* left: 10px; */
  /* background: #fff; */
  padding: 5px 10px;
  /* margin-top: 20px; */
  color: #5ac8ec;
  font-family: 'Chab'; /* 다른 폰트 적용 */
  font-size: 36px;
  /* font-size: 3rem; */
  font-weight: lighter;
`;

const ItemContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 250px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  cursor: pointer;
`;

const ImageSection = styled.div`
  position: relative;
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextSection = styled.div`
  flex: 3;
  position: relative;
  padding: 15px;
`;

const Title = styled.div`
  /* margin-top: 70px; */
  padding: 5px 10px;
  color: #333;
  font-size: 14px;
  font-weight: 600;
`;

const MainTitle = styled.div`
  padding: 5px 10px;
  margin-top: 10px;
  color: #000;
  font-size: 22px;
  font-weight: 600;

  cursor: pointer;
`;

const Content = styled.div`
  padding: 5px 10px;
  margin: 10px 0 10px;
  color: #000;
  font-size: 17px;

  span {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 260px;
  height: 240px;
  border-radius: 10px;
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  /* margin-top: 3px; */
  gap: 2px;
  /* height: 100px;
  overflow: hidden;*/
`;
