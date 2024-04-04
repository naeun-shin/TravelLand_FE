import React from 'react';
// import styled from 'styled-components';
import { IoLocationSharp } from 'react-icons/io5';
import * as S from './Search.style';
import {
  UserImage,
  UserName,
  UserSection,
} from '../commons/user/TravelReview/Review.style';

const ResultsContent: React.FC = () => {
  const tabs = [
    '조계사',
    '경인미술관',
    '숭례문',
    '남대문시장',
    '북촌한옥마을',
    '광장시장',
    '카페봄봄',
  ];

  return (
    <S.ResultContainer>
      <S.ResultBox>
        <S.ResultTitle>주변 명소</S.ResultTitle>
        <div>(검색 결과: 종로구 인사동)</div>
      </S.ResultBox>
      <S.TabContainer>
        {tabs.map((tab) => (
          <S.TabButton key={tab}>
            <IoLocationSharp /> {tab}
          </S.TabButton>
        ))}
      </S.TabContainer>
      <S.SearchTitle>검색결과</S.SearchTitle>
      <S.ResultsContainer>
        <S.ResultItem>
          {/* 리스트 */}
          <S.ItemTitle>항해99 여기 맛집맞나요?</S.ItemTitle>
          <S.ItemContent>
            프로젝트 너무 힘이가 든다 그래도 힘내야지..
            랄랄라랄랄라랄랄라랄랄라랄랄라랄랄라랄랄라...
          </S.ItemContent>
          <UserSection>
            <UserImage src="" alt="사진" />
            <UserName>김*님</UserName>
          </UserSection>
        </S.ResultItem>
        <S.ResultItem>
          {/* 리스트 */}
          <S.ItemTitle>항해99 여기 맛집맞나요?</S.ItemTitle>
          <S.ItemContent>
            프로젝트 너무 힘이가 든다 그래도 힘내야지..
            랄랄라랄랄라랄랄라랄랄라랄랄라랄랄라랄랄라...
          </S.ItemContent>
          <UserSection>
            <UserImage src="" alt="사진" />
            <UserName>김*님</UserName>
          </UserSection>
        </S.ResultItem>
        <S.ResultItem>
          {/* 리스트 */}
          <S.ItemTitle>항해99 여기 맛집맞나요?</S.ItemTitle>
          <S.ItemContent>
            프로젝트 너무 힘이가 든다 그래도 힘내야지..
            랄랄라랄랄라랄랄라랄랄라랄랄라랄랄라랄랄라...
          </S.ItemContent>
          <UserSection>
            <UserImage src="" alt="사진" />
            <UserName>김*님</UserName>
          </UserSection>
        </S.ResultItem>
      </S.ResultsContainer>
    </S.ResultContainer>
  );
};

export default ResultsContent;
