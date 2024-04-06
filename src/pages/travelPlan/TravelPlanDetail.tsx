import PlanDetail from '@/components/plans/planComponents/PlanDetail';
import * as S from './TravelPlanMain.style';
import Header from '@/components/layouts/Header';
import { useParams } from 'react-router-dom';
import { usePlanDetailQuery } from '@/hooks/useQuery';

const TravelPlanDetail = () => {
  return (
    <>
      <Header />
      <S.TravelPlanMainStyle>
        {/* 타이틀 */}
        <h2>여행 플랜</h2>
        <PlanDetail />
      </S.TravelPlanMainStyle>
    </>
  );
};

export default TravelPlanDetail;
