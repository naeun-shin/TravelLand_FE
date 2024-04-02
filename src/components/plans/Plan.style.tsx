import styled from 'styled-components';

const PlanFirstSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 5px;
`;

const PlanSecondSection = styled.div``;

const PlanWriterBox = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid lightgray;
  border-radius: 5px;

  padding: 20px 15px;

  div {
    padding-left: 15px;
    font-weight: bold;
    font-size: 18px;
  }
`;

const PlanBox = styled.div`
  display: flex;
  align-items: center;

  border-bottom: 1px solid lightgray;
  padding: 20px 15px;
`;

const PlanContent = styled.div`
  padding-left: 15px;
  font-weight: normal;
`;

const PlanContentTitle = styled.div`
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 18px;
`;

const PlanHorizontalContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding-left: 15px;

  div {
    font-weight: bold;
    font-size: 18px;
  }
`;

const PlanHorizontalRightButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: white;
`;

const PlanBottomSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 15px;
`;

const PlanNextButton = styled.button`
  background-color: black;
  color: white;
  justify-content: center;
  border: none;
  width: 160px;
  height: 50px;
  border-radius: 5px;
`;
// 두번째 플랜 페이지

const PlanDateButton = styled.div`
  background-color: white;
  border: none;

  button {
    margin-right: 10px;
    padding: 5px;

    width: 150px;
    height: 50px;

    background-color: white;

    border: 1px solid lightgray;
    border-radius: 5px;
  }
`;

// List 영역
const ButtonBox = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: flex-end;
`;

export {
  PlanFirstSection,
  PlanSecondSection,
  PlanWriterBox,
  PlanBox,
  PlanContent,
  PlanHorizontalContent,
  PlanContentTitle,
  PlanHorizontalRightButton,
  PlanBottomSection,
  PlanNextButton,
  PlanDateButton,
  ButtonBox,
};
