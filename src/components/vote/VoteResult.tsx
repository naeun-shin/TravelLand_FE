// import { useEffect, useState } from 'react';
import { useGetVoteResultQuery } from '@/hooks/useQuery';
import * as S from './Vote.style';

interface VoteResultProps {
  votedId: number; // Optional, as it might not be set initially
}

export const VoteResult: React.FC<VoteResultProps> = ({ votedId }) => {
  console.log(votedId);
  const { data, isLoading, isError } = useGetVoteResultQuery(votedId);
  console.log(data);

  if (isLoading) {
    // 데이터 로딩 중 UI
    return <div>Loading...</div>;
  }

  if (isError) {
    // 에러 발생 시 UI
    return <div>Error</div>;
  }

  return (
    <>
      <S.CheckVoteContainer>
        <div>
          <div>
            {/* {!selectedVote.isClosed ? '플랜 투표 중' : '플랜 투표 마감'} */}
          </div>
          <S.VoteTitleContent>
            <img
              // src={selectedVote.profileImage || '/assets/paris.jpg'}
              alt="Profile"
            />
            <S.VoteTitle>
              {/* <div>{selectedVote.nickname || '익명'}</div> */}
              {/* <div>{selectedVote.title}</div> */}
            </S.VoteTitle>
          </S.VoteTitleContent>
          <S.VoteButtonBox>
            <S.VoteChoiceBox>
              <S.VoteContentBox></S.VoteContentBox>
            </S.VoteChoiceBox>
            <S.VoteChoiceBox>
              <S.VoteContentBox></S.VoteContentBox>
            </S.VoteChoiceBox>
          </S.VoteButtonBox>
        </div>
      </S.CheckVoteContainer>
    </>
  );
};
