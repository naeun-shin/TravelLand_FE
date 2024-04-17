import styled from 'styled-components';
interface IsPublicTitleProps {
  isPublic: boolean;
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;

  padding: 5px;
`;

const ListSection = styled.div``;
const ListLeft = styled.div`
  display: flex;
  padding: 5px;
`;

const ListRight = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    justify-content: flex-end;
    padding: 5px 20px;
  }
`;

const ListCity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  padding: 10px;

  border-radius: 5px;

  background-color: lightgray;

  font-weight: bold;
`;

const DoubleColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* padding: 5px; */
`;

const Column = styled.div`
  width: 500px; // 각 컬럼이 전체 너비의 약 절반을 차지하도록 설정
  height: 500px;
`;

const ListItem = styled.div`
  display: flex; // 수평 정렬
  align-items: center; // 세로 중앙 정렬
  border-bottom: 1px solid #eaeaea; // 아이템 사이의 구분선
  padding: 20px 0; // 아이템 내부의 패딩
  justify-content: space-between;
`;

const ListTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  align-content: center;
  cursor: pointer;
  color: black;
`;

const ListLeftIcon = styled.div`
  padding-right: 15px;
  img {
    width: 15px;
    height: 20px;
  }
`;

const ListItemLeft = styled.div`
  width: 100%;
  /* padding: 5px 0px; */
  color: gray;
  font-size: 16px;
  div {
    padding: 5px 0px;
  }
`;

const ListItemRight = styled.div`
  display: flex;
  align-items: center;
`;

const MyPlanListWrapper = styled.div`
  /* width: 80%; */
  /* border: 1px solid gray; */
  /* padding: 50px 0px; */
  font-size: 18px;
`;

const MyPlanListButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MyPlanListItemWrapper = styled.div`
  padding: 30px;
  /* border: 1px solid gray; */
  /* display: flex; */
`;

const MyPlanListItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */

  height: 100px;

  border-bottom: 1px solid lightGray;
  padding: 5px;
`;

const MyPlanIsPublic = styled.div<IsPublicTitleProps>`
  display: flex;
  justify-content: center;

  width: 15%;

  cursor: pointer;

  font-size: 18px;
  color: ${(props: { isPublic: any }) => (props.isPublic ? '#5AC8EC' : 'gray')};
`;

const MyPlanListContentBox = styled.div`
  width: 50%;
  div {
    color: gray;
  }
`;

const MyPlanListTitle = styled.span`
  padding-top: 15px;
  font-size: 22px;
  /* font-weight: bold; */
  color: black;
`;

const MyPlanListCountBox = styled.div`
  height: 60%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 15%;
  border-right: 1px solid lightGray;
  color: gray;

  div {
    margin: 5px;
    display: flex;
    padding: 0px 5px;
  }
`;

const MyPlanListInviteeBox = styled.div`
  display: flex;
  position: relative;
  height: 50px; // This should be the height of the largest image
  width: 20%;

  img {
    width: 35px; // Adjust the width as needed
    height: 35px; // Adjust the height as needed
    border-radius: 50%;
    border: 2px solid white; // Adds a white border to distinguish overlapping images
    position: absolute;

    &:first-child {
      left: 0;
    }
    &:nth-child(n + 2) {
      left: calc(
        25px * (n - 1)
      ); // Adjust the overlay by changing 25px to the desired value
    }
  }
`;

export {
  ListContainer,
  ListCity,
  ListLeft,
  ListRight,
  ListSection,
  ListTitle,
  DoubleColumnContainer,
  Column,
  ListItem,
  ListItemLeft,
  ListLeftIcon,
  ListItemRight,
  MyPlanListWrapper,
  MyPlanListButtons,
  MyPlanListItemWrapper,
  MyPlanListItems,
  MyPlanIsPublic,
  MyPlanListCountBox,
  MyPlanListTitle,
  MyPlanListInviteeBox,
  MyPlanListContentBox,
};
