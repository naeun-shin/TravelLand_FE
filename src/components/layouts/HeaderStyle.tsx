import styled from 'styled-components';
import { HeaderProps, SearchInputContainerProps, UsersProps } from './Header';

export const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
`;

export const NavItem = styled.div`
  font-size: 20px;
  margin: 15px 15px 0 10px;
  cursor: pointer;
  font-weight: bold;
  color: #333;
  &:hover {
    color: #5ac8ec;
  }
`;

export const Header = styled.div<HeaderProps>`
  /* max-width: 1400px; */
  /* width: 1400[]; */
  margin: 0 auto;

  box-shadow: ${(props) =>
    props.needSearchInput ? '0 2px 4px rgba(0, 0, 0, 0.1)' : ''};
`;

export const StickyHeader = styled.div<SearchInputContainerProps>`
  position: ${(props) => (props.isScrolled ? 'fixed' : 'relative')};
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  transition: position 0.3s ease-in-out;
  z-index: 10;
  padding: 10px 0 0 0;
  box-shadow: ${(props) =>
    props.isScrolled ? '0 2px 8px rgba(0, 0, 0, 0.15)' : 'none'};
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  max-width: 80px;
  max-height: 60px;
  cursor: pointer;
`;

// 버거 메뉴 아이콘 스타일
export const BurgerMenuIcon = styled.div`
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

export const BurgerMenuList = styled.div<UsersProps>`
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
    height: 1px;
    background-color: #c4c4c4;
    margin: 8px 0;
    width: 100%;
  }
`;

export const MenuContainer = styled.div`
  position: relative;
  display: inline-block;
  z-index: 10;
`;

export const ModalContainer = styled.div`
  position: absolute;
  margin: 8px;
  border-radius: 20px;

  background-color: #fff;

  right: 50px;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

export const MenuItem = styled.div`
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

export const TitleBox = styled.div`
  display: flex;
  padding: 5px 0px;
`;

export const Title = styled.div`
  color: #5ac8ec;
  font-size: 18px;
  display: flex;
  align-items: flex-start;
  padding-bottom: 15px;

  img {
    padding: 0px 5px;
  }
`;
