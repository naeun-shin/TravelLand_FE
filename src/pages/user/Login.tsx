import Button from '@/components/commons/buttons/Button';
import Modal from '@/components/commons/modals/Modal';
import * as S from './User.styles';

// const key = import.meta.env.VITE_APP_KAKAO_REST_KEY;
// const redirect = import.meta.env.VITE_APP_REDIRECT;
const base_url = import.meta.env.VITE_APP_BASE_URL;

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Login: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  // const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${key}&redirect_uri=${redirect}&response_type=code`;

  const loginWithKakao = () => {
    window.location.href = `${base_url}oauth2/authorization/kakao`;
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <S.LoginStyle>
          <h2>소셜 로그인 하기</h2>
          <img
            src="/assets/kakao/kakao_login_medium_narrow.png"
            onClick={loginWithKakao}
          />
          <p> - "떠나볼까"는 소셜 로그인 기반으로 정보를 수집합니다. - </p>
          <Button
            text="닫기"
            onClick={() => {
              console.log('닫기 클릭');
              onClose();
            }}
          />
        </S.LoginStyle>
      </Modal>
    </>
  );
};

export default Login;
