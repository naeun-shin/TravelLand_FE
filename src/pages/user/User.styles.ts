import styled from 'styled-components';

const MyPageStyle = styled.div`
  padding: 50px 200px;

  h2 {
    font-size: 24px;
    padding-right: 50%;
    font-weight: bold;
  }
`;

const LoginStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 12px;
  }
`;

export { MyPageStyle, LoginStyle };
