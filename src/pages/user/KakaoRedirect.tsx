import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Cookies } from 'react-cookie';

const KakaoRedirect: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const authorizationToken = queryParams.get('Authorization');
    const cookie = new Cookies();

    if (authorizationToken) {
      const options = {
        path: '/',
        secure: true, // HTTPS를 통해서만 쿠키가 전송됩니다.
        httpOnly: true, // 쿠키를 HTTP(S) 요청에만 사용하고 JS에서는 접근 불가능
        // sameSite: 'strict', // 쿠키가 같은 사이트의 요청에만 포함되도록 설정
        expires: new Date(Date.now() + 86400 * 1000 * 7), // 1주일 후 만료
      };

      cookie.set('Authorization', authorizationToken, options);
      navigate('/'); // 메인 페이지로 이동
    } else {
      console.error('Authorization token not found in the query string.');
    }
  }, [location.search, navigate]);

  return null; // 이 컴포넌트는 아무것도 렌더링하지 않으므로 null을 반환합니다.
};

export default KakaoRedirect;
