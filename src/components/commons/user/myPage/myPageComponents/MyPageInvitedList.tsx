import Card from '@/components/commons/cards/Card';
import * as S from '@components/commons/user/myPage/MyPage.style.tsx';
const MyPageInvitedList = () => {
  // const size = { width: 200, height: 500 };
  return (
    <>
      <S.MyPageInvitedContainer>
        <Card text:String={'hello'} />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </S.MyPageInvitedContainer>
      {/* pagination */}
      <S.MyPagePagination>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
      </S.MyPagePagination>
    </>
  );
};

export default MyPageInvitedList;
