import PlanDetail from '@/components/plans/planComponents/PlanDetail';
import * as S from './TravelPlanMain.style';
import ReDesignHeader from '@/components/layouts/Header2';
import { useEffect } from 'react';

const TravelPlanDetail = () => {
  useEffect(() => {
    // 메인 페이지 로드 시 localStorage에서 'planData'를 삭제
    localStorage.removeItem('planData');
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
