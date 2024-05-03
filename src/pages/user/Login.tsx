import Button from '@/components/commons/buttons/Button';
import { LoginModal } from '@/components/commons/modals/Modal';
import * as S from './User.styles';

const base_url = import.meta.env.VITE_APP_BASE_URL;

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Login: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const loginWithKakao = () => {
    window.location.href = `${base_url}oauth2/authorization/kakao`;
  };

  const handleLoginWithNaver = () => {
    window.location.href = `${base_url}oauth2/authorization/naver`;
  };

  const handleLoginWithGoogle = () => {
    window.location.href = `${base_url}oauth2/authorization/google`;
  };

  return (
    <>
      <LoginModal isOpen={isOpen} onClose={onClose}>
        <S.LoginStyle>
          <div>
            <Button
              onClick={() => {
                onClose();
              }}
              borderColor="transparent"
              width="50px"
              height="50px"
              color="white"
              textColor="black"
            >
              <img src="/assets/icons/grayEsc.svg" />
            </Button>
          </div>
          <h1>SNS 계정으로 로그인 하기</h1>
          <img
            src="/assets/kakao/kakao_login_medium_narrow.png"
            onClick={loginWithKakao}
            style={{
              borderRadius: '25px',
              width: '190px',
              height: '50px',
              marginBottom: '10px',
            }}
          />
          <img
            onClick={handleLoginWithNaver}
            src="/assets/naver/naverLoginLogo.png"
            style={{
              borderRadius: '25px',
              width: '190px',
              height: '50px',
              marginBottom: '10px',
            }}
          />
          <img
            onClick={handleLoginWithGoogle}
            src="/assets/google/googleLoginLogo.svg"
            style={{
              borderRadius: '25px',
              width: '190px',
              height: '50px',
              marginBottom: '10px',
            }}
          />
          <h4>
            {' '}
            <span>"떠나볼까"</span>는 소셜 로그인 기반으로 정보를 수집합니다.
          </h4>
        </S.LoginStyle>
      </LoginModal>
    </>
  );
};

export default Login;
