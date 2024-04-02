import React from 'react';
import * as S from './List.style';

const List = () => {
  return (
    <S.ListContaier>
      <S.ListLeft>
        <S.ListCity>아시아</S.ListCity>
        <S.ListTitle>[일본 | 도쿄] 즐거운 여행었습니다</S.ListTitle>
      </S.ListLeft>
      <S.ListRight>
        <div>이*애 님</div>
        <div>2024.03.31</div>
        <div>19</div>
      </S.ListRight>
    </S.ListContaier>
  );
};

export { List };
