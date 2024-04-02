import PlanIndex from '@/components/plans/planIndex/PlanIndex';
import * as S from './TravelPlanMain.styles';
const TravelPlanMain = () => {
  return (
    <>
      <S.TravelPlanMainStyle>
        {/* 타이틀 */}
        <h2>여행 플랜</h2>
        <PlanIndex />
      </S.TravelPlanMainStyle>
    </>
  );
};

export default TravelPlanMain;
