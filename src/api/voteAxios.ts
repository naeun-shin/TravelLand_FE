import { instance, instanceWithToken } from './axios';
import { VoteData, checkVoteData } from './interfaces/voteInterface';

// 투표 생성
export const createVote = async (voteData: VoteData) => {
  try {
    return await instanceWithToken.post('/v1/votes', voteData);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 투표하기
export const checkVote = async (checkVote: checkVoteData) => {
  try {
    return await instance.post('/v1/votePapers', checkVote);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
