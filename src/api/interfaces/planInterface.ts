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
  budget: string;
  address: string;
  x: number;
  y: number;
}

export interface DayPlan {
  title: string;
  content: string;
  budget: string;
  date: string;
  unitPlans: UnitPlan[];
}

export interface WholePlan {
  title: string;
  content: string;
  budget: string;
  area: string;
  isPublic: boolean;
  tripStartDate: Date;
  tripEndDate: Date;
  isVotable: boolean;
  dayPlans: DayPlan[];
}
