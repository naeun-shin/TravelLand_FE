// import React from 'react';
import styled from 'styled-components';
import ListCard from '../../mainItem/ListCard';
import { getRecommendedTrips } from '@/api/reviewAxios';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const DetailList = () => {
  const navigate = useNavigate();
  const { tripId } = useParams<{ tripId: string }>();
  const id = Number(tripId);
  // API 호출을 통한 데이터 가져오기
  const { data, isLoading, error } = useQuery({
    queryKey: ['recommendedTrips', tripId],
    queryFn: () => getRecommendedTrips(id),
  });

  const handleCardClick = (clickedTripId: number) => {
    // 상세 페이지로 이동
    navigate(`/travelDetail/${clickedTripId}`);
  };

  if (isLoading)
    return (
      <CardBox>
        <div>Loading...</div>
      </CardBox>
    );
  if (error)
    return (
      <CardBox>
        <div>An error occurred: {error.message}</div>
      </CardBox>
    );
  if (!data || data.data.length === 0)
    return (
      <CardBox>
        <div>No recommendations found</div>
      </CardBox>
    );

  return (
    <CardBox>
      <Title>당신을 위한 여행 정보추천</Title>
      <CardContainer>
        {data.data.map((trip: any) => (
          <ListCard
            key={trip.tripId}
            tripId={trip.tripId}
            area={trip.area}
            title={trip.title}
            tripStartDate={trip.tripStartDate}
            tripEndDate={trip.tripEndDate}
            thumbnailUrl={trip.thumbnailUrl}
            hashtagList={trip.hashtagList}
            onClick={() => handleCardClick(trip.tripId)}
          />
        ))}
      </CardContainer>
    </CardBox>
  );
};

export default DetailList;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin: 100px 0 50px 0;
`;

const CardBox = styled.div`
  width: 1500px;
  margin: 0 auto;
`;

const CardContainer = styled.div`
  display: flex;
`;
