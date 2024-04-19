import { AxiosResponse } from 'axios';
import { instance } from './axios';
import { VoteData, checkVoteData } from './interfaces/voteInterface';

export const createVote = async (voteData: VoteData) => {
  try {
    return await instance.post('/v1/votes', voteData);
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

// 투표 결과보기
export const getVoteResult = async (
  planVoteId: number,
): Promise<AxiosResponse<any>> => {
  try {
    return await instance.get(`/v1/votes/${planVoteId}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
