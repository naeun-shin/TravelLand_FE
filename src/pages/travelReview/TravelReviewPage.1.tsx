import Header from '@/components/layouts/Header';
import * as S from './TravelReview.styles';
import ReviewPageTab from '@/components/commons/user/TravelReview/ReviewTab';
import Card from '@/components/commons/cards/Card';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getTripList } from '@/api/reviewAxios';
import {
  TripsResponse,
  LoadingContainer,
  ErrorContainer,
  Trip,
} from './TravelReviewPage';

export const TravelReviewPage = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(9);
  const [sortBy, setSortBy] = useState('createdAt');
  const [isAsc, setASC] = useState(false);

  const tripListParams = { page, size, sortBy, isAsc };

  // API 호출 및 타입 적용
  const { data, isLoading, isError, error } = useQuery<TripsResponse>({
    queryKey: ['getTripList'],
    queryFn: () =>
      getTripList(tripListParams).then((response) => response.data),
    staleTime: 0,
  });

  const handleCardClick = (tripId: number) => {
    navigate('/TravelDetailPage');
  };

  const handleTextClick = () => {
    navigate('/travelCreate');
  };

  // 로딩 상태 처리
  if (isLoading) return <LoadingContainer>Loading...</LoadingContainer>;

  // 에러 상태 처리
  if (isError) return <ErrorContainer>Error: {error.message}</ErrorContainer>;

  // const handleNextPage = () => {
  //   setPage((prevPage) => prevPage + 1);
  // };
  // const handleSortChange = (sortBy, isAsc) => {
  //   setSortBy(sortBy);
  //   setASC(isAsc);
  // };
  return (
    <>
      <Header />
      <S.TravelReviewstyle>
        <h2>여행 후기</h2>
        <h2 style={{ cursor: 'pointer' }} onClick={handleTextClick}>
          작성하기
        </h2>
        <ReviewPageTab />
        <S.TravelReviewCardSection>
          {data?.trips.map((trip: Trip, index: number) => (
            <Card
              key={index}
              title={trip.title} // 'name'을 'title'로 변경
              writer={trip.nickname} // 'date'를 'nickname'으로 변경
              date={`♥${trip.viewCount}`} // 'likes'를 'viewCount'로 변경
              onClick={() => handleCardClick(trip.tripId)} // 'id'를 'tripId'로 변경
            />
          ))}
        </S.TravelReviewCardSection>
      </S.TravelReviewstyle>
    </>
  );
};
