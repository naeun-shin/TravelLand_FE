import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import * as S from './TravelReview.styles';

import { getTripList } from '@/api/reviewAxios';
// import { AxiosResponse } from 'axios';
import styled from 'styled-components';
import ListCard from '@/components/commons/mainItem/ListCard';
import CategoryButton from '@/components/commons/buttons/CategoryButton';
import { useInfiniteQuery } from '@tanstack/react-query';

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
  // const [page, setPage] = useState<number>(1);
  // const [trips, setTrips] = useState<Trip[]>([]);
  // const [hasMore, setHasMore] = useState<boolean>(true);
  // const [loading, setLoading] = useState<boolean>(false);
  // const [_, setError] = useState<string | null>(null);
  const [area, setArea] = useState<string>(Area['전체']);

  const fetchTrips = async ({ pageParam = 1 }) => {
    const response = await getTripList({
      page: pageParam,
      size: 8,
      sortBy: 'createdAt',
      isAsc: false,
    });
    return response.data;
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    error,
    // isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['trips', area],
    queryFn: fetchTrips,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 8) return undefined;
      return allPages.length + 1;
    },
  });

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

  // const fetchMoreData = () => {
  //   // console.log('스크롤 감지', hasMore);
  //   if (!loading && hasMore) {
  //     setPage((prevPage) => prevPage + 1);
  //     // console.log('page증가');
  //   }
  // };

  if (isLoading) return <S.LoadingContainer>Loading...</S.LoadingContainer>;
  if (error) return <S.ErrorContainer>Error</S.ErrorContainer>;

  return (
    <>
      {/* <ScrollDiv id="scrollableDiv"> */}
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
          dataLength={data?.pages.flatMap((page) => page).length || 0}
          next={fetchNextPage}
          hasMore={!!hasNextPage}
          loader={<div className="loader">Loading...</div>}
          scrollableTarget="scrollableDiv"
        >
          <S.TravelReviewCardSection style={{ cursor: 'pointer' }}>
            {data?.pages
              .flatMap((page) => page)
              .map((trip) => (
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
              ))}
          </S.TravelReviewCardSection>
        </InfiniteScroll>
      </S.TravelReviewstyle>
      {/* </ScrollDiv> */}
    </>
  );
};

export default TravelReviewPage;

// const ScrollDiv = styled.div`
//   height: 90vh;
//   overflow-y: auto;
//   overflow-x: hidden;
//   width: 100%;
//   box-sizing: border-box;
// `;

const ReviewCateBox = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding-left: 45px;
`;
