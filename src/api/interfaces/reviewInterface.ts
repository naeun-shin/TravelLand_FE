// 여행 정보 등록 인터페이스

export interface TripData {
  title: string;
  content: string;
  tripStartDate: string;
  tripEndDate: string;
  cost: number;
  hashTag: string[];
  area: string;
  public: boolean;
  // x: string;
  // y: string;
  // address: string;
  // placeName: string;
}

// 여행 정보 목록 조회 인터페이스
export interface TripListParams {
  page: number;
  size: number;
  sortBy: string;
  isAsc: boolean;
}

// 여행 정보 상세 조회 인터페이스
export interface TripDetailParams {
  tripId: number;
}
