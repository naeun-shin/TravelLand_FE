import PlanList from '@/components/plans/planComponents/PlanList';
import * as S from './TravelPlanMain.style';
import Header3 from '@/components/layouts/Header3';

const TravelPlanList = () => {
  return (
    <>
      <Header3 />
      <S.TravelPlanMainStyle>
        <PlanList />
      </S.TravelPlanMainStyle>
    </>
  );
};

export default TravelPlanList;
