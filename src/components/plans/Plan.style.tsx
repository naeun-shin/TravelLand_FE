import styled from 'styled-components';
import { ButtonProps } from '../commons/buttons/Button';

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

const ButtonBoxToCenter = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: center;
`;
// detail 영역
const PlanDetailDateBox = styled.div`
  padding: 10px 0px;
`;

const PlanDetailDateButton = styled.button<ButtonProps>`
  margin-right: 10px;
  padding: 5px;

  width: 150px;
  height: 50px;

  background-color: ${({ active }) =>
    active ? 'black' : 'white'}; /* 클릭된 버튼일 때 배경색 검은색 */
  color: ${({ active }) =>
    active ? 'white' : 'black'}; /* 클릭된 버튼일 때 글씨색 하얀색 */

  border: 1px solid lightgray;
  border-radius: 5px;
`;

const PlanDetailContentBox = styled.div`
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 5px;

  width: 100%;
  height: 100%;

  padding: 25px;
`;

const PlanDetailContentHeader = styled.div`
  display: flex;
  align-items: center;

  height: 50px;

  font-size: 16px;
`;

const DetailHeaderContent = styled.div`
  background-color: black;
  color: white;

  height: 50px;
  width: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

const DetailHeaderSubContent = styled.div`
  display: flex;
  align-items: center;

  background-color: #eaeaea;

  height: 50px;
  width: 100%;

  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;

  padding-left: 20px;
`;

const DetailHeaderSubDate = styled.div`
  display: flex;
  align-items: center;

  padding: 0px 15px;
  height: 35px;

  background-color: white;
  border-radius: 5px;

  margin-right: 10px;
`;

const DetaiHeaderSubDestination = styled.div`
  display: flex;
  align-items: center;

  padding: 0px 10px;
  height: 35px;

  background-color: white;
  border-radius: 5px;

  margin-left: 10px;

  div {
    border: 1px solid black;
    border-radius: 25px;
    font-size: 12px;
    padding: 3px 10px;

    margin: 0px 5px;
  }
`;

const DetailContentSection = styled.div`
  padding: 25px 10px;
  height: auto;
`;

const DetailContentBox = styled.div`
  position: relative;
  border-left: 1px solid black;
  padding: 5px 0px;
  /* border: 1px solid black; */
`;

const DetailPlanNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute; /* 추가된 부분: 절대 위치 지정 */
  top: 0; /* 추가된 부분: 부모 요소의 좌상단을 기준으로 설정 */
  left: -13px; /* 추가된 부분: 부모 요소의 좌상단을 기준으로 설정 */

  border-radius: 50px;

  background-color: black;
  color: white;

  font-size: 12px;

  width: 25px;
  height: 25px;
`;

const DetailPlanContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 25px;
  font-size: 16px;
  div {
    padding-bottom: 15px;
  }
`;

const DetailPlanContentCity = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 15px;
`;

const DetailContentItem = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    justify-content: flex-start;
  }

  img {
    width: 15px;
    height: 15px;
  }
`;

const DetailButtonDiv = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid lightgray;
  border-radius: 25px;
  background-color: white;

  height: 40px;

  cursor: pointer;

  p {
    padding-left: 5px;
    width: 100%;
  }
`;

const PlanInvitationBox = styled.div`
  display: flex;
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
  PlanDetailDateBox,
  PlanDetailContentBox,
  ButtonBox,
  PlanDetailDateButton,
  PlanDetailContentHeader,
  DetailHeaderContent,
  DetailHeaderSubContent,
  DetailContentSection,
  DetailPlanNumber,
  DetailContentBox,
  DetailPlanContent,
  DetailPlanContentCity,
  DetailContentItem,
  DetailButtonDiv,
  DetailHeaderSubDate,
  DetaiHeaderSubDestination,
  ButtonBoxToCenter,
  PlanInvitationBox,
};
