import styled from 'styled-components';
type PlanDetailDateButtonProps = {
  isActive?: boolean;
  date?: any;
};

interface ButtonProps {
  disabled?: boolean;
}

export const PlanFirstSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  h3 {
    padding-right: 25px;
  }
`;

export const PlanSecondSection = styled.div``;

export const PlanBoxWithSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    /* padding-left: 15px; */
  }
`;

export const PlanBoxWithCalendar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PlanBox = styled.div`
  display: flex;
  /* align-content: center; */
  flex-direction: row;
  align-items: center;

  /* border-bottom: 1px solid lightgray; */
  padding: 10px 0px;
`;

export const PlanContent = styled.div`
  padding-left: 15px;
  /* font-weight: normal; */
  /* justify-content: center; */
  div {
    padding-left: 5px;
  }
`;

export const PlanContentTitle = styled.div`
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 18px;
  font-family: 'pretendard';
`;

export const PlanHorizontalContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding-left: 15px;
`;

export const PlanHorizontalRightButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: white;
`;

export const PlanBottomSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 15px;
`;

export const PlanNextButton = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.disabled ? '#C5F1FF' : '#5AC8EC'}; // 비활성화 상태에 따라 색상 변경
  color: white;
  justify-content: center;
  border: none;
  width: 160px;
  height: 50px;
  border-radius: 16px;
  font-size: 18px;
  cursor: ${(props) =>
    props.disabled
      ? 'default'
      : 'pointer'}; // 비활성화 상태에 따라 커서 스타일 변경
`;

// 두번째 플랜 페이지

export const PlanDetailCreateBox = styled.div`
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 35px;

  font-size: 18px;

  width: 75%;
  height: 100%;

  padding: 25px;

  div {
    padding: 5px 0px;
  }
`;
export const PlanDateButton = styled.div`
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
export const ButtonBox = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;

  font-size: 16px;

  h1 {
    font-size: 24px;
  }
`;

export const ButtonBoxToRight = styled.div`
  display: flex;
  justify-content: end;
  width: 80%;
  padding-top: 30px;
  padding-right: 30px;
`;

// detail 영역
export const PlanDetailContainer = styled.div`
  /* width: 85%; */
  display: flex;
  flex-direction: column;
`;

export const PlanDetailDateBox = styled.div`
  padding: 25px 0px;
`;

export const PlanDetailDateButton = styled.button<PlanDetailDateButtonProps>`
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

export const DateDisplay = styled.div`
  position: absolute;
  /* bottom: -20px; // Adjust as necessary to position below the day button */
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  padding: 5px;
`;

export const PlanDetailContentBox = styled.div`
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 35px;

  width: 100%;
  height: 100%;

  padding: 15px;
  margin: 5px 0px 5px 50px;

  div {
    padding: 5px 0px;
  }
`;

export const PlanDetailContentHeader = styled.div`
  display: flex;
  font-size: 16px;
  color: gray;
  justify-content: space-between;

  padding-bottom: 30px;
`;

export const DetailHeaderContent = styled.div`
  color: gray;
  display: flex;
  flex-direction: column;
  div {
    padding: 5px 0px;
  }
`;

export const DetailHeaderSubContent = styled.div`
  display: flex;
  align-items: center;

  background-color: #eaeaea;

  height: 50px;
  width: 100%;

  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;

  padding-left: 20px;
`;

export const DetailHeaderThirdContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 15px;
  border-bottom: 1px solid #dddddd;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    margin-right: 5px;
    border: 1px solid lightgray;
    border-radius: 50%;
    width: 45px;
    height: 45px;
  }
`;

export const DetaiHeaderSubDestination = styled.div`
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

export const DetailContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DetailContentBox = styled.div`
  position: relative;
  /* border-left: 1px solid black; */
  padding: 5px 0px;
  display: flex;
  align-items: center;
  width: 800px;
`;

export const DetailPlanNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute; /* 추가된 부분: 절대 위치 지정 */

  /* top: 40%; */
  /* 추가된 부분: 부모 요소의 좌상단을 기준으로 설정 */
  /* left: -13px;  */
  /* 추가된 부분: 부모 요소의 좌상단을 기준으로 설정 */

  border-radius: 50px;

  background-color: lightgray;
  color: black;

  font-size: 12px;

  width: 25px;
  height: 25px;

  margin-right: 15px;
`;

export const DetailPlanContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 25px;
  font-size: 18px;
  div {
    padding-bottom: 15px;
  }
`;

export const DetailPlanContentCity = styled.div`
  color: black;
  font-size: 22px;
  font-weight: bold;
`;

export const DetailContentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DetailButtonDiv = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 50%;
  background-color: #c5f1ff;

  height: 40px;

  cursor: pointer;

  p {
    padding-left: 5px;
    width: 100%;
  }
`;
export const DetailContent = styled.div`
  justify-content: flex-start;
  font-size: 16px;
  color: gray;

  width: 70%;
`;

export const DetailLocationBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: gray;
  align-items: flex-end;
  margin-bottom: 5px;
  width: 100%;
`;

export const InvitationBox = styled.div`
  padding: 5px 0px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const InvitationDiv = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  width: 100%;
  padding: 0px 20px;
  height: 80px;
  color: gray;
  border: 1px solid lightgray;
  border-radius: 25px;
`;

export const PlanInvitationBox = styled.div`
  display: flex;
  background-color: gray;
`;

export const DetailButtonsBox = styled.div`
  display: flex;
  align-items: center;
`;
