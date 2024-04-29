import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import * as S from './TravelReview.styles';

import { getTripList } from '@/api/reviewAxios';
import { AxiosResponse } from 'axios';
import styled from 'styled-components';
import ListCard from '@/components/commons/mainItem/ListCard';
import CategoryButton from '@/components/commons/buttons/CategoryButton';

export interface Trip {
  tripId: number;
  area?: string;
  title?: string;
  tripStartDate?: string;
  tripEndDate?: string;
  thumbnailUrl?: string;
  hashtagList?: string[];
  isScrap?: boolean;
  viewCount?: number;
}

enum Area {
  '전체' = '전체',
  '서울' = '서울',
  '경기' = '경기',
  '강원' = '강원',
  '대전' = '대전',
  '충북충남' = '충북충남',
  '경북경남' = '경북경남',
  '부산' = '부산',
  '울산' = '울산',
  '전북전남' = '전북전남',
  '제주' = '제주',
}

const TravelReviewPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const [trips, setTrips] = useState<Trip[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [_, setArea] = useState<string>(Area['전체']);

  const loadTrips = async () => {
    setLoading(true);
    try {
      const response: AxiosResponse<Trip[]> = await getTripList({
        page,
        size: 8,
        sortBy: 'createdAt',
        isAsc: false,
      });
      const responseData: Trip[] = response.data;
      setTrips((prevTrips) => [...prevTrips, ...responseData]);
      if (responseData.length === 0 && responseData.length < 8) {
        setHasMore(false);
      }
    } catch (error) {
      setError('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTrips();
    // console.log('현재페이지', page);
  }, [page]);

  const handleCardClick = (tripId?: number) => {
    navigate(`/travelDetail/${tripId}`);
  };

  const handleTextClick = () => {
    navigate('/travelCreate');
  };

  const handleSearchByLocation = (area: Area) => {
    setArea(area);
    navigate('/results', { state: { area } });
  };

  const fetchMoreData = () => {
    // console.log('스크롤 감지', hasMore);
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
      // console.log('page증가');
    }
  };

  if (loading && page === 1)
    return <S.LoadingContainer>Loading...</S.LoadingContainer>;
  if (error) return <S.ErrorContainer>Error: {error}</S.ErrorContainer>;

  return (
    <>
      <ScrollDiv id="scrollableDiv">
        <S.TravelReviewstyle>
          <div>
            <S.ReviewBox>
              <h2 style={{ fontSize: '28px' }}>떠돌이 랜드</h2>
              <S.ReviewBtn
                style={{ cursor: 'pointer' }}
                onClick={handleTextClick}
              >
                정보 작성하기
              </S.ReviewBtn>
            </S.ReviewBox>
            <ReviewCateBox>
              <h2>지역별 여행 후기</h2>
              <div style={{ display: 'flex' }}>
                {Object.entries(Area).map(([label, value]) => (
                  <CategoryButton
                    key={value}
                    title={label}
                    onClick={() => handleSearchByLocation(value as Area)}
                    cursor="pointer"
                  />
                ))}
              </div>
            </ReviewCateBox>
          </div>
          <InfiniteScroll
            style={{ overflow: 'hidden' }}
            dataLength={trips.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
            // endMessage={<p>더 이상 로드할 내용이 없습니다.</p>}
            scrollableTarget="scrollableDiv"
          >
            <S.TravelReviewCardSection style={{ cursor: 'pointer' }}>
              {trips.map((trip) => (
                <>
                  <ListCard
                    key={trip.tripId}
                    tripId={trip.tripId}
                    area={trip.area}
                    title={trip.title}
                    tripStartDate={trip.tripStartDate}
                    tripEndDate={trip.tripEndDate}
                    thumbnailUrl={trip.thumbnailUrl}
                    hashtagList={trip.hashtagList}
                    isScrap={trip.isScrap}
                    viewCount={trip.viewCount}
                    onClick={() => handleCardClick(trip.tripId)}
                  />
                </>
              ))}
            </S.TravelReviewCardSection>
          </InfiniteScroll>
        </S.TravelReviewstyle>
      </ScrollDiv>
    </>
  );
};

export default TravelReviewPage;

const ScrollDiv = styled.div`
  height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;
`;

const ReviewCateBox = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding-left: 45px;
`;
