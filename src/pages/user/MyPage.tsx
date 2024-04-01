import MyPageTab from '@/components/commons/user/myPage/myPageComponents/MyPageTab';
import MyPagePlanList from '@/components/commons/user/myPage/myPageComponents/MyPagePlanList';
import * as S from './User.styles';
import { MediumButton } from '@/components/commons/buttons/Button';
import MyPageIndex from '@/components/commons/user/myPage/MyPageIndex';

const MyPage = () => {
  return (
    <>
      <S.MyPageStyle>
        {/* 타이틀 */}
        <h2>마이 페이지</h2>
        <MyPageIndex />
      </S.MyPageStyle>
    </>
  );
};

export default MyPage;
