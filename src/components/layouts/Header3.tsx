import React, { useState } from 'react';
import styled from 'styled-components';
import SearchInput from '../search/Search';
import MainModal from '../commons/modals/MainModal';
import logoImage from '@/icons/logo.svg';
import burgerIcon from '@/icons/burger.svg';
import SearchModal from '@/pages/main/SearchPage';
import { NoticeModal } from '../commons/modals/NoticeModal';
import Login from '@/pages/user/Login';
import { useNavigate } from 'react-router-dom';

const ReDesignHeader2: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, _] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  const handleBurgerIconClick = () => {
    setIsMenuModalOpen((prevState) => !prevState);
  };

  const handleOpenLogin = () => {
    setIsModalOpen(true);
  };

  const handleLogoutClick = () => {
    setIsMenuModalOpen(false);
    // Handle logout logic here
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsMenuModalOpen(false);
  };

  const handleMainPage = () => {
    navigate('/');
  };

  const handleNoticeClick = () => {
    setIsNoticeModalOpen((prevState) => !prevState);
  };

  return (
    <Header>
      <Container>
        <Logo onClick={handleMainPage}>
          <img src={logoImage} alt="떠나볼까 로고" />
        </Logo>
        <SearchInput
          placeholder="검색어를 입력해주세요"
          onIconClick={openSearchModal}
        />
        <BurgerMenuIcon>
          <img src="/assets/icons/bell.svg" onClick={handleNoticeClick} />
          <img
            src={burgerIcon}
            alt="메뉴 모달 열기"
            onClick={handleBurgerIconClick}
          />
        </BurgerMenuIcon>
        {isMenuModalOpen && (
          <MainModal
            isLoggedIn={isLoggedIn}
            handleLogout={handleLogoutClick}
            handleLogin={handleOpenLogin}
          />
        )}
        {isNoticeModalOpen && <NoticeModal />}
      </Container>
      {isModalOpen && <Login isOpen={isModalOpen} onClose={closeModal} />}
      {isSearchModalOpen && (
        <SearchModal isOpen={isSearchModalOpen} onClose={closeSearchModal} />
      )}
      {isNoticeModalOpen && <NoticeModal />}
    </Header>
  );
};

export default ReDesignHeader2;

const Header = styled.div`
  width: 100%;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #fff;
  padding: 10px 0;
  margin-bottom: 100px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px 0 10px;
`;

const Logo = styled.div`
  max-width: 80px;
  max-height: 60px;
  cursor: pointer;
`;

const BurgerMenuIcon = styled.div`
  font-size: 24px;
  cursor: pointer;

  img {
    width: 40px;
    padding: 0px 5px;
  }
`;
