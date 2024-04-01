import { MediumButton } from '@/components/commons/buttons/Button';
import * as S from '../MyPage.style';
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
      <S.MyPageListContaier>
        {/* <S.MyPageListSection> */}
        <S.MyPageListLeft>
          <S.MyPageListCity>아시아</S.MyPageListCity>
          <S.MyPageListTitle>
            [일본 | 도쿄] 즐거운 여행었습니다
          </S.MyPageListTitle>
        </S.MyPageListLeft>
        <S.MyPageListRight>
          <div>이*애 님</div>
          <div>2024.03.31</div>
          <div>19</div>
        </S.MyPageListRight>
      </S.MyPageListContaier>
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

export default MyPagePlanList;
