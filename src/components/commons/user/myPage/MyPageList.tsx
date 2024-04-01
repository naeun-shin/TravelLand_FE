import * as S from './MyPage.style';

const MyPageList = () => {
  return (
    <>
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
    </>
  );
};

export default MyPageList;
