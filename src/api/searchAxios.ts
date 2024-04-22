// import { AxiosResponse } from 'axios';
import { instance } from './axios';
// import { CreateTripRequest } from '@/pages/travelReview/TravelCreatePage';

// 여행정보 해시태그 검색 호출
export const fetchTripsByHashtag = async (
  hashtag: string,
  page: number,
  size: number,
  sortBy: string,
  isAsc: boolean,
): Promise<any> => {
  const response = await instance.get('/v1/trips/hashtag', {
    params: {
      hashtag,
      page,
      size,
      sortBy,
      isAsc,
    },
  });
  return response.data;
};
