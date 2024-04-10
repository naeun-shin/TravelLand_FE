import styled from 'styled-components';

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

const ListTitle = styled.div`
  padding: 5px 20px;
  /* width: 350px; */
  align-content: center;
`;

export { ListContainer, ListCity, ListLeft, ListRight, ListSection, ListTitle };
