import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

// 타입 정의 추가
interface IMainModalProps {
  isLoggedIn: boolean;
  handleLogout: () => void;
  handleLogin: () => void;
}

const MainModal: React.FC<IMainModalProps> = ({
  isLoggedIn,
  handleLogout,
  handleLogin,
}) => {
  const [slide, setSlide] = useState<boolean>(false);

  useEffect(() => {
    setSlide(true);
    console.log('Modal opened');
  }, []);

  return ReactDOM.createPortal(
    <Modaldrop style={{ opacity: slide ? 1 : 0 }}>
      <ModalWrapper
        style={{
          opacity: slide ? 1 : 0,
          transform: slide ? 'translateY(0)' : 'translateY(-20px)',
        }}
      >
        <ModalContainer>
          {!isLoggedIn && (
            <>
              <MenuItem onClick={() => handleLogin()}>로그인</MenuItem>
              <MenuItem>회원가입</MenuItem>
            </>
          )}
          {isLoggedIn && (
            <>
              <MenuItem>마이페이지</MenuItem>
              <MenuItem>여행 플랜 작성하기</MenuItem>
              <MenuItem>여행 정보 작성하기</MenuItem>
              <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
            </>
          )}
        </ModalContainer>
      </ModalWrapper>
    </Modaldrop>,
    document.getElementById('modal-root') || document.createElement('div'),
  );
};

export default MainModal;

const ModalWrapper = styled.div`
  position: fixed;
  width: 150px;
  right: 20%;
  top: 110px;
  /* z-index: 1000; */
  opacity: 0;
  transition:
    opacity 0.3s,
    transform 0.3s;
  transform-origin: top right;
`;

const Modaldrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  transition: opacity 1s;
`;

const ModalContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 8px;
`;

const MenuItem = styled.div`
  cursor: pointer;
  padding: 16px;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #f9f9f9;
  }
`;
