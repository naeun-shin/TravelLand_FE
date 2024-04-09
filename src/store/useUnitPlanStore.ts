import create from 'zustand';

interface UnitPlan {
  departure: string;
  time: string;
  schedule: string;
  location: string | undefined;
}

interface UnitPlansState {
  unitPlans: UnitPlan[];
  addUnitPlan: (unitPlan: UnitPlan) => void;
  clearUnitPlans: () => void; // unitPlans 배열을 비우는 함수
  // 기타 필요한 액션들...
}

export const useUnitPlansStore = create<UnitPlansState>((set) => ({
  unitPlans: [],
  addUnitPlan: (unitPlan) =>
    set((state) => ({ unitPlans: [...state.unitPlans, unitPlan] })),
  clearUnitPlans: () => set(() => ({ unitPlans: [] })), // unitPlans 배열을 비우는 로직
  // 기타 액션 구현...
}));
