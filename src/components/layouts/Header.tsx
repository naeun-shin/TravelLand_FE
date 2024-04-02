import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <Container>
      <Title>떠나볼까</Title>
      <Users>
        <UserAction>로그인</UserAction>
        <UserAction>회원가입</UserAction>
      </Users>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  /* border-bottom: 1px solid #000; */
  position: relative;
`;

const Title = styled.div`
  font-size: 20px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const Users = styled.div`
  display: flex;
  gap: 20px;
  position: absolute;
  right: 40px;
`;

const UserAction = styled.div`
  font-size: 16px;
  cursor: pointer;
`;
