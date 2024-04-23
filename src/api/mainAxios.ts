import { AxiosResponse } from 'axios';
import { instance } from './axios';

// 여행 정보 조회수 TOP10 목록조회
export const getMainTopTenRankList = async (): Promise<AxiosResponse<any>> => {
  try {
    return await instance.get('/v1/trips/rank');
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 무작위 추천 8개 조회
export const getMainRandomList = async (): Promise<AxiosResponse<any>> => {
  try {
    return await instance.get('v1/trips/random');
  } catch (error) {
    throw error;
  }
};
