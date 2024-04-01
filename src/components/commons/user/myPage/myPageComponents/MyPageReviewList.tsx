import { MediumButton } from '@/components/commons/buttons/Button';
import Card from '@/components/commons/cards/Card';
import * as S from '../MyPage.style';

const MyPageReviewList = () => {
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
      {/* 카드 섹션 */}
      <Card title={'후쿠오카'} date={'2024.03.31'} city={'일본 - 후쿠오카'} />
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

export default MyPageReviewList;
