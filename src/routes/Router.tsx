import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/main/Main';
import KakaoRedirect from '@/pages/user/KakaoRedirect';
import MyPage from '@/pages/user/MyPage';
import SearchPage from '@/pages/main/SearchPage';
import TravelReviewPage from '@/pages/travelReview/TravelReviewPage';
import TravelDetailPage from '@/pages/travelReview/TravelDetailPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  { path: '/search', element: <SearchPage /> },
  { path: '/travelReview', element: <TravelReviewPage /> },
  { path: '/travelDetail', element: <TravelDetailPage /> },
  { path: '/login/oauth', element: <KakaoRedirect /> },
  { path: '/user/myPage', element: <MyPage /> },
]);
