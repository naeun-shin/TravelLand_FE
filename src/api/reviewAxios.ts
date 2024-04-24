import { AxiosResponse } from 'axios';
import { instance, instanceWithToken } from './axios';
import {
  TripData,
  TripDetail,
  TripListParams,
} from './interfaces/reviewInterface';
import { Cookies } from 'react-cookie';

// 여행 정보 등록
// export const createTrip = async (formData: FormData): Promise<TripData> => {
//   try {
//     const response = await instanceWithToken.post('/v1/trips', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     return response.data as TripData;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// 여행 정보 등록
export const createTrip = async (formData: FormData): Promise<TripData> => {
  try {
    const response = await instance.post('/v1/trips', formData, {
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
export const getTripList = async (tripListparam: TripListParams) => {
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
  const cookie = new Cookies();
  try {
    if (cookie.get('Authorization')) {
      return await instanceWithToken.get(`/v1/trips/${tripId}`);
    } else {
      return await instance.get(`/v1/trips/${tripId}`);
    }
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
    const response = await instanceWithToken.delete(`/v1/trips/${tripId}`);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 여행정보 좋아요 등록
export const createLikeTrip = async (tripId: number) => {
  try {
    return await instanceWithToken.post(`/v1/trips/${tripId}/like`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//여행정보 좋아요 취소
export const cancelLikeTrip = async (tripId: number) => {
  try {
    return await instanceWithToken.delete(`/v1/trips/${tripId}/like`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 여행정보 스크랩 등록
export const createScrapTrip = async (tripId: number) => {
  try {
    return await instanceWithToken.post(`/v1/trips/${tripId}/scrap`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 여행정보 스크랩 취소
export const cancelScrapTrip = async (tripId: number) => {
  try {
    return await instanceWithToken.delete(`/v1/trips/${tripId}/scrap`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
