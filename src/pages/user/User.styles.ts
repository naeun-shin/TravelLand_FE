import styled from 'styled-components';

const MyPageStyle = styled.div`
  padding: 50px 350px;

  h2 {
    font-size: 24px;
    padding-right: 50%;
    font-weight: bold;
  }
`;

const MyPageButton = styled.div`
  padding: 25px 5px;
  display: flex;
  justify-content: flex-end;
`;

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

export { MyPageStyle, MyPageButton, MyPagePagination };
