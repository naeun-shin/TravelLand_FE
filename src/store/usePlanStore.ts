import create from 'zustand';

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
  [key: string]: UnitPlan[];
}

interface PlanState {
  dayPlans: DayPlan;
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
}

export const usePlanStore = create<PlanState>((set, get) => ({
  dayPlans: {},
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
}));
