import create from 'zustand';
import { useUnitPlansStore } from './useUnitPlanStore'; // useUnitPlanStore를 임포트합니다.

interface InvitePerson {
  invitee: string;
}

interface UnitPlan {
  departure?: string;
  time?: string;
  schedule?: string;
  location?: Date | string;
}

interface DayPlan {
  title: string;
  content: string;
  budget: number;
  date: string;
  unitPlans: UnitPlan[];
}

interface PlanState {
  area: string;
  budget: number;
  dayPlans: DayPlan[];
  isPublic: boolean;
  dateRange: [Date | null, Date | null];
  invitePeople: InvitePerson[];

  // DayPlanState 관련 액션
  setIsPublic: (isPublic: boolean) => void;
  setDateRange: (dateRange: [Date | null, Date | null]) => void;
  addInvitePerson: (invitee: InvitePerson) => void;
  removeInvitedPerson: (index: number) => void;

  // UnitPlan 관련 액션
  addUnitPlan: (day: string, unitPlan: UnitPlan) => void;
  clearPlansForDay: (day: string) => void;
  clearAllUnitPlans: () => void;
  setUnitPlansForDay: (day: string, plans: UnitPlan[]) => void;
  getUnitPlansForDay: (day: string) => UnitPlan[];
  clearUnitPlansForDay: (day: string) => void;
  setArea: (area: string) => void;
  setBudget: (budget: number) => void;
  addDayPlan: (dayPlan: DayPlan) => void;
  finalizePlan: () => any; // 최종 JSON 구조를 반환하는 함수
}

export const usePlanStore = create<PlanState>((set, get) => ({
  area: '',
  budget: 0,
  dayPlans: [],
  setUnitPlansForDay: (day, plans) =>
    set((state) => ({
      dayPlans: { ...state.dayPlans, [day]: plans },
    })),
  getUnitPlansForDay: (day) => get().dayPlans[day] || [],
  clearUnitPlansForDay: (day) =>
    set((state) => {
      const newDayPlans = { ...state.dayPlans };
      delete newDayPlans[day]; // 혹은 필요에 따라 빈 배열로 설정
      return { dayPlans: newDayPlans };
    }),
  isPublic: true,
  dateRange: [null, null],
  invitePeople: [],
  // DayPlanState 관련 액션 구현
  setIsPublic: (isPublic) => set(() => ({ isPublic })),
  setDateRange: (dateRange) => set(() => ({ dateRange })),
  addInvitePerson: (invitee) =>
    set((state) => ({ invitePeople: [...state.invitePeople, invitee] })),
  removeInvitedPerson: (index) =>
    set((state) => ({
      invitePeople: state.invitePeople.filter((_, i) => i !== index),
    })),
  // UnitPlan 관련 액션 구현
  addUnitPlan: (day, unitPlan) =>
    set((state) => ({
      dayPlans: {
        ...state.dayPlans,
        [day]: [...(state.dayPlans[day] || []), unitPlan],
      },
    })),
  clearPlansForDay: (day) =>
    set((state) => ({
      dayPlans: { ...state.dayPlans, [day]: [] },
    })),
  clearAllUnitPlans: () =>
    set((state) => {
      const clearedDayPlans = Object.keys(state.dayPlans).reduce((acc, day) => {
        acc[day] = []; // Clear unit plans for each day
        return acc;
      }, {} as DayPlan);

      return { ...state, dayPlans: clearedDayPlans };
    }),
  setArea: (area) => set(() => ({ area })),
  setBudget: (budget) => set(() => ({ budget })),
  addDayPlan: (dayPlan) =>
    set((state) => ({
      dayPlans: [...state.dayPlans, dayPlan],
    })),
  finalizePlan: () => {
    // useUnitPlanStore에서 unitPlans를 가져옵니다.
    const unitPlans = useUnitPlansStore.getState().unitPlans;
    // 마지막 dayPlan에 unitPlans를 추가합니다.
    const lastDayPlanIndex = get().dayPlans.length - 1;
    if (lastDayPlanIndex >= 0) {
      get().dayPlans[lastDayPlanIndex].unitPlans = unitPlans;
    }
    // 여기에서 최종 JSON 구조를 생성하고 반환합니다.
    return {
      // 다른 필드들...
      dayPlans: get().dayPlans,
    };
  },
}));
