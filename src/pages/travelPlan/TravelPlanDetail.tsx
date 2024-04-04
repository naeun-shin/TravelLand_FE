import PlanDetail from '@/components/plans/planComponents/PlanDetail';
import * as S from './TravelPlanMain.style';
import Header from '@/components/layouts/Header';

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
