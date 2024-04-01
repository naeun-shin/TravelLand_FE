const key = import.meta.env.VITE_APP_KAKAO_REST_KEY;
const redirect = import.meta.env.VITE_APP_REDIRECT;

const Login = () => {
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${key}&redirect_uri=${redirect}&response_type=code`;

  const loginWithKakao = () => {
    window.location.href = kakaoURL;
  };
  return (
    <>
      <button onClick={loginWithKakao}>카카오 로그인</button>
    </>
  );
};

export default Login;
