import axios from 'axios';

import { Cookies } from 'react-cookie';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

const cookies = new Cookies();

console.log(cookies.get('Authorization'));

// 헤더가 필요한 인스턴스
export const instanceWithToken = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    'content-type': 'application/json',
    accept: 'application/json',
    // Authorization: cookies.get('Authorization'),
  },
});

// interceptor로 해야함
instanceWithToken.interceptors.request.use(
  (config) => {
    const cookies = new Cookies();
    const token = cookies.get('Authorization');
    // const token = `${new Cookies().get('accessToken')}`;
    if (token) {
      config.headers['Authorization'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 여행 정보 인스턴스
export const instanceWithReview = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
  },
});
