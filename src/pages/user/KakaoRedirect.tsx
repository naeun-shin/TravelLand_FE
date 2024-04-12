import { useEffect } from 'react';
import { instance } from '@/api/axios';
import { useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';

const KakaoRedirect = () => {
  const cookie = new Cookies();
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');

  const response = async (code: string | null) => {
    try {
      await instance
        .get('/users/login/kakao', {
          params: { code },
        })
        .then((res: any) => {
          console.log(res.headers.getAuthorization);
          cookie.set('Authorization', res.headers.getAuthorization);
        });
      navigate('/');
    } catch (error) {
      console.log(error);
      navigate('/');
    }
  };

  useEffect(() => {
    response(code);
  }, [code, navigate]);

  return null;
};

export default KakaoRedirect;
