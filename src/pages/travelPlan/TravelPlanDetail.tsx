import PlanDetail from '@/components/plans/planComponents/PlanDetail';
import * as S from './TravelPlanMain.style';

const TravelPlanDetail = () => {
  return (
    <>
      <S.TravelPlanMainStyle>
        {/* 타이틀 */}
        <h2>여행 플랜</h2>
        <PlanDetail />
      </S.TravelPlanMainStyle>
    </>
  );
};

export default TravelPlanDetail;
