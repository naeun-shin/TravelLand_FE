import { AxiosResponse } from 'axios';
import { instanceWithToken } from './axios';
import { PlanListParams } from './interfaces/planInterface';
import {
  MypageReviewParams,
  TripListParams,
} from './interfaces/reviewInterface';
// import { LoogoutResponse } from './interfaces/userInterface';

// 유저 정보
export const getUserInfo = async () => {
  try {
    return await instanceWithToken.get('/users/myInfo');
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getLogout = async () => {
  try {
    return await instanceWithToken.get('/users/logout');
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// 닉네임 변경 -> 아직 적용 필요
export const updateNickname = (nickname: string) => {
  return instanceWithToken.patch('/users/change-nickname', { nickname });
};

// 마이페이지 여행 정보 목록 조회
export const getMypageTrip = async (
  paramData: MypageReviewParams,
): Promise<AxiosResponse<any>> => {
  const { page, size } = paramData;
  try {
    return await instanceWithToken.get('/v1/users/trips', {
      params: { page, size },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 여행 플랜 목록 조회
export const getMyPlanList = async (
  paramData: PlanListParams,
): Promise<AxiosResponse<any>> => {
  const { page, size, sortBy, isAsc } = paramData;
  try {
    return await instanceWithToken.get('/v1/users/plans', {
      params: { page, size, sortBy, isAsc },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 여행 플랜 스크랩 목록 조회
export const getScrapPlanList = async (
  paramData: PlanListParams,
): Promise<AxiosResponse<any>> => {
  const { page, size, sortBy, isAsc } = paramData;
  try {
    return await instanceWithToken.get('/v1/plans/scrap', {
      params: { page, size, sortBy, isAsc },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 여행 정보 목록 조회
export const getMyTripList = async (
  tripListparam: TripListParams,
): Promise<AxiosResponse<any>> => {
  const { page, size, isAsc, sortBy } = tripListparam;
  try {
    return await instanceWithToken.get('/v1/users/trips', {
      params: { page, size, isAsc, sortBy },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 여행 정보 스크랩 목록 조회
export const getScrapTripList = async (tripListparam: MypageReviewParams) => {
  const { page, size } = tripListparam;
  try {
    const response = await instanceWithToken.get('/v1/trips/scrap', {
      params: { page, size },
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
