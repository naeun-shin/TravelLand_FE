import { useState } from 'react';
import Button from '@/components/commons/buttons/Button';
import ListCard from '@/components/commons/mainItem/ListCard';
import * as S from '@/components/commons/user/myPage/MyPage.style';
import {
  useGetUerInfoQuery,
  useMypageScrapTrip,
  useMypageTrip,
} from '@/hooks/useQuery';
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
  const [showScrapList, setShowScrapList] = useState(false);

  const { data, isError, isLoading, error } = useMypageTrip({
    page: 1,
    size: 10,
  });

  console.log(data?.data.trips);

  const { data: scrapData } = useMypageScrapTrip({
    page: 1,
    size: 10,
  });

  const { data: count } = useGetUerInfoQuery();

  const userData = count?.data;

  console.log(userData);

  const handleCardClick = (tripId?: number) => {
    navigate(`/travelDetail/${tripId}`);
  };

  const handleReviewCreate = () => {
    navigate('/travelCreate');
  };

  const handleMyReviewListClick = () => {
    setShowScrapList(false);
  };

  const handleMyScrapListClick = () => {
    setShowScrapList(true);
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
      <S.MyPageButton>
        <div>
          <Button
            color="white"
            textColor="gray"
            width="160px"
            borderColor="gray"
            marginRight="5px"
            onClick={handleMyReviewListClick}
          >
            내가 작성한 {userData.tripTotalElements || 0}
          </Button>
          <Button
            color="white"
            textColor="gray"
            width="160px"
            borderColor="gray"
            onClick={handleMyScrapListClick}
          >
            내가 스크랩한 {userData.scrapTotalElements || 0}
          </Button>
        </div>
        <div>
          <Button
            text="작성하기"
            width="150px"
            borderRadius="15px"
            color="#5AC8EC"
            textColor="white"
            onClick={handleReviewCreate}
          />
        </div>
      </S.MyPageButton>
      <TravelReviewCardSection>
        {showScrapList ? (
          scrapData?.data.trips && scrapData.data.trips.length > 0 ? (
            scrapData.data.trips.map((trip: Trip) => (
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
            ))
          ) : (
            <div>스크랩한 여행 정보가 없습니다! 추가해주세요!</div>
          )
        ) : data?.data.trips && data.data.trips.length > 0 ? (
          data.data.trips.map((trip: Trip) => (
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
          ))
        ) : (
          <div>나의 여행 정보가 없습니다! 추가해주세요!</div>
        )}
      </TravelReviewCardSection>
    </>
  );
};

export default MyPageReviewList;
