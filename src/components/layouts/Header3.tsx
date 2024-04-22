// import React, { useState } from 'react';
// import styled from 'styled-components';
// import SearchInput from '../search/Search';

// import logoImage from '@/icons/logo.svg';
// import burgerIcon from '@/icons/burger.svg';
// import SearchModal from '@/pages/main/SearchPage';
// import { NoticeModal } from '../commons/modals/NoticeModal';
// // import Login from '@/pages/user/Login';
// import { useNavigate } from 'react-router-dom';

// interface UsersProps {
//   isLoggedIn: boolean;
// }

// const ReDesignHeader2: React.FC = () => {
//   const navigate = useNavigate();
//   // const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   // const [isLoggedIn, _] = useState(false);
//   const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
//   const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);

//   const openSearchModal = () => {
//     setIsSearchModalOpen(true);
//   };

//   const closeSearchModal = () => {
//     setIsSearchModalOpen(false);
//   };

//   // const handleBurgerIconClick = () => {
//   //   setIsMenuModalOpen((prevState) => !prevState);
//   // };

//   // const handleOpenLogin = () => {
//   //   setIsModalOpen(true);
//   // };

//   // const handleLogoutClick = () => {
//   //   setIsMenuModalOpen(false);
//   //   // Handle logout logic here
//   // };

//   // const closeModal = () => {
//   //   setIsModalOpen(false);
//   //   setIsMenuModalOpen(false);
//   // };

//   const handleMainPage = () => {
//     navigate('/');
//   };
//   // mypage 이동
//   // const handleOpenMypage = () => {
//   //   navigate('/user/myPage');
//   // };
//   // // 플랜 작성하기 이동
//   // const handleOpenPlanCreate = () => {
//   //   navigate('/planCreate/1');
//   // };
//   // // 여행 정보 작성하기 이동
//   // const handleOpenTripCreate = () => {
//   //   navigate('/travelCreate');
//   // };

//   const handleNoticeClick = () => {
//     setIsNoticeModalOpen((prevState) => !prevState);
//   };

//   return (
//     <Header>
//       <Container>
//         <Logo onClick={handleMainPage}>
//           <img src={logoImage} alt="떠나볼까 로고" />
//         </Logo>
//         <SearchInput
//           placeholder="검색어를 입력해주세요"
//           onIconClick={openSearchModal}
//         />
//         <BurgerMenuIcon>
//           <img src="/assets/icons/bell.svg" onClick={handleNoticeClick} />
//           <img
//             src={burgerIcon}
//             alt="메뉴 모달 열기"
//             onClick={handleBurgerIconClick}
//           />
//         </BurgerMenuIcon>
//         {/* {isMenuModalOpen && (
//           // <MainModal
//           //   // isLoggedIn={isLoggedIn}
//           //   handleLogout={handleLogoutClick}
//           //   handleLogin={handleOpenLogin}
//           // />
//         )}
//         {isNoticeModalOpen && <NoticeModal />} */}
//       </Container>
//       {/* {isModalOpen && <Login isOpen={isModalOpen} onClose={closeModal} />} */}
//       {isSearchModalOpen && (
//         <SearchModal isOpen={isSearchModalOpen} onClose={closeSearchModal} />
//       )}
//       {isNoticeModalOpen && <NoticeModal />}
//     </Header>
//   );
// };

// export default ReDesignHeader2;

// const Header = styled.div`
//   width: 100%;
//   margin: 0 auto;
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 999;
//   background-color: #fff;
//   padding: 10px 0;
//   margin-bottom: 100px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const Container = styled.div`
//   max-width: 1300px;
//   width: 100%;
//   margin: 0 auto;
//   height: 80px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 60px 0 10px;
// `;

// const Logo = styled.div`
//   max-width: 80px;
//   max-height: 60px;
//   cursor: pointer;
// `;

// const BurgerMenuIcon = styled.div`
//   position: relative;
//   font-size: 24px;
//   cursor: pointer;

//   img {
//     width: 40px;
//     padding: 0px 5px;
//   }
// `;

// const BurgerMenuList = styled.div<UsersProps>`
//   position: absolute;
//   z-index: 8;

//   padding: 15px 5px;
//   width: 160px;
//   height: ${(props) => (props.isLoggedIn ? '200px' : '60px')};

//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: center;

//   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
//   border-radius: 25px;
//   background-color: white;

//   margin-top: 5px;

//   button {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: center;

//     cursor: pointer;

//     background-color: white;
//     border: none;

//     font-size: 16px;
//     z-index: 8;
//     width: 160px;
//     height: ${(props) => (props.isLoggedIn ? '160px' : '')};

//     &:hover {
//       display: flex;
//       flex-direction: column;
//       align-items: flex-start;
//       justify-content: center;

//       background-color: #f6f6f6;
//       /* border: none; */
//       border-radius: 20px;
//       width: 100%;
//       height: ${(props) => (props.isLoggedIn ? '160px' : '80px')};
//     }
//   }

//   hr {
//     border: none;
//     height: 1px; /* Set the height of the hr line */
//     background-color: #c4c4c4; /* The color of the hr line */
//     margin: 8px 0; /* Adjust the space around the hr to your design */
//     width: 100%; /* Ensure the line goes full width */
//   }
// `;
