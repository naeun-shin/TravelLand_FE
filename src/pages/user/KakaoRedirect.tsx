import { Instance } from '@/api/axios';
import { useNavigate } from 'react-router-dom';

const KakaoRedirect = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');
  console.log(code);

  const response = async (code: any) => {
    try {
      await Instance.get('/users/login/kakao', {
        params: { code },
      });
      navigate('/');
      console.log(response);
    } catch (error) {
      console.log(error);
      navigate('/');
    }
  };
  return response;
};

export default KakaoRedirect;
