import React, { useState } from 'react';
// import { IoLocationSharp } from 'react-icons/io5';
import * as S from './Search.style';
import styled from 'styled-components';
import CategoryButton from '../commons/buttons/CategoryButton';
import {
  useGetSearchResultAreaQuery,
  useGetSearchResultHashtagQuery,
} from '@/hooks/useQuery';
import { useLocation, useNavigate } from 'react-router-dom';

// interface IPlaceNameProps {
//   name: string;
// }

interface SearchResult {
  tripId: number;
  thumbnailUrl: string;
  area: string;
  tripStartDate: string;
  tripEndDate: string;
  title: string;
  content: string;
  placeName: string;
  hashtagList: string[]; // 카테고리는 문자열 배열로 가정합니다.
}

// const PlaceName: React.FC<IPlaceNameProps> = ({ name }) => (
//   <div style={{ color: '#3AB9F0' }}>{name}</div>
// );

// 타입 안전성을 위한 추가적인 검사를 할 수 있습니다.
const validateData = (data: any): data is SearchResult[] => {
  return (
    Array.isArray(data) && data.every((item) => item.hasOwnProperty('tripId'))
  );
};

const ResultsContent: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { area, hashtag } = location.state || {}; // Assume location.state could be undefined

  const [activeTab, setActiveTab] = useState(0); // 선택된 탭의 인덱스를 추적
  const [page, _] = useState<number>(1);
  const [size] = useState<number>(9);
  const [sortBy] = useState<string>('createdAt');
  const [isAsc] = useState<boolean>(false);

  console.log('area ', area);
  console.log('hashtag ', hashtag);

  const searchAreaParams = { area, page, size, sortBy, isAsc };
  const searchHashtagParams = { hashtag, page, size, sortBy, isAsc };

  // Custom hooks for fetching data
  const {
    data: areaResults,
    isLoading: areaLoading,
    isError: areaError,
  } = useGetSearchResultAreaQuery(searchAreaParams);
  const {
    data: hashtagResults,
    isLoading: hashtagLoading,
    isError: hashtagError,
  } = useGetSearchResultHashtagQuery(searchHashtagParams);

  const handleGoToDetail = (tripId: number) => {
    navigate(`/travelDetail/${tripId}`);
  };
  if (areaLoading || hashtagLoading) return <div>Loading...</div>;
  if (areaError || hashtagError) return <div>Error loading data</div>;

  const results = area ? areaResults : hashtagResults;
  console.log(results);
  if (!results || !validateData(results)) return <div>데이터가 없습니다!</div>; // 데이터가 유효한 배열인지 확인

  return (
    <S.ResultContainer>
      <S.ResultBox>
        <S.ResultTitle>
          {/* <div style={{ display: 'flex', alignItems: 'center' }}>
            <PlaceName name={results.placeName} />
            <span style={{ marginLeft: '0.3rem' }}>주변에 가볼만한 곳</span>
          </div> */}
        </S.ResultTitle>
      </S.ResultBox>
      <S.TabContainer>
        {/* {place.map((tab) => (
          <S.TabButton key={tab}>
            <IoLocationSharp /> {tab}
          </S.TabButton>
        ))} */}
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
          {/* <SearchTitle
            className={activeTab === 1 ? 'active' : ''}
            onClick={() => setActiveTab(1)}
          >
            여행 플랜
          </SearchTitle> */}
        </Sort>
      </DivWrapper>
      <S.ResultsContainer>
        {results.map((result: SearchResult, index: number) => (
          <S.ResultItem key={index}>
            <ThumbnailImage src={result.thumbnailUrl} alt={result.title} />
            <S.ContentWrapper>
              <Location>
                {result.area} |{' '}
                {`${result.tripStartDate} - ${result.tripEndDate}`}
              </Location>
              <S.ItemTitle onClick={() => handleGoToDetail(result.tripId)}>
                {result.title}
              </S.ItemTitle>
              <S.ItemContent>
                {result.content}...
                <span onClick={() => handleGoToDetail(result.tripId)}>
                  더보기
                </span>
              </S.ItemContent>
              <CategoriesContainer>
                {result.hashtagList.map((hashTag: string, idx: number) => (
                  <CategoryButton key={idx} title={hashTag} />
                ))}
              </CategoriesContainer>
            </S.ContentWrapper>
          </S.ResultItem>
        ))}
      </S.ResultsContainer>
    </S.ResultContainer>
  );
};

export default ResultsContent;

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
