// import { MediumButton } from '@/components/commons/buttons/Button';
// import Card from '@/components/commons/cards/Card';
import ListCard from '@/components/commons/mainItem/ListCard';
import * as S from '@/components/commons/user/myPage/MyPage.style';
import { useMypageTrip } from '@/hooks/useQuery';
import { TravelReviewCardSection } from '@/pages/travelReview/TravelReview.styles';
// import { useMyTripListQuery } from '@/hooks/useQuery';
// import { useState } from 'react';
// import { getMyTripList } from '@/api/userAxios';
import { useNavigate } from 'react-router-dom';

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

const MyPageReviewList = () => {
  const navigate = useNavigate();
  const { data, isError, isLoading, error } = useMypageTrip({
    page: 1,
    size: 10,
  });

  const handleCardClick = (tripId?: number) => {
    navigate(`/travelDetail/${tripId}`);
  };

  // const [page, _] = useState(1); // 페이지 번호
  // const [size] = useState(10); // 한 페이지 당 받아올 겟수
  // const [sortBy] = useState('createdAt');
  // const [isAsc] = useState(true);

  // 페이지네이션을 위한 파라미터 설정
  // const tripListParams = { page, size, isAsc, sortBy };

  // const { data, isError, isLoading } = useMyTripListQuery(tripListParams);
  // console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      {/* 버튼 */}
      <S.MyPageButton>
        {/* <MediumButton text="내가 작성한 4" /> */}
        {/* <img src="/assets/check.png" alt="체크" />
        </MediumButton> */}
        &nbsp;
        {/* <MediumButton text="스크랩 Number" /> */}
        {/* <img src="/assets/bookmark.png" alt="북마크" />
        </MediumButton> */}
      </S.MyPageButton>
      {/* 카드 섹션 */}
      <TravelReviewCardSection>
        {data?.data.trips !== null ? (
          <>
            {data?.data.trips.map((trip: Trip) => (
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
                onClick={() => handleCardClick}
              />
            ))}
          </>
        ) : (
          <div>나의 여행 정보가 없습니다! 추가해주세요!</div>
        )}
      </TravelReviewCardSection>
    </>
  );
};

export default MyPageReviewList;
