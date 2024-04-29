import PlanList from '@/components/plans/planComponents/PlanList';
import * as S from './TravelPlanMain.style';
import ReDesignHeader from '@/components/layouts/Header2';
import { useEffect } from 'react';

const TravelPlanList = () => {
  useEffect(() => {
    // 메인 페이지 로드 시 localStorage에서 'planData'를 삭제
    localStorage.removeItem('planData');
    localStorage.removeItem('updatePlanData');
    localStorage.removeItem('updatePlanData2');
  }, []);
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
