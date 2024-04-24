import { useQuery } from '@tanstack/react-query';
import { getPlanDetail, getPlanList } from '@/api/planAxios';
import { getMyPlanList, getMyTripList, getUserInfo } from '@/api/userAxios';
import { PlanListParams } from '@/api/interfaces/planInterface';
import { TripListParams } from '../api/interfaces/reviewInterface';
import { getMainRandomList, getMainTopTenRankList } from '@/api/mainAxios';
import {
  getSearchTopArea,
  getTopHashtags,
  searchTripsByArea,
  searchTripsByHashtag,
} from '@/api/searchAxios';
import { searchTripsByText } from '@/api/searchAxios';
// import { getVoteResult } from '@/api/voteAxios';
// import { UserInfoData } from '@/api/interfaces/userInterface';

export const usePlanListQuery = (planListParams: PlanListParams) => {
  return useQuery({
    queryKey: ['planList', planListParams],
    queryFn: () => getPlanList(planListParams),
    staleTime: 0, // 새로고침 주기를 빠르게 하려면 0으로 설정
  });
};

export const usePlanDetailQuery = (planId: number) => {
  return useQuery({
    queryKey: ['planDetail', planId],
    queryFn: () => getPlanDetail(planId),
    // staleTime: 5 * 60 * 1000, // 데이터를 5분간 신선하게 유지
    // gcTime: 30 * 60 * 1000, // 캐시에서 데이터를 30분간 유지 => gcTime으로 수정 필요 => v5에서 변경 됨
    // refetchInterval: 360000, // 투표 마감 결과 확인을 위해 1분으로 적용
    // refetchOnWindowFocus: false, // 윈도우 포커스 시 데이터 재요청 안 함
    // refetchOnReconnect: false, // 네트워크 재연결 시 데이터 재요청 안 함
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

export const useGetUerInfoQuery = () => {
  return useQuery({
    queryKey: ['myPage'],
    queryFn: getUserInfo,
    staleTime: 0,
  });
};

// 상위 10개
export const useGetMainRankListQuery = () => {
  return useQuery({
    queryKey: ['mainRank'],
    queryFn: getMainTopTenRankList,
    staleTime: 0,
  });
};

// 메인 랜덤 8개
export const useGetMainRandomListQuery = () => {
  return useQuery({
    queryKey: ['mainRandom'],
    queryFn: getMainRandomList,
    staleTime: 0,
  });
};


// 인기 해시태그 TOP 5
export const useGetHahtagListQuery = () => {
  return useQuery({
    queryKey: ['topHashTag'],
    queryFn: getTopHashtags,
    staleTime: 0,
  });
};

// 인기 지역 TOP 5
export const useGetAreaListQuery = () => {
  return useQuery({
    queryKey: ['topArea'],
    queryFn: getSearchTopArea,
    staleTime: 0,
  });
};

// 지역 검색
export const useGetSearchResultAreaQuery = (
  searchAreaParams: SearchAreaParams,
) => {
  return useQuery({
    queryKey: ['resultArea', searchAreaParams],
    queryFn: () => searchTripsByArea(searchAreaParams),
    staleTime: 0,
    enabled: Boolean(searchAreaParams.area),
  });
};

// 지역 검색
export const useGetSearchResultHashtagQuery = (
  searchHashtagParams: SearchHashtagParams,
) => {
  return useQuery({
    queryKey: ['resultHashtag', searchHashtagParams],
    queryFn: () => searchTripsByHashtag(searchHashtagParams),
    staleTime: 0,
    enabled: Boolean(searchHashtagParams.hashtag),
  });
};

// 여행 정보 통합 검색
export const useGetMainSearchQuery = (text: string) => {
  return useQuery({
    queryKey: ['tripSearch', text],
    queryFn: () => searchTripsByText(text, 1, 9, '', true),
    staleTime: 0,
  });
};

