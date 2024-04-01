import ModernInput from '@/components/commons/inputs/Input';

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
    </>
  );
};

export default Main;
