import { useState } from 'react';
import MyPagePlanList from './MyPagePlanList';
import MyPageReviewList from './MyPageReviewList';
import * as S from '@/components/commons/user/myPage/MyPage.style';
import MyPageVoteList from './MyPageVoteList';

const MyPageTab = () => {
  const [isActive, setIsActive] = useState<number>(0);

  return (
    <>
      <S.DivWrapper>
        <S.Sort>
          <S.SearchTitle
            className={isActive === 0 ? 'active' : ''}
            onClick={() => setIsActive(0)}
          >
            여행 정보
          </S.SearchTitle>
        </S.Sort>
        <S.Sort>
          <S.SearchTitle
            className={isActive === 1 ? 'active' : ''}
            onClick={() => setIsActive(1)}
          >
            여행 플랜
          </S.SearchTitle>
        </S.Sort>
        <S.Sort>
          <S.SearchTitle
            className={isActive === 2 ? 'active' : ''}
            onClick={() => setIsActive(2)}
          >
            투표 관리
          </S.SearchTitle>
        </S.Sort>
      </S.DivWrapper>

      {/* 목록 */}
      {isActive === 0 ? <MyPageReviewList /> : null}
      {isActive === 1 ? <MyPagePlanList /> : null}
      {isActive === 2 ? <MyPageVoteList /> : null}
    </>
  );
};

export default MyPageTab;
