import styled from 'styled-components';

export const ReviewListTabStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 3px;
  margin-bottom: 30px;
`;

export const ReviewListTabButton = styled.button`
  justify-content: center;

  background-color: white;
  border: none;
  border-radius: 5px;

  font-size: 16px;
  font-weight: bold;

  width: 600px;
  height: 45px;

  cursor: pointer;

  &:active {
    background-color: black;
    color: white;
  }
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
