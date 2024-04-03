import { MediumButton } from '@/components/commons/buttons/Button';
import * as S from '../MyPage.style';
import * as CS from '@styles/commonStyles';
import { List } from '@/components/commons/Lists/List';
const MyPagePlanList = () => {
  return (
    <>
      {/* 버튼 */}
      <S.MyPageButton>
        {/* <img src="../assets/check.png" alt="체크" /> */}
        <MediumButton text="내가 작성한 4" />
        &nbsp;
        {/* <img src="public/assets/bookmark.png" alt="북마크" /> */}
        <MediumButton text="스크랩 Number" />
      </S.MyPageButton>
      {/* 목록 */}
      <List />
      {/* pagination */}
      <CS.PagenationStyle>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
      </CS.PagenationStyle>
    </>
  );
};

export default MyPagePlanList;
