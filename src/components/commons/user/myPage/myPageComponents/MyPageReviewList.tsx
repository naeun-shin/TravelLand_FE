import { MediumButton } from '@/components/commons/buttons/Button';
import Card from '@/components/commons/cards/Card';
import * as CS from '@styles/commonStyles';
import * as S from '../MyPage.style';

const MyPageReviewList = () => {
  return (
    <>
      {/* 버튼 */}
      <S.MyPageButton>
        <MediumButton text="내가 작성한 4" />
        {/* <img src="/assets/check.png" alt="체크" />
        </MediumButton> */}
        &nbsp;
        <MediumButton text="스크랩 Number" />
        {/* <img src="/assets/bookmark.png" alt="북마크" />
        </MediumButton> */}
      </S.MyPageButton>
      {/* 카드 섹션 */}
      <Card title={'후쿠오카'} date={'2024.03.31'} city={'일본 - 후쿠오카'} />
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

export default MyPageReviewList;
