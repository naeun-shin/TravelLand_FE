import React, { useEffect, useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import * as S from './Search.style';
import styled from 'styled-components';
import CategoryButton from '../commons/buttons/CategoryButton';
import { useNavigate, useLocation } from 'react-router-dom';
interface IPlaceNameProps {
  name: string;
}

const PlaceName: React.FC<IPlaceNameProps> = ({ name }) => (
  <div style={{ color: '#3AB9F0' }}>{name}</div>
);

const ResultsContent: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const location = useLocation();
  const [searchResults, setSearchResults] = useState<any[]>([]); // 검색 결과를 저장할 상태

  const placeName = '고성시';
  const place = ['조계사', '경인미술관', '숭례문'];

  // 게시물 클릭 (상세보기이동)
  const handleItemClick = (tripId: number) => {
    navigate(`/travelDetail/${tripId}`);
  };

  useEffect(() => {
    // location.state에서 searchData를 확인하고 상태를 설정
    const data = location.state?.searchData || [];
    setSearchResults(data);
  }, [location]);

  //
  useEffect(() => {
    if (location.state?.searchData) {
      setSearchResults(location.state.searchData);
    }
  }, [location]);

  return (
    <S.ResultContainer>
      <S.ResultBox>
        <S.ResultTitle>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <PlaceName name={placeName} />
            <span style={{ marginLeft: '0.3rem' }}>주변에 가볼만한 곳</span>
          </div>
        </S.ResultTitle>
      </S.ResultBox>
      <S.TabContainer>
        {place.map((tab) => (
          <S.TabButton key={tab}>
            <IoLocationSharp /> {tab}
          </S.TabButton>
        ))}
      </S.TabContainer>

      <DivWrapper>
        <div>
          <SearchTitle
            className={activeTab === 0 ? 'active' : ''}
            onClick={() => setActiveTab(0)}
          >
            여행 정보
          </SearchTitle>
        </div>
        <Sort>
          <SearchTitle
            className={activeTab === 1 ? 'active' : ''}
            onClick={() => setActiveTab(1)}
          >
            여행 플랜
          </SearchTitle>
        </Sort>
      </DivWrapper>

      {/* 검색 결과를 화면에 표시 */}
      <S.ResultsContainer>
        {searchResults.length === 0 ? (
          <Notfound>해당하는 게시물을 찾을 수 없습니다.</Notfound>
        ) : (
          searchResults.map((data, index) => (
            <S.ResultItem
              key={index}
              onClick={() => handleItemClick(data.tripId)}
            >
              <ThumbnailImage src={data.thumbnailUrl} alt="썸네일" />
              <S.ContentWrapper>
                <Location>
                  {data.area} | {`${data.tripStartDate} - ${data.tripEndDate}`}
                </Location>
                <S.ItemTitle>{data.title}</S.ItemTitle>
                <S.ItemContent>{data.content}</S.ItemContent>
                {/* 여기서 map 함수를 호출하기 전에 data.categories가 존재하고 배열인지 확인합니다. */}
                <CategoriesContainer>
                  {Array.isArray(data.hashtagList) &&
                    data.hashtagList.map(
                      (category: string, categoryIndex: number) => (
                        <CategoryButton key={categoryIndex} title={category} />
                      ),
                    )}
                </CategoriesContainer>
              </S.ContentWrapper>
            </S.ResultItem>
          ))
        )}
      </S.ResultsContainer>
    </S.ResultContainer>
  );
};

export default ResultsContent;

const Notfound = styled.div`
  font-size: 24px;
  margin-top: 20px;
`;

const ThumbnailImage = styled.img`
  width: 280px;
  height: 220px;
  box-sizing: border-box;
`;

const DivWrapper = styled.div`
  display: flex;
  position: relative;
  border-bottom: 2px solid #eee;
  width: 1100px;
`;
const SearchTitle = styled.div`
  width: 110px;
  cursor: pointer;
  font-size: 24px;
  font-weight: 600;
  padding: 60px 0 30px 0;
  position: relative;
  text-align: center;

  &.active::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -2px;
    transform: translateX(-50%);
    width: 100%;
    border-bottom: 3px solid #000;
  }
`;

// const DateRange = styled.div`
// `;

const Location = styled.div`
  font-size: 20px;
  /* font-weight: 600; */
`;

const CategoriesContainer = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const Sort = styled.div`
  margin-left: 20px;
`;
