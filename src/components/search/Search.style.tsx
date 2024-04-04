import styled from 'styled-components';

export const SearchPageContainer = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin-top: 100px;
`;

export const LocalContainer = styled.div`
  width: 500px;
  margin: 0 auto;
  border-bottom: 1px solid #ddd;
  padding-bottom: 15px;
`;
export const LocalTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
`;
// export const CatagoryBtn = styled.button`
//   display: flex;
//   min-width: 80px;
//   height: 40px;
//   font-weight: 600;
//   border-radius: 20px;
//   border: none;
//   margin: 10px;
//   padding: 0 20px;
//   align-items: center;
//   text-align: center;
//   font-size: 14px;
//   cursor: pointer;
// `;

export const BtnContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const SearchSection = styled.section`
  margin-top: 20px;
  text-align: center;
`;

export const ResultsSection = styled.section`
  width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-top: 15px;
`;

// 검색결과페이지 스타일

export const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 900px;
  margin: 0 auto;
`;

export const ResultBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ResultTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  padding: 20px 0;
`;

export const SearchTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  padding: 50px 10px 20px 0;
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
`;

export const TabButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 30px;
  background: #ddd;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #343434;
    color: #fff;
  }
`;

export const ResultsContainer = styled.section`
  padding-left: 10px;
  background-color: #fff;
`;

export const ResultItem = styled.article`
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  &:last-child {
    border-bottom: none;
  }
`;

export const ItemTitle = styled.h3`
  font-size: 18px;
  margin: 0 0 10px 0;
`;

export const ItemContent = styled.p`
  color: #444;
`;
