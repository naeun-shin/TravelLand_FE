// 여행 정보 등록 인터페이스

export interface TripData {
  title: string;
  content: string;
  tripStartDate: string;
  tripEndDate: string;
  cost: number;
  hashTag: string[];
  address: string;
  isPublic: boolean;
  placeName: string;
}

// 여행 정보 목록 조회
export interface Trip {
  tripId: number;
  title: string;
  nickname: string;
  thumbnailUrl: string;
  tripPeriod: string;
  viewCount: number;
  createdAt: string;
}

// 여행 정보 목록 조회 인터페이스
export interface TripListParams {
  page: number;
  size: number;
  sortBy: string;
  isAsc: boolean;
}

// 여행 정보 상세 조회 인터페이스
// export interface TripDetailParams {
//   tripId: number;
// }

// 여행 정보 상세 조회
export interface TripDetail {
  tripId: number;
  title: string;
  content: string;
  cost: number;
  area: string;
  address: string;
  placeName: string;
  tripStartDate: string;
  tripEndDate: string;
  viewCount: number;
  likeCount: number;
  nickname: string;
  createdAt: string;
  hashTag?: string[];
  imageUrlList: string[];
  isLike: boolean;
  isScrap: boolean;
  hashtagList?: string[];
  profileImage: string;
  isWriter: boolean;
}
