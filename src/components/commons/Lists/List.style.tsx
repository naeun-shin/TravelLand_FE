import styled from 'styled-components';

const ListContaier = styled.div`
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
    /* font-weight: ; */
    padding: 5px 20px;
    width: 60px;
  }
`;

const ListCity = styled.div`
  display: flex;
  justify-content: center;

  width: 50px;
  padding: 5px 20px;

  border-radius: 5px;
  background-color: lightgray;

  font-weight: bold;
`;

const ListTitle = styled.div`
  padding: 5px 20px;
  width: 350px;
`;

export { ListContaier, ListCity, ListLeft, ListRight, ListSection, ListTitle };
