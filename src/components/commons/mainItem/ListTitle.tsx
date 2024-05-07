import React from 'react';
import * as S from '@/components/commons/mainItem/MainItemStyle';
// import Button from '../buttons/Button';

interface ListTitleProps {
  //   title: string;
}

const ListTitle: React.FC<ListTitleProps> = () => {
  return (
    <S.TitleContainer>
      <S.HotTitleText>
        <div>지금 가장 HOT한 방문지 10</div>
      </S.HotTitleText>
      <S.Subtitle>지난 일주일 간 평소보다 더 많이 조회된 관광지</S.Subtitle>
    </S.TitleContainer>
  );
};

export default ListTitle;
