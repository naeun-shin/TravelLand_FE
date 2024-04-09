// usePlanStore.ts
import create from 'zustand';

interface InvitePerson {
  invitee: string;
}

/**
 * 
1. usePlanStore 상태 관리 설정
먼저, usePlanStore를 이용하여 일자별 계획(dayPlans)를 관리하는 상태 저장소를 설정해야 합니다. 여기서는 각 일자별로 여러 계획을 포함할 수 있으며, 계획을 추가하고, 일자를 변경할 때마다 관련 데이터를 업데이트할 수 있어야 합니다.
 */

interface UnitPlan {
  departure: string;
  time: string;
  schedule: string;
  location: Date | string;
}

interface DayPlan {
  [key: string]: UnitPlan[];
}

interface DayPlanState {
  isPublic: boolean;
  dateRange: [Date | null, Date | null];
  invitePeople: InvitePerson[];
  setIsPublic: (isPublic: boolean) => void;
  setDateRange: (dateRange: [Date | null, Date | null]) => void;
  addInvitePerson: (invitee: InvitePerson) => void;
  removeInvitedPerson: (index: number) => void;
}

interface PlanState {
  dayPlans: DayPlan;
  addPlan: (day: string, plan: UnitPlan) => void;
  addUnitPlan: (day: string, unitPlan: UnitPlan) => void;
  clearPlansForDay: (day: string) => void;
}

export const useUnitPlanStore = create((set) => ({
  unitPlans: [], // unitPlan 객체들을 저장할 배열
  addUnitPlan: (unitPlan) =>
    set((state) => ({ unitPlans: [...state.unitPlans, unitPlan] })),
  updateUnitPlan: (index, newUnitPlan) =>
    set((state) => {
      const updatedUnitPlans = [...state.unitPlans];
      updatedUnitPlans[index] = newUnitPlan;
      return { unitPlans: updatedUnitPlans };
    }),
}));

export const usePlanStore = create<PlanState>((set) => ({
  dayPlans: {},
  addUnitPlan: (day, unitPlan) =>
    set((state) => ({
      dayPlans: {
        ...state.dayPlans,
        [day]: [...(state.dayPlans[day] || []), unitPlan],
      },
    })),
  addPlan: (day, plan) =>
    set((state) => ({
      dayPlans: {
        ...state.dayPlans,
        [day]: [...(state.dayPlans[day] || []), plan],
      },
    })),
  clearPlansForDay: (day) =>
    set((state) => ({
      dayPlans: { ...state.dayPlans, [day]: [] },
    })),
}));

//!SECTION - 사용 안함
export const useDayPlanStore = create<DayPlanState>((set) => ({
  isPublic: true,
  dateRange: [null, null],
  invitePeople: [],
  setIsPublic: (isPublic) => set(() => ({ isPublic })),
  setDateRange: (dateRange) => set(() => ({ dateRange })),
  addInvitePerson: (person) =>
    set((state) => ({ invitePeople: [...state.invitePeople, person] })),
  removeInvitedPerson: (index) =>
    set((state) => ({
      invitePeople: state.invitePeople.filter((_, i) => i !== index),
    })),
}));

// export const useDayPlanStore = create<DayPlanState>((set) => ({
//   dayPlan: [],
//   addUnitPlan: (unitPlan) =>
//     set((state) => ({ dayPlan: [...state.dayPlan, unitPlan] })),
// }));
