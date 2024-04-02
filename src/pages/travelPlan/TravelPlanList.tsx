import PlanList from '@/components/plans/planComponents/PlanList';
import * as S from './TravelPlanMain.styles';

const TravelPlanList = () => {
  return (
    <>
      <S.TravelPlanMainStyle>
        {/* 타이틀 */}
        <h2>여행 플랜</h2>
        <PlanList />
      </S.TravelPlanMainStyle>
    </>
  );
};

export default TravelPlanList;
