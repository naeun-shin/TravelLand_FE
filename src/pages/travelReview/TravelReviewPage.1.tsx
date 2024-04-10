import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';
import Header from '@/components/layouts/Header';
import * as S from './TravelReview.styles';
import ReviewPageTab from '@/components/commons/user/TravelReview/ReviewTab';
import Card from '@/components/commons/cards/Card';
import { getTripList } from '@/api/reviewAxios';
import { TripData } from './TravelReviewPage';

export const TravelReviewPage = () => {
  const navigate = useNavigate();

  // 여행 정보 목록 조회 API 호출 함수
  const fetchTrips = async (context: {
    queryKey: QueryKey;
    pageParam?: number;
    signal: AbortSignal;
  }): Promise<TripData> => {
    // 페이지 번호는 pageParam이거나 기본값 0입니다.
    const pageParam = context.pageParam ?? 0;

    // context 객체에서 필요한 정보를 추출하여 API 호출을 수행합니다.
    const { data } = await getTripList({
      page: pageParam,
      size: 9,
      sortBy: 'createdAt',
      isAsc: false,
    });

    // API 응답에서 필요한 정보를 반환합니다.
    // 이 예에서는 API 응답에서 items와 hasNext 속성을 사용하는 것으로 가정합니다.
    const { items, hasNext } = data;
    return {
      items,
      nextPage: hasNext ? pageParam + 1 : undefined,
      isLast: !hasNext,
    };
  };

  // 무한 스크롤링 쿼리
  const { data, isLoading, isError, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery<TripData, Error>({
      queryKey: ['getTripList'],
      queryFn: fetchTrips,
      getNextPageParam: (lastPage) => {
        if (!lastPage.isLast) return lastPage.nextPage;
        return undefined;
      },
    });

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      !hasNextPage
    )
      return;
    fetchNextPage();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (isLoading) return <S.LoadingContainer>Loading...</S.LoadingContainer>;
  if (isError)
    return <S.ErrorContainer>Error: {error.message}</S.ErrorContainer>;

  return (
    <>
      <Header />
      <S.TravelReviewstyle>
        <S.ReviewBox>
          <h2>여행 후기</h2>
          <S.ReviewBtn
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/travelCreate')}
          >
            작성하기
          </S.ReviewBtn>
        </S.ReviewBox>
        <ReviewPageTab />
        <S.TravelReviewCardSection>
          {data?.pages.map((page, pageIndex) =>
            page.items.map((trip: any, tripIndex: any) => (
              <div key={`trip-${pageIndex}-${tripIndex}`}>
                <Card
                  title={trip.title}
                  writer={trip.nickname}
                  date={`♥${trip.viewCount}`}
                  imageUrl={trip.thumbnailUrl}
                  onClick={() => navigate(`/travelDetail/${trip.tripId}`)}
                />
              </div>
            )),
          )}
        </S.TravelReviewCardSection>
      </S.TravelReviewstyle>
    </>
  );
};
