import PlanDetail from '@/components/plans/planComponents/PlanDetail';
import * as S from '../../components/plans/TravelPlanMain.style';
import { useEffect } from 'react';

const TravelPlanDetail = () => {
  useEffect(() => {
    localStorage.removeItem('planData');
    localStorage.removeItem('updatePlanData');
    localStorage.removeItem('updatePlanData2');
  }, []);
  return (
    <>
      <S.TravelPlanMainStyle>
        {/* 타이틀 */}
        <PlanDetail
          active={false}
          text={''}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </S.TravelPlanMainStyle>
    </>
  );
};

export default TravelPlanDetail;
