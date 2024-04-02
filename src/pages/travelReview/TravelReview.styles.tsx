import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const TravelReviewstyle = styled.div`
  padding: 50px 250px;
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    font-size: 24px;
    padding-right: 50%;
    font-weight: bold;
  }
`;

export { TravelReviewstyle };

export const ReviewPagePagination = styled.div`
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

export const ReviewPageTabStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 2px;
`;

export const ReviewPageButton = styled.div`
  padding: 25px 5px;
  display: flex;
  justify-content: flex-end;
`;

export const ReviewPageTabButton = styled.button<{ isActive: boolean }>`
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

export const ReviewListContaier = styled.div`
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
`;

export const ReviewListSection = styled.div``;
export const ReviewListLeft = styled.div`
  display: flex;
  padding: 5px;
`;

export const ReviewListRight = styled.div`
  display: flex;
  align-items: center;

  div {
    padding: 5px 20px;
    width: 60px;
  }
`;

export const ReviewListCity = styled.div`
  display: flex;
  justify-content: center;

  width: 50px;
  padding: 5px 20px;

  border-radius: 5px;
  background-color: lightgray;

  font-weight: bold;
`;

export const ReviewListTitle = styled.div`
  padding: 5px 20px;
  width: 350px;
`;

export const ReviewInvitedContainer = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
`;

export const TitleLink = styled(Link)`
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  color: #000;
`;
