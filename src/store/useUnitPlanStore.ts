import create from 'zustand';

interface UnitPlan {
  departure: string;
  time: string;
  schedule: string;
  location: string | undefined;
}

interface UnitPlansState {
  updateUnitPlan: any;
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
  // useUnitPlanStore.ts 내부에 추가할 updateUnitPlan 액션
  updateUnitPlan: (index: number, newPlan: PlanInput) =>
    set((state) => {
      const updatedUnitPlans = [...state.unitPlans];
      updatedUnitPlans[index] = newPlan;
      return { unitPlans: updatedUnitPlans };
    }),
}));
