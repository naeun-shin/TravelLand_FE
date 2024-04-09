import create from 'zustand';

interface UnitPlan {
  departure: string;
  time: string;
  schedule: string;
  location: string | undefined;
}

interface UnitPlansState {
  unitPlans: UnitPlan[];
  addUnitPlan: (newPlan: UnitPlan) => void;
}

export const useUnitPlansStore = create<UnitPlansState>((set) => ({
  unitPlans: [],
  addUnitPlan: (newPlan) =>
    set((state) => ({ unitPlans: [...state.unitPlans, newPlan] })),
}));
