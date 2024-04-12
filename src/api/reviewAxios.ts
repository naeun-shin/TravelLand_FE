import { AxiosResponse } from 'axios';
import { instance, instanceWithToken } from './axios';
import {
  TripData,
  TripDetail,
  TripListParams,
} from './interfaces/reviewInterface';
import { CreateTripRequest } from '@/pages/travelReview/TravelCreatePage';

// 여행 정보 등록
export const createTrip = async ({ email, formData }: CreateTripRequest) => {
  try {
    const response = await instanceWithToken.post('/v1/trips', formData, {
      params: { email },
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data as TripData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 여행 정보 목록 조회
export const getTripList = async (
  tripListparam: TripListParams,
): Promise<AxiosResponse<any>> => {
  const { page, size, sortBy, isAsc } = tripListparam;
  try {
    const response = await instance.get('/v1/trips', {
      params: { page, size, sortBy, isAsc },
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 여행 정보 수정
export const updateTrip = async (
  tripId: number,
  email: string,
  tripData: TripData,
  imageList?: File[],
): Promise<AxiosResponse<any>> => {
  try {
    const formData = new FormData();

    formData.append('requestDto', JSON.stringify(tripData));

    // 이미지 리스트가 있으면 함께 전송
    if (imageList) {
      imageList.forEach((file, index) =>
        formData.append(`imageList[${index}]`, file),
      );
    }

    const response = await instanceWithToken.put(
      `/v1/trips/${tripId}`,
      formData,
      {
        params: { email },
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 여행 정보 상세 보기
export const getTripDetail = async (
  tripId: number,
): Promise<AxiosResponse<TripDetail>> => {
  try {
    // const response = await axios.get<TripDetail>(`/v1/trips/${tripId}`);
    // 아래 코드 -> <TripDetail> 타입 선언 삭제처리 후 get
    // const response =
    // console.log('response 데이터 연결 확인 >>> ', response);
    return await instance.get(`/v1/trips/${tripId}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 여행 정보 삭제
export const deleteTrip = async (
  tripId: number,
): Promise<AxiosResponse<any>> => {
  try {
    const response = await instance.delete(`/v1/trips/${tripId}`);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
