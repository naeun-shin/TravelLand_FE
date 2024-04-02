import PlanCreate from '@/components/plans/planComponents/PlanCreate';
import * as S from './TravelPlanMain.styles';

const TravelPlanCreate1 = () => {
  return (
    <>
      <S.TravelPlanMainStyle>
        {/* 타이틀 */}
        <h2>여행 플랜</h2>
        <PlanCreate />
      </S.TravelPlanMainStyle>
    </>
  );
};

export default TravelPlanCreate1;
