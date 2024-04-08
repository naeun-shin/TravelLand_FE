import Header from '@/components/layouts/Header';
import * as S from './TravelReview.styles';
import ReviewPageTab from '@/components/commons/user/TravelReview/ReviewTab';
import Card from '@/components/commons/cards/Card';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getTripList } from '@/api/reviewAxios';
import styled from 'styled-components';

// 여행 정보 목록 조회
interface Trip {
  tripId: number;
  title: string;
  nickname: string;
  thumbnailUrl: string;
  tripPeriod: string;
  viewCount: number;
  createdAt: string;
}
interface TripsResponse {
  data: Trip[];
}
const TravelReviewPage = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(9);
  const [sortBy, setSortBy] = useState('createdAt');
  const [isAsc, setASC] = useState(false);

  const tripListParams = { page, size, sortBy, isAsc };

  // API 호출
  const { data, isLoading, isError, error } = useQuery<TripsResponse>({
    queryKey: ['getTripList'],
    queryFn: () => getTripList(tripListParams),
    // staleTime: 0,
  });
  console.log({ isLoading, isError, error, data });
  console.log(data?.data);

  const handleCardClick = (tripId: number) => {
    console.log(tripId);
    navigate(`/travelDetail/${tripId}`);
  };

  // const handleReadContent = (planId: number) => {
  //   navigate(`/planDetail/${planId}`);
  // };

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
          {data?.data?.map((trip: Trip, index: number) => (
            <div key={index}>
              <Card
                title={trip.title}
                writer={trip.nickname}
                date={`♥${trip.viewCount}`}
                onClick={() => handleCardClick(trip.tripId)}
              />
            </div>
          ))}
        </S.TravelReviewCardSection>
      </S.TravelReviewstyle>
    </>
  );
};

export default TravelReviewPage;

// 로딩 상태
const LoadingContainer = styled.div``;

// 에러 상태
const ErrorContainer = styled.div``;
