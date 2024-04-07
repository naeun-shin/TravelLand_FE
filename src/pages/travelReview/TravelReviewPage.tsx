import Header from '@/components/layouts/Header';
import * as S from './TravelReview.styles';
import ReviewPageTab from '@/components/commons/user/TravelReview/ReviewTab';
import Card from '@/components/commons/cards/Card';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getTripList } from '@/api/reviewAxios';

const TravelReviewPage = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(9);
  const [sortBy, setSortBy] = useState('createdAt');
  const [isAsc, setASC] = useState(false);

  const tripListParams = { page, size, sortBy, isAsc };

  const { data } = useQuery({
    queryKey: ['getTripList'],
    queryFn: () => getTripList(tripListParams),
    staleTime: 0,
  });
  console.log(data);
  const handleCardClick = () => {
    navigate('/TravelDetailPage');
  };

  // const handleNextPage = () => {
  //   setPage((prevPage) => prevPage + 1);
  // };
  // const handleSortChange = (sortBy, isAsc) => {
  //   setSortBy(sortBy);
  //   setASC(isAsc);
  // };
  const handleTextClick = () => {
    navigate('/travelCreate');
  };
  return (
    <>
      <Header />
      <S.TravelReviewstyle>
        <h2>여행 후기</h2>
        <h2 onClick={handleTextClick}>작성하기</h2>
        <ReviewPageTab />
        <S.TravelReviewCardSection>
          <Card
            title="황*미님"
            writer="2024.04.03"
            date="♥20"
            onClick={handleCardClick}
          />
          <Card
            title="신*은님"
            writer="2024.04.03"
            date="♥20"
            onClick={handleCardClick}
          />
          <Card
            title="김*용님"
            writer="2024.04.03"
            date="♥20"
            onClick={handleCardClick}
          />
        </S.TravelReviewCardSection>
      </S.TravelReviewstyle>
    </>
  );
};

export default TravelReviewPage;
