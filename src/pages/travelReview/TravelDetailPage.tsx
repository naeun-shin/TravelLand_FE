import ReviewDetailList from '@/components/commons/user/ReviewDetail/ReviewDetailList';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getTripDetail } from '@api/reviewAxios';
import DetailList from '@/components/commons/user/ReviewDetail/DetailListCard';

const TravelDetailPage = () => {
  // useParam으로 들어오는 값은 string이라서 const tripId를 Number로 강제 치환 진행
  const { tripId } = useParams<{ tripId: string }>();
  const id = Number(tripId);
  const {
    data: tripDetail,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['tripDetail', id],
    queryFn: () => getTripDetail(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred</div>;
  if (!tripDetail) return <div>No data</div>;

  return (
    <>
      <div style={{ marginBottom: '200px' }}>
        <ReviewDetailList tripDetail={tripDetail.data} />
        <DetailList />
      </div>
    </>
  );
};

export default TravelDetailPage;
