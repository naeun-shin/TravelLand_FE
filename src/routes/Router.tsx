import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/main/Main';
import KakaoRedirect from '@/pages/user/KakaoRedirect';
import MyPage from '@/pages/user/MyPage';
import SearchPage from '@/pages/main/SearchPage';
import TravelReviewPage from '@/pages/travelReview/TravelReviewPage';
import TravelDetailPage from '@/pages/travelReview/TravelDetailPage';
import Login from '@/pages/user/Login';
import TravelPlanCreate1 from '@/pages/travelPlan/TravelPlanCreate1';
import TravelPlanCreate2 from '@/pages/travelPlan/TravelPlanCreate2';
import TravelPlanList from '@/pages/travelPlan/TravelPlanList';
import TravelPlanDetail from '@/pages/travelPlan/TravelPlanDetail';
import SearchResults from '@/pages/main/SearchResults';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  { path: '/search', element: <SearchPage /> },
  { path: '/results', element: <SearchResults /> },
  { path: '/travelReview', element: <TravelReviewPage /> },
  // { path: '/travelDetail', element: <TravelDetailPage /> },
  { path: '/login/oauth', element: <KakaoRedirect /> },
  { path: '/user/myPage', element: <MyPage /> },
  { path: '/login', element: <Login /> },
  { path: '/planCreate/1', element: <TravelPlanCreate1 /> },
  { path: '/planCreate/2', element: <TravelPlanCreate2 /> },
  { path: '/planList', element: <TravelPlanList /> },
  { path: '/planDetail', element: <TravelPlanDetail /> },
  { path: '/TravelDetailPage', element: <TravelDetailPage /> },
]);
