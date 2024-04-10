import Card from '@/components/commons/cards/Card';
import * as S from '@components/commons/user/myPage/MyPage.style';
const MyPageInvitedList = () => {
  // const size = { width: 200, height: 500 };
  return (
    <>
      <S.MyPageInvitedContainer>
        <Card
          withPicture={true}
          title={'[일본 | 도쿄] 일본 여행'}
          date={'2024.03.31'}
          writer={'이*애 님'}
        />
      </S.MyPageInvitedContainer>
    </>
  );
};

export default MyPageInvitedList;
