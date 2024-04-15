import styled from 'styled-components';
type PlanDetailDateButtonProps = {
  isActive: boolean;
  // date: any;
};
const PlanFirstSection = styled.div`
  display: flex;
  /* padding: 20px 5px; */
  align-items: center;
  flex-direction: row;
  h3 {
    padding-right: 25px;
  }
`;

const PlanSecondSection = styled.div``;

const PlanBoxWithSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    padding-left: 15px;
  }
`;

const PlanBoxWithCalendar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PlanBox = styled.div`
  display: flex;
  /* align-content: center; */
  flex-direction: row;
  align-items: center;

  /* border-bottom: 1px solid lightgray; */
  padding: 10px 0px;
`;

const PlanContent = styled.div`
  padding-left: 15px;
  /* font-weight: normal; */
  /* justify-content: center; */
  div {
    padding-left: 5px;
  }
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
  padding-top: 30px;
  width: 75%;
`;

const ButtonBoxToRight = styled.div`
  display: flex;
  justify-content: end;
  width: 75%;
  padding-top: 30px;
  padding-right: 30px;
`;

// detail 영역
const PlanDetailDateBox = styled.div`
  padding: 30px 0px;
`;

const PlanDetailDateButton = styled.button<PlanDetailDateButtonProps>`
  margin-right: 10px;
  width: 150px;
  font-size: 16px;
  background-color: ${(props) => (props.isActive ? '#5ac8ec' : 'white')};
  color: ${(props) => (props.isActive ? 'white' : 'black')};

  border: 1px solid ${(props) => (props.isActive ? 'transparent' : 'lightGray')};
  border-radius: 25px;
  height: ${(props) =>
    props.isActive
      ? '100px'
      : '60px'}; /* 활성화 상태일 때 아래쪽 패딩을 늘려 날짜에 여백을 제공 */ //높이를 자동으로 설정하여 내부 요소에 맞춤

  hr {
    border-color: white;
    width: 60%;
  }
`;

const DateDisplay = styled.div`
  position: absolute;
  /* bottom: -20px; // Adjust as necessary to position below the day button */
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  padding: 5px;
`;

const PlanDetailContentBox = styled.div`
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 35px;

  width: 75%;
  height: 100%;

  padding: 25px;
  margin: 10px 0px;
`;

const PlanDetailContentHeader = styled.div`
  display: flex;
  align-items: center;

  height: 50px;

  font-size: 16px;
`;

const DetailHeaderContent = styled.div`
  /* background-color: gray; */
  color: white;
  height: 100px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;

  div {
    /* border-top: 1px solid white; */
    margin: 5px;
  }
  hr {
    width: 100px;
  }
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
  PlanBoxWithSpaceBetween,
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
  ButtonBoxToRight,
  PlanInvitationBox,
  PlanBoxWithCalendar,
  DateDisplay,
};
