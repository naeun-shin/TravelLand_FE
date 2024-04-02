import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/main/Main';
import KakaoRedirect from '@/pages/user/KakaoRedirect';
import MyPage from '@/pages/user/MyPage';
import Login from '@/pages/user/Login';
import TravelPlanMain from '@/pages/travelPlan/TravelPlanMain';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  { path: '/login/oauth', element: <KakaoRedirect /> },
  { path: '/user/myPage', element: <MyPage /> },
  { path: '/login', element: <Login /> },
  { path: '/travelPlan', element: <TravelPlanMain /> },
]);
