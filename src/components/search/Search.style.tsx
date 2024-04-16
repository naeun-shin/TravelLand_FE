import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(213, 213, 213, 0.9); // 반투명 배경
  display: flex;
  justify-content: center;
  /* align-items: center; */
  z-index: 1000; // 모달이 다른 요소들 위에 보이도록
`;

export const ModalContainer = styled.div`
  background-color: rgba(213, 213, 213, 0.8);
  /* top: 85px; */
  padding: 20px;
  border-radius: 8px;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
  z-index: 999; // 모달 내부 요소가 모달 배경 위에 보이도록
  width: 100%;
  height: 100vh;
`;

export const SearchBar = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // 검색창의 나머지 스타일...
`;

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
  /* border-bottom: 1px solid #000000; */
  padding-bottom: 25px;
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
  margin-top: 120px;
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
  border-bottom: 1px solid #000000;
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
