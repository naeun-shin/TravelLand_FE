// 리스트 조회 인터페이스
export interface PlanListParams {
  page: number;
  size: number;
  sortBy: string;
  isAsc: boolean;
}

// 상세 조회 & 일자 별 조회 인페이스
export interface PlanDetailVariable {
  planId: number;
  dayPlanId: number;
}

/**
 * 작성하기 인터페이스
    1. Timeplan
    ”timePlan”: [
        {s
            ”dateTime”: “2024.03.28 06:00”,
            ”content”: “일출 보기”,
            ”budget”: “10000”,
            “location”: “서면”
        },
    2. Plan
        {
            ”planTitle”: “ 2박 3일 PLAN”
            “totalBudget”: 160000, 
            ”planStartDate”: ”2023-03-28",
            ”planEndDate” : ”2023-03-30", 
            ”timePlan”: [ ]
        }
    3. CreatePlanData (실제 데이터)
        {
            "title": "부산여행",
            ”isPublic”: true,
            ”isVotable”: true, -> 추가 구현 사항
            ”tripArea”: ”부산광역시”,
            ”invitee”: [”abc@email.com”],
            ”plan”: 
        }
 */

interface TimePlan {
  dateTime: string;
  content: string;
  budget: string;
  location: string;
}

interface Plan {
  planTitle: string;
  totalBudget: number;
  planStartDate: string;
  planEndDate: string;
  timePlan: TimePlan[];
}

export interface CreatePlanData {
  title: string;
  isPublic: boolean;
  tripArea: string;
  invitee: string[]; // invitee 배열의 요소는 string 타입
  plan: Plan;
}

// 수정 데이터 (invitee, plan은 재사용)
export interface UpdatePlanData {
  title: string;
  isPublic: boolean;
  tripArea: string;
  invitee: string[]; // invitee 배열의 요소는 string 타입
  plan: Plan;
}
