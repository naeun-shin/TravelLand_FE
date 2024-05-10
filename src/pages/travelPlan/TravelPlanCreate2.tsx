import PlanCreate2 from '@/components/plans/planComponents/PlanCreate2';
import * as S from '../../components/plans/TravelPlanMain.style';

const TravelPlanCreate2 = () => {
  return (
    <>
      <S.TravelPlanMainStyle>
        {/* 타이틀 */}
        <h2>여행 플랜 작성하기</h2>
        <PlanCreate2 />
      </S.TravelPlanMainStyle>
    </>
  );
};

export default TravelPlanCreate2;
