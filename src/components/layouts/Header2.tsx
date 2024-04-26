import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SearchInput from '../search/Search';
import logoImage from '@/icons/logo.svg';
import littleLogo from '/assets/icons/littleLogo.svg';
import burgerIcon from '@/icons/burger.svg';
import SearchModal from '@/pages/main/SearchPage';
import { useAuthStore } from '@/store/useAuthStore';
// import { NoticeModal } from '../commons/modals/NoticeModal';
import { Cookies } from 'react-cookie';
import Button from '../commons/buttons/Button';
import Vote from '../vote/Vote';
import Login from '@/pages/user/Login';

interface SearchInputContainerProps {
  isScrolled: boolean;
}

interface UsersProps {
  isLoggedIn: boolean;
}

interface HeaderProps {
  needSearchInput: boolean;
}

const ReDesignHeader: React.FC<HeaderProps> = ({ needSearchInput }) => {
  const { logout, isLoggedIn, login } = useAuthStore(); // 로그인 함수를 가져옵니다.
  const cookie = new Cookies();
  // 메뉴 모달
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  // 로그인 모달
  const [isModalOpen, setIsModalOpen] = useState(false); // 로그인 모달 상태 추가
  // const [isLoggedIn, _] = useState(false); // 로그인 상태를 관리하는 상태 추가
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false); // 검색 모달 상태 추가

  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false); // 알림 모달 상태 관리
  const [isVoteModalOpen, setIsVoteModalOpen] = useState(false); // 투표 모달

  const navigate = useNavigate();

  // 모달을 토글하는 함수
  // const toggleModal = () => setIsModalOpen((prevState) => !prevState);

  // 모달을 여는 함수
  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  // 모달을 닫는 함수
  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  // 버거 메뉴 모달
  const handleBurgerIconClick = () => {
    if (isNoticeModalOpen) {
      setIsNoticeModalOpen(false);
    }
    setIsMenuModalOpen((prevState) => !prevState);
  };

  // 메뉴 모달 닫기
  // const closeMenuModal = () => {
  //   setIsMenuModalOpen(false);
  // };

  // mypage 이동
  const handleOpenMypage = () => {
    navigate('/user/myPage');
  };
  // 플랜 작성하기 이동
  const handleOpenPlanCreate = () => {
    navigate('/planCreate/1');
  };
  // 여행 정보 작성하기 이동
  const handleOpenTripCreate = () => {
    navigate('/travelCreate');
  };

  // 로그인 모달 열기
  const handleOpenLogin = () => {
    setIsModalOpen(true); // 로그인 모달 상태를 true로 변경
  };

  const handleLogoutClick = () => {
    setIsMenuModalOpen(false);
    logout();
    cookie.remove('Authorization', { path: '/' }); // Adjust the path and domain as needed.
    alert('로그아웃 되었습니다!');
    navigate('/');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsMenuModalOpen(false);
    setIsNoticeModalOpen(false); // Make sure to reset all modal states
  };

  // 로고 클릭 시 메인 페이지 이동
  const handleMainPage = () => {
    navigate('/');
  };

  // 모달 토글 함수
  const handleNoticeClick = () => {
    if (isMenuModalOpen) {
      setIsMenuModalOpen(false);
    }
    setIsNoticeModalOpen((prevState) => !prevState); // 현재 상태의 반대로 설정
  };

  // 투표 모달을 여는 함수
  const handleOpenVoteModal = () => {
    setIsVoteModalOpen(true);
  };

  // 투표 모달을 닫는 함수
  const handleCloseVoteModal = () => {
    setIsVoteModalOpen(false);
  };

  // 초대 수락 함수
  const handleAcceptClick = () => {
    alert('현재 개발 중입니다!');
  };

  // 초대 거절 함수
  const handleDenyClick = () => {
    alert('현재 개발 중입니다!');
  };

  // 스크롤에 따라 상태 변경
  useEffect(() => {
    // 로그인 상태 쿠키 확인
    const token = cookie.get('Authorization');
    if (token) {
      login(); // Zustand의 로그인 상태를 true로 설정
    }

    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > 50;
      setIsScrolled(shouldBeScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 로그인 상태에 따라 보여지는 컨텐츠가 달라지도록 조건부 렌더링 처리
  return (
    <Header needSearchInput={needSearchInput}>
      <StickyHeader isScrolled={isScrolled}>
        <Container>
          {isScrolled ? (
            <>
              <Logo onClick={handleMainPage}>
                <img src={littleLogo} alt="떠나볼까 작은 로고" />
              </Logo>
            </>
          ) : (
            <>
              <Logo onClick={handleMainPage}>
                <img src={logoImage} alt="떠나볼까 로고" />
              </Logo>
            </>
          )}
          {needSearchInput ? (
            <>
              <SearchInput
                placeholder="검색어를 입력해주세요"
                onIconClick={openSearchModal}
              />
            </>
          ) : (
            <>
              {isScrolled && (
                <SearchInput
                  placeholder="검색어를 입력해주세요"
                  onIconClick={openSearchModal}
                />
              )}
            </>
          )}
          {/* {isScrolled && (
            <SearchInput
              placeholder="검색어를 입력해주세요"
              onIconClick={openSearchModal}
            />
          )} */}
          <MenuContainer>
            {/* 알림 */}
            <BurgerMenuIcon>
              <img src="/assets/icons/bell.svg" onClick={handleNoticeClick} />
              <img
                src={burgerIcon}
                alt="메뉴 모달 열기"
                onClick={handleBurgerIconClick}
              />
            </BurgerMenuIcon>
            {isMenuModalOpen ? (
              <>
                {!isLoggedIn ? (
                  <>
                    <BurgerMenuList isLoggedIn={isLoggedIn}>
                      <button onClick={handleOpenLogin}>로그인</button>
                    </BurgerMenuList>
                  </>
                ) : (
                  <>
                    <BurgerMenuList isLoggedIn={isLoggedIn}>
                      <button onClick={handleOpenMypage}>마이페이지</button>
                      <hr />
                      <button onClick={handleOpenPlanCreate}>
                        여행 플랜 작성하기
                      </button>
                      <hr />
                      <button onClick={handleOpenTripCreate}>
                        여행 정보 작성하기
                      </button>
                      <hr />
                      <button onClick={handleLogoutClick}>로그아웃</button>
                    </BurgerMenuList>
                  </>
                )}
              </>
            ) : (
              ''
            )}
            {/* {isNoticeModalOpen && <NoticeModal />} */}
            {isNoticeModalOpen ? (
              <>
                <ModalContainer>
                  <MenuItem>
                    <TitleBox>
                      <Title>
                        {' '}
                        <img src="/assets/icons/blueDot.svg" />
                        봄날의 고성
                      </Title>{' '}
                      플랜에 초대되었습니다. 수락하시겠습니까?
                    </TitleBox>
                    <div>
                      <Button
                        text="거절"
                        color="#F6F6F6"
                        textColor="gray"
                        borderRadius="15px"
                        width="100px"
                        borderColor="#F6F6F6"
                        marginRight="5px"
                        onClick={handleDenyClick}
                      />
                      <Button
                        text="수락"
                        borderRadius="15px"
                        width="100px"
                        onClick={handleAcceptClick}
                      />
                    </div>
                  </MenuItem>
                  <MenuItem>
                    <TitleBox>
                      <Title>
                        {' '}
                        <img src="/assets/icons/blueDot.svg" />
                        비가 안온다면 어떤 플랜이 나을까요?
                      </Title>{' '}
                      에 투표할 수 있습니다.
                    </TitleBox>
                    <div>
                      <Button
                        text="투표하러 가기"
                        color="#F6F6F6"
                        textColor="black"
                        borderRadius="15px"
                        width="130px"
                        borderColor="#F6F6F6"
                        onClick={handleOpenVoteModal}
                      />
                    </div>
                  </MenuItem>
                </ModalContainer>
              </>
            ) : (
              <></>
            )}
          </MenuContainer>
        </Container>
      </StickyHeader>
      {/* 로그인 모달 */}
      {isModalOpen && <Login isOpen={isModalOpen} onClose={closeModal} />}
      {/* 검색 모달 */}
      {isSearchModalOpen && (
        <SearchModal
          isOpen={isSearchModalOpen}
          onClose={closeSearchModal}
          onSearch={openSearchModal}
        />
      )}
      {/* 투표 모달이 열렸을 때, Vote 컴포넌트를 렌더링합니다. */}
      {isVoteModalOpen && (
        <Vote isOpen={isVoteModalOpen} onClose={handleCloseVoteModal} />
      )}
    </Header>
  );
};

export default ReDesignHeader;

const Header = styled.div<HeaderProps>`
  /* max-width: 1400px; */
  /* width: 1400[]; */
  margin: 0 auto;

  box-shadow: ${(props) =>
    props.needSearchInput ? '0 2px 4px rgba(0, 0, 0, 0.1)' : ''};
`;

const StickyHeader = styled.div<SearchInputContainerProps>`
  position: ${(props) => (props.isScrolled ? 'fixed' : 'relative')};
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  transition: position 0.3s ease-in-out;
  z-index: 10;
  padding: 10px 0;
  box-shadow: ${(props) =>
    props.isScrolled ? '0 2px 8px rgba(0, 0, 0, 0.15)' : 'none'};
`;

const Container = styled.div`
  max-width: 1400px;
  /* width: 100%; */
  margin: 0 auto;
  height: 80px;
  display: flex;
  justify-content: space-between;
  /* padding: 0 60px 0 10px; */
  align-items: center;
`;

const Logo = styled.div`
  max-width: 80px;
  max-height: 60px;
  cursor: pointer;
`;

// 버거 메뉴 아이콘 스타일
const BurgerMenuIcon = styled.div`
  position: relative;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  line-height: 60px;
  display: flex;
  align-items: center;

  img {
    width: 40px;
    padding: 0px 5px;
  }
`;

const BurgerMenuList = styled.div<UsersProps>`
  position: absolute;
  z-index: 8;

  padding: 15px 5px;
  width: 160px;
  height: ${(props) => (props.isLoggedIn ? '200px' : '60px')};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  right: 0px;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 25px;
  background-color: white;

  margin-top: 5px;

  button {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    cursor: pointer;

    background-color: white;
    border: none;

    font-size: 16px;
    z-index: 8;
    width: 160px;
    height: ${(props) => (props.isLoggedIn ? '160px' : '')};

    &:hover {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      background-color: #f6f6f6;
      /* border: none; */
      border-radius: 20px;
      width: 100%;
      height: ${(props) => (props.isLoggedIn ? '160px' : '80px')};
    }
  }

  hr {
    border: none;
    height: 1px; /* Set the height of the hr line */
    background-color: #c4c4c4; /* The color of the hr line */
    margin: 8px 0; /* Adjust the space around the hr to your design */
    width: 100%; /* Ensure the line goes full width */
  }
`;

const MenuContainer = styled.div`
  position: relative;
  display: inline-block;
  z-index: 10;
`;

const ModalContainer = styled.div`
  position: absolute;
  margin: 8px;
  border-radius: 20px;

  background-color: #fff;

  right: 50px;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const MenuItem = styled.div`
  cursor: pointer;
  padding: 30px 16px;
  border-bottom: 1px solid #eee;
  width: 550px;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f9f9f9;
    border-radius: 15px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  padding: 5px 0px;
`;

const Title = styled.div`
  color: #5ac8ec;
  font-size: 18px;
  display: flex;
  align-items: flex-start;
  padding-bottom: 15px;

  img {
    padding: 0px 5px;
  }
`;
