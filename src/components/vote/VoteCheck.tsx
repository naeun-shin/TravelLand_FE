import { useEffect, useState } from 'react';
import Button from '../commons/buttons/Button';
import * as S from './Vote.style';
import { useNavigate } from 'react-router-dom';
import { useCheckVoteMutation } from '@/hooks/useMutation';

interface PlanVotes {
  planVoteId: number;
  planAId: number;
  planBId: number;
  planACount: number;
  planBCount: number;
  isClosed: boolean;
  title: string;
  planVoteDuration: string;
  createdAt: string;
  modifiedAt: string;
  nickname: string;
  profileImage: string;
}

interface CheckVoteProps {
  voteData: PlanVotes[]; // PlanVotes 타입을 사용하여 voteData 프롭스를 정의합니다
  onVote: (hasVoted: boolean, votedId?: number) => void; // 투표 상태를 알리기 위한 콜백 함수 추가
}

export const VoteCheck: React.FC<CheckVoteProps> = ({ voteData, onVote }) => {
  const navigate = useNavigate();
  //   console.log(voteData.planAId, voteData.planBId);
  const [selectedVote, setSelectedVote] = useState<PlanVotes | undefined>();
  const [isVotedA, setIsVotedA] = useState<boolean | null>(null);

  const [content, _] = useState<string>('');

  useEffect(() => {
    if (voteData.length > 0) {
      setSelectedVote(voteData[0]); // 첫 번째 투표 데이터를 초기에 선택
    }
  }, [voteData]); // voteData가 변경될 때마다 체크

  const handleGotoDetail = (id: number) => {
    alert('해당 게시글로 이동합니다!');
    navigate(`/planDetail/${id}`);
  };

  const handleVoteSelect = (vote: PlanVotes) => {
    setSelectedVote(vote);
  };

  const handleCheckPlan = (votedA: boolean) => {
    if (selectedVote?.isClosed) {
      alert('이미 마감된 투표입니다!');
      return;
    }

    setIsVotedA(votedA);
  };

  const votSubmit = useCheckVoteMutation();
  const handleVoteSubmit = () => {
    if (!selectedVote || isVotedA === null) {
      alert('투표를 선택하지 않았습니다. 선택해주세요!');
      return;
    }

    if (selectedVote.isClosed) {
      alert('이미 마감된 투표입니다!');
      return;
    }

    const voteData = {
      planVoteId: selectedVote.planVoteId,
      isVotedA: isVotedA,
      content,
    };

    console.log('voteData:', voteData);

    votSubmit.mutate(voteData);
    console.log(voteData.planVoteId);
    const votedId = voteData.planVoteId;
    onVote(true, votedId); // 투표 완료 상태를 상위 컴포넌트에 알림
  };

  if (!voteData.length) {
    return <div></div>; // 데이터가 없을 때의 표시
  }

  return (
    <>
      <div>
        {voteData.map((vote) => (
          <Button
            key={vote.planVoteId}
            text={`투표 ID: ${vote.planVoteId}`}
            onClick={() => handleVoteSelect(vote)}
          />
        ))}
      </div>
      <S.CheckVoteContainer>
        {selectedVote && (
          <div>
            <div>
              {!selectedVote.isClosed ? '플랜 투표 중' : '플랜 투표 마감'}
            </div>
            <S.VoteTitleContent>
              <img
                src={selectedVote.profileImage || '/assets/paris.jpg'}
                alt="Profile"
              />
              <S.VoteTitle>
                <div>{selectedVote.nickname || '익명'}</div>
                <div>{selectedVote.title}</div>
              </S.VoteTitle>
            </S.VoteTitleContent>
            <div>
              <Button
                text="투표하기"
                borderRadius="15px"
                width="100px"
                onClick={handleVoteSubmit}
              />
            </div>
            <S.VoteButtonBox>
              <S.VoteChoiceBox>
                <Button
                  text="A안"
                  color={isVotedA ? '#5AC8EC' : '#F6F6F6'}
                  textColor="black"
                  borderRadius="60px"
                  width="200px"
                  onClick={() => handleCheckPlan(true)}
                  //   disabled={selectedVote.isClosed}
                />
                <S.VoteContentBox
                  onClick={() => handleGotoDetail(selectedVote.planAId)}
                >
                  봄날의 고성, 1박 2일
                  <img src="/assets/icons/GrayRightArrow.svg" />
                </S.VoteContentBox>
              </S.VoteChoiceBox>
              <S.VoteChoiceBox>
                <Button
                  text="B안"
                  color={isVotedA === false ? '#5AC8EC' : '#F6F6F6'}
                  textColor="black"
                  borderRadius="60px"
                  width="200px"
                  onClick={() => handleCheckPlan(false)}
                  //   disabled={selectedVote.isClosed}
                />
                <S.VoteContentBox
                  onClick={() => handleGotoDetail(selectedVote.planBId)}
                >
                  봄날의 고성, 1박 2일
                  <img src="/assets/icons/GrayRightArrow.svg" />
                </S.VoteContentBox>
              </S.VoteChoiceBox>
            </S.VoteButtonBox>
          </div>
        )}
      </S.CheckVoteContainer>
    </>
  );
};
