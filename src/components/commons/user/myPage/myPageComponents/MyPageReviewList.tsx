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
      <Card />
    </>
  );
};

export default MyPageReviewList;
