import { instance } from './axios';
// import { AxiosResponse, AxiosError } from 'axios';

// 여행 정보 검색 응답 인터페이스
export interface TripSearch {
  id: string;
  tripId: number;
  title: string;
  area: string;
  content: string;
  placeName: string;
  tripStartDate: string;
  tripEndDate: string;
  hashtagList: string[];
}

// 여행 정보 통합 검색
export const searchTripsByText = async (
  text: string,
  page: number,
  size: number,
  sortBy: string,
  isAsc: boolean,
): Promise<TripSearch[]> => {
  try {
    const response = await instance.get('/v1/trips/search', {
      params: { text, page, size, sortBy, isAsc },
    });
    return response.data.searches;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 여행정보 제목 검색
export const searchTripsByTitle = async (
  title: string,
  page: number,
  size: number,
  sortBy: string,
  isAsc: boolean,
): Promise<TripSearch[]> => {
  try {
    const response = await instance.get('/v1/trips/search/title', {
      params: { title, page, size, sortBy, isAsc },
    });
    return response.data.searches;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 여행정보 해시태그 검색
export const fetchTripsByHashtag = async (
  hashtag: string,
  page: number,
  size: number,
  sortBy: string,
  isAsc: boolean,
): Promise<TripSearch[]> => {
  try {
    const response = await instance.get('/v1/trips/search/hashtag', {
      params: { hashtag, page, size, sortBy, isAsc },
    });
    return response.data.searches;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 여행정보 지역 검색
export const searchTripsByArea = async (
  area: string,
  page: number,
  size: number,
  sortBy: string,
  isAsc: boolean,
): Promise<TripSearch[]> => {
  try {
    const response = await instance.get('/v1/trips/search/area', {
      params: { area, page, size, sortBy, isAsc },
    });
    return response.data.searches;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 인기 해쉬태그 TOP 5
export const fetchTopHashtags = async (): Promise<string[]> => {
  try {
    const response = await instance.get('/v1/trips/rank/hashtag');
    return response.data.hashtags;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
