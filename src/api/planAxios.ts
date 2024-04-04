import { AxiosResponse } from 'axios';
import { instance } from './axios';
import {
  PlanListParams,
  PlanDetailVariable,
  CreatePlanData,
  UpdatePlanData,
} from './interfaces/planInterface';

// 여행 플랜 목록 조회
export const getPlanList = async (
  paramData: PlanListParams,
): Promise<AxiosResponse<any>> => {
  const { page, size, sortBy, isAsc } = paramData;
  try {
    return await instance.get('/v1/plans', {
      params: { page, size, sortBy, isAsc },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 여행 플랜 상세 조회
export const getPlanDetail = async (
  variableData: PlanDetailVariable,
): Promise<AxiosResponse<any>> => {
  const { planId } = variableData;
  try {
    return await instance.get(`/v1/plans/${planId}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 여행 플랜 일자별 상세 조회
export const getPlanDetailByDay = async (
  variableData: PlanDetailVariable,
): Promise<AxiosResponse<any>> => {
  const { planId, dayPlanId } = variableData;
  try {
    return await instance.get(`/v1/plans/${planId}/dayplans/${dayPlanId}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 여행 플랜 작성하기 - authInstace로 수정 필요
export const createPlan = async (planDataValue: CreatePlanData) => {
  try {
    return await instance.post('/v1/plans', planDataValue);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 여행 플랜 수정 - authInstance로 수정 필요
export const updatePlan = async (
  planId: Number,
  updatePlanDataValue: UpdatePlanData,
) => {
  try {
    return await instance.put(`/v1/plans/${planId}`, updatePlanDataValue);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
