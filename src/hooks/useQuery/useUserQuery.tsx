import { PlanListParams } from '@/api/interfaces/planInterface';
import {
  MypageReviewParams,
  TripListParams,
} from '@/api/interfaces/reviewInterface';
import {
  getUserInfo,
  getMypageTrip,
  getScrapTripList,
  getMyPlanList,
  getMyTripList,
} from '@/api/userAxios';
import { useQuery } from '@tanstack/react-query';

export const useGetUerInfoQuery = () => {
  return useQuery({
    queryKey: ['myPage'],
    queryFn: getUserInfo,
    staleTime: 0,
  });
};

// 마이페이지 여행 정보 불러오기
export const useMypageTrip = (params: MypageReviewParams) => {
  return useQuery({
    queryKey: ['mypageTrip', params],
    queryFn: () => getMypageTrip(params),
    staleTime: 0, // 필요한 경우 캐시 시간을 설정할 수 있습니다
  });
};

// 마이페이지 여행 정보 스크랩 불러오기
export const useMypageScrapTrip = (params: MypageReviewParams) => {
  return useQuery({
    queryKey: ['mypageTrip', params],
    queryFn: () => getScrapTripList(params),
    staleTime: 0, // 필요한 경우 캐시 시간을 설정할 수 있습니다
  });
};

export const useMyPlanListQuery = (planListParams: PlanListParams) => {
  return useQuery({
    queryKey: ['myPlanList', planListParams],
    queryFn: () => getMyPlanList(planListParams),
    staleTime: 0, // 새로고침 주기를 빠르게 하려면 0으로 설정
  });
};

export const useMyTripListQuery = (tripListParams: TripListParams) => {
  return useQuery({
    queryKey: ['myTripList', tripListParams],
    queryFn: () => getMyTripList(tripListParams),
    staleTime: 0,
  });
};
