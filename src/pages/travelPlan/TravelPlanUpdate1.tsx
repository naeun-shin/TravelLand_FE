import * as S from '../../components/plans/TravelPlanMain.style';
import PlanUpdate from '@/components/plans/planComponents/PlanUpdate';

const TravelPlanUpdate1 = () => {
  return (
    <>
      <S.TravelPlanMainStyle>
        {/* 타이틀 */}
        <h2>여행 플랜 수정하기</h2>
        <PlanUpdate />
      </S.TravelPlanMainStyle>
    </>
  );
};

export default TravelPlanUpdate1;
