// import React from 'react';
import Header from '@/components/layouts/Header';
import SearchInput from '@/components/search/Search';
import { IoLocationSharp } from 'react-icons/io5';
import * as S from '@components/search/Search.style';

const SearchPage = () => {
  return (
    <S.SearchPageContainer>
      <Header />
      <S.SearchSection>
        <S.Title>✈️이 여행 어떠행?</S.Title>
        <SearchInput placeholder="검색어를 입력해주세요." />
      </S.SearchSection>
      <S.LocalContainer>
        <S.LocalTitle>지역별 인기</S.LocalTitle>
        <S.BtnContainer>
          <S.CatagoryBtn>
            <IoLocationSharp />
            제주도
          </S.CatagoryBtn>
          <S.CatagoryBtn>
            <IoLocationSharp />
            서울
          </S.CatagoryBtn>
          <S.CatagoryBtn>
            <IoLocationSharp />
            강원도
          </S.CatagoryBtn>
          <S.CatagoryBtn>
            <IoLocationSharp />
            부산
          </S.CatagoryBtn>
        </S.BtnContainer>
      </S.LocalContainer>
      <S.ResultsSection>
        <S.CatagoryBtn># 데이트</S.CatagoryBtn>
        <S.CatagoryBtn># 친구</S.CatagoryBtn>
        <S.CatagoryBtn># 가족</S.CatagoryBtn>
        <S.CatagoryBtn># 가성비</S.CatagoryBtn>
        <S.CatagoryBtn># 이색 여행</S.CatagoryBtn>
        <S.CatagoryBtn># 지역 주민 추천</S.CatagoryBtn>
        <S.CatagoryBtn># 2030</S.CatagoryBtn>
      </S.ResultsSection>
    </S.SearchPageContainer>
  );
};

export default SearchPage;
