import * as S from './TravelPlanMain.style';
import ReDesignHeader from '@/components/layouts/Header2';
import PlanUpdate from '@/components/plans/planComponents/PlanUpdate';

const TravelPlanUpdate1 = () => {
  return (
    <>
      <ReDesignHeader needSearchInput={true} />
      <S.TravelPlanMainStyle>
        {/* 타이틀 */}
        <h2>여행 플랜 수정하기</h2>
        <PlanUpdate />
      </S.TravelPlanMainStyle>
    </>
  );
};

export default TravelPlanUpdate1;
