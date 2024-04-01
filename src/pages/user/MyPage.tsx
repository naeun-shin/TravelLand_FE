import MyPageTab from '@/components/commons/user/myPage/MyPageTab';
import MyPageList from '@/components/commons/user/myPage/MyPageList';
import * as S from './User.styles';
import { MediumButton } from '@/components/commons/buttons/Button';

const MyPage = () => {
  return (
    <>
      <S.MyPageStyle>
        {/* 타이틀 */}
        <h2>마이 페이지</h2>
        {/* 탭 */}
        <MyPageTab />
        {/* 버튼 */}
        <S.MyPageButton>
          {/* <img src="../assets/check.png" alt="체크" /> */}
          <MediumButton
            text="내가 작성한 4"
            borderColor="lightGray"
            borderRadius="35px"
            backgroundColor="tranparent"
          />
          &nbsp;
          {/* <img src="public/assets/bookmark.png" alt="북마크" /> */}
          <MediumButton
            text="스크랩 Number"
            borderColor="lightGray"
            borderRadius="35px"
            backgroundColor="tranparent"
          />
        </S.MyPageButton>
        {/* 목록 */}
        <MyPageList />
        {/* pagination */}
        <S.MyPagePagination>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
        </S.MyPagePagination>
      </S.MyPageStyle>
    </>
  );
};

export default MyPage;
