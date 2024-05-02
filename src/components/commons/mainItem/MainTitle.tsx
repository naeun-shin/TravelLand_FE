// import React from 'react';
import * as S from '@/components/commons/mainItem/MainItemStyle';

import minilogo from '@/icons/Group 11478.svg';

const Maintitle = () => {
  return (
    <>
      <S.Container>
        <S.TitleWrapper>
          <S.TripTitle>
            <img src={minilogo} alt="구름 로고" width="40" height="40" />이 여행
            어떠행?
          </S.TripTitle>
        </S.TitleWrapper>
      </S.Container>
    </>
  );
};

export default Maintitle;
