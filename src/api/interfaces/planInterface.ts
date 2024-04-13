// 리스트 조회 인터페이스
export interface PlanListParams {
  page: number;
  size: number;
  sortBy: string;
  isAsc: boolean;
}

export interface deletePlan {
  tripId: number;
}

export interface UnitPlan {
  title: string;
  content: string;
  time: string;
  budget: number;
  place_name: string;
  address: string;
  x: number;
  y: number;
}

export interface DayPlan {
  date: string;
  unitPlans: UnitPlan[];
}

export interface WholePlan {
  title: string;
  budget: number;
  area: string;
  isPublic: boolean;
  tripStartDate: string;
  tripEndDate: string;
  isVotable: boolean;
  dayPlans: DayPlan[];
}
