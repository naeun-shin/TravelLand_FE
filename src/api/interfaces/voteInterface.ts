export interface VoteData {
  title: string;
  planAId: number;
  planBId: number;
  planVoteDuration: string;
}

// 투표하기 인터페티스
export interface checkVoteData {
  planVoteId: number;
  isVotedA: boolean;
  content: string; // 추후 추가
}
