import React from 'react';
import styled from 'styled-components';

// 메인 리스트
const MainList: React.FC = () => {
  return (
    <MainListContainer>
      {[...Array(10)].map((_, index) => (
        <ItemContainer key={index}>
          <TextSection>
            <Title>{index + 1} 후쿠오카</Title>
            <p>일본&gt;후쿠오카</p>
            <Content>아름답고 화려한 건축 양식의 사원</Content>
            <button>♥ 77개</button>
          </TextSection>
          <Image src="" alt="이미지" />
        </ItemContainer>
      ))}
    </MainListContainer>
  );
};

export default MainList;

const MainListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 2개의 컬럼
  grid-template-rows: repeat(5, 1fr); // 5개의 행
  column-gap: 10px;
  row-gap: 20px;
  width: 100%;
  max-width: 950px;
  margin: 0 auto;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 450px;
  height: 200px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  margin-bottom: 10px;
  margin: 10px auto;
`;

const TextSection = styled.div`
  padding: 0 20px;
  /* width: 60%; */
`;

const Title = styled.h2`
  margin: 0;
  color: #333;
  font-size: 20px;
  font-weight: 600;
`;

const Content = styled.p`
  margin: 10px 0 10px;
  color: #666;
  font-size: 16px;
`;

const Image = styled.img`
  width: 180px;
  margin-right: 10px;
  height: 170px;
  object-fit: cover;
  border: 1px solid #000;
  border-radius: 10px;
`;
