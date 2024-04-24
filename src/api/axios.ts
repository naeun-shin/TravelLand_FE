import axios from 'axios';

import { Cookies } from 'react-cookie';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

const cookies = new Cookies();

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
    const token = cookies.get('Authorization');
    if (token) {
      config.headers['Authorization'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
// 응답 인터셉터
// // 응답 인터셉터
// instanceWithToken.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response.status === 401) {
//       // 로그인 페이지로 리디렉션

//       window.location = '/'; // 이 부분은 프로젝트의 라우팅 구조에 따라 다를 수 있습니다.
//       // 이 방식은 SPA에서 페이지 전체를 리로드하게 됩니다.
//       // useNavigate를 사용하는 것이 리액트 라우터와 더 잘 통합될 수 있지만, 인터셉터에서 직접 사용하기 어렵습니다.
//     }
//     return Promise.reject(error);
//   },
// );

// 여행 정보 인스턴스
export const instanceWithReview = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
  },
});
