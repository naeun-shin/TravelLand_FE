// import React from 'react';
import Header from '@/components/layouts/Header';
import SearchInput from '@/components/search/Search';
import { IoLocationSharp } from 'react-icons/io5';
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
        <LocalTitle>지역별 인기</LocalTitle>
        <BtnContainer>
          <CatagoryBtn>
            <IoLocationSharp />
            제주도
          </CatagoryBtn>
          <CatagoryBtn>
            <IoLocationSharp />
            서울
          </CatagoryBtn>
          <CatagoryBtn>
            <IoLocationSharp />
            강원도
          </CatagoryBtn>
          <CatagoryBtn>
            <IoLocationSharp />
            부산
          </CatagoryBtn>
        </BtnContainer>
      </LocalContainer>
      <ResultsSection>
        <CatagoryBtn># 데이트</CatagoryBtn>
        <CatagoryBtn># 친구</CatagoryBtn>
        <CatagoryBtn># 가족</CatagoryBtn>
        <CatagoryBtn># 가성비</CatagoryBtn>
        <CatagoryBtn># 커플</CatagoryBtn>
        <CatagoryBtn># 커플</CatagoryBtn>
        <CatagoryBtn># 대체언제끝날까</CatagoryBtn>
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
  font-weight: 600;
  margin-top: 130px;
`;

const LocalContainer = styled.div`
  width: 500px;
  margin: 0 auto;
  border-bottom: 1px solid #ddd;
  padding-bottom: 15px;
`;
const LocalTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
`;
const CatagoryBtn = styled.button`
  display: flex;
  min-width: 80px;
  height: 40px;
  font-weight: 600;
  border-radius: 20px;
  border: none;
  margin: 10px;
  padding: 0 20px;
  align-items: center;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
`;

const BtnContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const SearchSection = styled.section`
  margin-top: 20px;
  text-align: center;
`;

const ResultsSection = styled.section`
  width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-top: 15px;
`;
