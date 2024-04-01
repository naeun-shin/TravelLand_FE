import ModernInput from '@/components/commons/inputs/Input';
import Login from '../user/Login';

const Main = () => {
  return (
    <>
      <ModernInput
        type={'text'}
        placeholder={'모던 인풋 창 입니다.'}
        border={'lightgray'}
        width={250}
        height={50}
      />

      {/* kakaologin API 연결 */}
      <Login />
      {/* <Button /> */}
    </>
  );
};

export default Main;
