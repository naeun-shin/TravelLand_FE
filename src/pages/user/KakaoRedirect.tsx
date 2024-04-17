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
      // 쿠키 옵션을 설정할 수 있습니다. 예를 들어, secure: true로 설정할 경우 HTTPS를 통해서만 쿠키가 전송됩니다.
      const options = {
        path: '/',
        // secure: true, //secure: true로 설정할 경우 HTTPS를 통해서만 쿠키가 전송
        // httpOnly: true,
        // sameSite: 'strict',
        // expires: /* 쿠키 만료 날짜를 설정할 수 있습니다. */
      };

      cookie.set('Authorization', authorizationToken, options);
      navigate('/'); // 메인 페이지로 이동
    } else {
      console.error('Authorization token not found in the query string.');
    }
    // 의존성 배열에 location.search를 추가하여 해당 값이 변경될 때만 이 효과가 실행되도록 합니다.
  }, [location.search, navigate]);

  return null; // 이 컴포넌트는 아무것도 렌더링하지 않으므로 null을 반환합니다.
};

export default KakaoRedirect;
