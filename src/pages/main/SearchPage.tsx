// import React from 'react';
import Button from '@/components/commons/buttons/Button';
import { ButtonContainer } from '@/components/commons/buttons/Button.style';
import Header from '@/components/layouts/Header';
import SearchInput from '@/components/search/Search';

import styled from 'styled-components';

const SearchPage = () => {
  return (
    <SearchPageContainer>
      <Header />
      <SearchSection>
        <Title>✈️이 여행 어떠행?</Title>
        <SearchInput placeholder="검색어를 입력해주세요." />
      </SearchSection>
      <LocalContainer>
        <div>지역별 인기</div>
        <BtnContainer>
          <CatagoryBtn>제주도</CatagoryBtn>
          <CatagoryBtn>서울</CatagoryBtn>
          <CatagoryBtn>부산</CatagoryBtn>
          <CatagoryBtn>강원도</CatagoryBtn>
          <CatagoryBtn>경기도</CatagoryBtn>
        </BtnContainer>
      </LocalContainer>
      <ResultsSection>
        <CatagoryBtn>#데이트</CatagoryBtn>
        <CatagoryBtn>#친구</CatagoryBtn>
        <CatagoryBtn>#가족</CatagoryBtn>
        <CatagoryBtn>#가성비</CatagoryBtn>
        <CatagoryBtn>#커플</CatagoryBtn>
      </ResultsSection>
    </SearchPageContainer>
  );
};

export default SearchPage;

const SearchPageContainer = styled.div`
  width: 100%;
`;

const Title = styled.div`
  font-size: 32px;
  margin-top: 130px;
`;

const LocalContainer = styled.div`
  width: 500px;
  margin: 0 auto;
  border-bottom: 1px solid #ddd;
  /* margin-right: 10px; */
`;

const CatagoryBtn = styled.button`
  width: 80px;
  height: 40px;
  font-weight: 600;
  border-radius: 20px;
  border: none;
  margin: 30px 0;
`;

const BtnContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
`;

const SearchSection = styled.section`
  margin-top: 20px;
  text-align: center;
`;

const ResultsSection = styled.section`
  width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
