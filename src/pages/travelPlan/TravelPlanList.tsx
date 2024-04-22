import PlanList from '@/components/plans/planComponents/PlanList';
import * as S from './TravelPlanMain.style';
import ReDesignHeader from '@/components/layouts/Header2';

const TravelPlanList = () => {
  return (
    <>
      <ReDesignHeader needSearchInput={true} />
      <S.TravelPlanMainStyle>
        <PlanList />
      </S.TravelPlanMainStyle>
    </>
  );
};

export default TravelPlanList;
