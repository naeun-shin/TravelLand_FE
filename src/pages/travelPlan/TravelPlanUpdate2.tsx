import * as S from '../../components/plans/TravelPlanMain.style';
import PlanUpdate2 from '@/components/plans/planComponents/PlanUpdate2';

const TravelPlanUpdate2 = () => {
  return (
    <>
      <S.TravelPlanMainStyle>
        {/* 타이틀 */}
        <h2>여행 플랜 수정하기</h2>
        <PlanUpdate2 />
      </S.TravelPlanMainStyle>
    </>
  );
};

export default TravelPlanUpdate2;
