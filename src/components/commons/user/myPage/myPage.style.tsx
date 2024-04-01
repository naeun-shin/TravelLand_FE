import styled from 'styled-components';

const MyPageTabStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 2px;
`;

const MyPageTabButton = styled.button`
  justify-content: center;

  background-color: white;
  border: none;
  border-radius: 5px;

  font-size: 16px;
  font-weight: bold;

  width: 400px;
  height: 45px;

  cursor: pointer;

  &:active {
    background-color: black;
    color: white;
  }
`;

const MyPageListContaier = styled.div`
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
`;

const MyPageListSection = styled.div``;
const MyPageListLeft = styled.div`
  display: flex;
  padding: 5px;
`;

const MyPageListRight = styled.div`
  display: flex;
  align-items: center;

  div {
    /* font-weight: ; */
    padding: 5px 20px;
    width: 60px;
  }
`;

const MyPageListCity = styled.div`
  display: flex;
  justify-content: center;

  width: 50px;
  padding: 5px 20px;

  border-radius: 5px;
  background-color: lightgray;

  font-weight: bold;
`;

const MyPageListTitle = styled.div`
  padding: 5px 20px;
  width: 350px;
`;

export {
  MyPageTabStyle,
  MyPageTabButton,
  MyPageListContaier,
  MyPageListSection,
  MyPageListLeft,
  MyPageListRight,
  MyPageListCity,
  MyPageListTitle,
};
