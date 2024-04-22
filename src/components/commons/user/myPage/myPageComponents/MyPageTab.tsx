import { useState } from 'react';
import MyPagePlanList from './MyPagePlanList';
import MyPageReviewList from './MyPageReviewList';
import styled from 'styled-components';
import MyPageVoteList from './MyPageVoteList';

const MyPageTab = () => {
  const [isActive, setIsActive] = useState<number>(0);
  return (
    <>
      <DivWrapper>
        <Sort>
          <SearchTitle
            className={isActive === 0 ? 'active' : ''}
            onClick={() => setIsActive(0)}
          >
            여행 정보
          </SearchTitle>
        </Sort>
        <Sort>
          <SearchTitle
            className={isActive === 1 ? 'active' : ''}
            onClick={() => setIsActive(1)}
          >
            여행 플랜
          </SearchTitle>
        </Sort>
        <Sort>
          <SearchTitle
            className={isActive === 2 ? 'active' : ''}
            onClick={() => setIsActive(2)}
          >
            투표 관리
          </SearchTitle>
        </Sort>
      </DivWrapper>

      {/* 목록 */}
      {isActive === 0 ? <MyPageReviewList /> : null}
      {isActive === 1 ? <MyPagePlanList /> : null}
      {isActive === 2 ? <MyPageVoteList /> : null}
    </>
  );
};

export default MyPageTab;

const DivWrapper = styled.div`
  display: flex;
  position: relative;
  border-bottom: 2px solid #eee;
  width: 1100px;
`;
const SearchTitle = styled.div`
  width: 110px;
  cursor: pointer;
  font-size: 24px;
  font-weight: 600;
  padding: 60px 0 30px 0;
  position: relative;
  text-align: center;

  &.active::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -2px;
    transform: translateX(-50%);
    width: 100%;
    border-bottom: 3px solid #000;
  }
`;

const Sort = styled.div`
  margin-left: 20px;
`;
