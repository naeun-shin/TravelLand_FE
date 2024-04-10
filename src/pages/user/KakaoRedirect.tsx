import { useEffect } from 'react';
import { instance } from '@/api/axios';
import { useNavigate } from 'react-router-dom';

const KakaoRedirect = () => {
  const navigate = useNavigate();
  console.log('test');
  const code = new URL(window.location.href).searchParams.get('code');
  console.log(code);

  const response = async (code: string | null) => {
    try {
      if (code) {
        await instance.get('/users/login/kakao', {
          params: { code },
        });
      }
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
