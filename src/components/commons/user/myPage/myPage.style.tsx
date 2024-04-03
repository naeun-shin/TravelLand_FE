import styled, { css } from 'styled-components';

const MyPagePagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  button {
    padding: 10px;
    cursor: pointer;

    background-color: white;
    border: none;
  }
`;

const MyPageTabStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 2px;
`;

const MyPageButton = styled.div`
  padding: 25px 5px;
  display: flex;
  justify-content: flex-end;
`;

const MyPageTabButton = styled.button<{ isActive: boolean }>`
  justify-content: center;

  background-color: white;
  border: none;
  border-radius: 5px;

  font-size: 16px;
  font-weight: bold;

  width: 400px;
  height: 45px;

  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: black;
      color: white;
    `}
`;

const MyPageInvitedContainer = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
`;

export {
  MyPagePagination,
  MyPageTabStyle,
  MyPageButton,
  MyPageTabButton,
  MyPageInvitedContainer,
};
