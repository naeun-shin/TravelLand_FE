import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layouts/Header';
import * as S from './TravelReview.styles';
import ReviewPageTab from '@/components/commons/user/TravelReview/ReviewTab';
import Card from '@/components/commons/cards/Card';
import { getTripList } from '@/api/reviewAxios';
import { AxiosResponse } from 'axios';

interface Trip {
  tripId: number;
  title: string;
  nickname: string;
  thumbnailUrl: string;
  tripPeriod: string;
  viewCount: number;
  createdAt: string;
}

const TravelReviewPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const [trips, setTrips] = useState<Trip[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadTrips = async () => {
    setLoading(true);
    try {
      const response: AxiosResponse<Trip[]> = await getTripList({
        page,
        size: 9,
        sortBy: 'createdAt',
        isAsc: false,
      });
      const responseData: Trip[] = response.data;
      setTrips((prevTrips) => [...prevTrips, ...responseData]);
      if (responseData.length === 0 || responseData.length < 9) {
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
  }, []);

  const handleCardClick = (tripId: number) => {
    navigate(`/travelDetail/${tripId}`);
  };

  const handleTextClick = () => {
    navigate('/travelCreate');
  };

  const fetchMoreData = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (loading && page === 1)
    return <S.LoadingContainer>Loading...</S.LoadingContainer>;
  if (error) return <S.ErrorContainer>Error: {error}</S.ErrorContainer>;

  return (
    <div id="scrollableDiv">
      <Header />
      <S.TravelReviewstyle>
        <S.ReviewBox>
          <h2>여행 후기</h2>
          <S.ReviewBtn style={{ cursor: 'pointer' }} onClick={handleTextClick}>
            작성하기
          </S.ReviewBtn>
        </S.ReviewBox>
        <ReviewPageTab />
        <InfiniteScroll
          style={{ overflow: 'hidden' }}
          dataLength={trips.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={<p>더 이상 로드할 내용이 없습니다.</p>}
          scrollableTarget="scrollableDiv"
        >
          <S.TravelReviewCardSection>
            {trips.map((trip) => (
              <Card
                key={trip.tripId}
                title={trip.title}
                writer={trip.nickname}
                date={`♥${trip.viewCount}`}
                imageUrl={trip.thumbnailUrl}
                onClick={() => handleCardClick(trip.tripId)}
              />
            ))}
          </S.TravelReviewCardSection>
        </InfiniteScroll>
      </S.TravelReviewstyle>
    </div>
  );
};

export default TravelReviewPage;
