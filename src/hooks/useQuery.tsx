import { getPlanDetail, getPlanList } from '@/api/planAxios';
import { useQuery } from '@tanstack/react-query';
import { PlanListParams } from '@/api/interfaces/planInterface';

export const usePlanListQuery = (planListParams: PlanListParams) => {
  return useQuery({
    queryKey: ['planList'],
    queryFn: () => getPlanList(planListParams),
  });
};

// export const usePlanDetailQuery = () => {
//   return useQuery({
//     queryKey: ['plandDetail'],
//     queryFn: () => getPlanDetail(),
//   });
// };
