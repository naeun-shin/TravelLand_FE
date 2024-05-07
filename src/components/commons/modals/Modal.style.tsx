import styled from 'styled-components';

export const ModalDim = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const ModalOverlay = styled.div`
  width: 500px;
  background-color: #fff;
  border: 2px solid #000;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 40px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MapModalOverlay = styled.div`
  width: 600px; // 모달의 너비
  /* height: 500px; // 모달의 높이를 화면의 80%로 설정 */
  /* background-color: #fff; */
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  position: fixed; // 모달을 화면에 고정
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* overflow: hidden; // 내부 컨텐츠가 넘치면 숨김 */
  z-index: 10;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // 모달에 그림자 효과 추가 */
`;

export const InvitationModalOverlay = styled.div`
  width: 600px; // 모달의 너비
  height: 600px; // 모달의 높이를 화면의 80%로 설정
  padding: 25px;
  background-color: #fff;
  border-style: none;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  position: fixed; // 모달을 화면에 고정
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden; // 내부 컨텐츠가 넘치면 숨김
  z-index: 10;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // 모달에 그림자 효과 추가 */
`;

export const DetailMapModalOverlay = styled.div`
  width: 600px; // 모달의 너비
  height: 700px; // 모달의 높이를 화면의 80%로 설정
  padding: 25px;
  background-color: #fff;
  border-style: 1px solid transparent;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  position: fixed; // 모달을 화면에 고정
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden; // 내부 컨텐츠가 넘치면 숨김
  z-index: 10;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // 모달에 그림자 효과 추가 */
`;

export const LoginModalOverlay = styled.div`
  width: 500px; // 모달의 너비
  height: 500px; // 모달의 높이를 화면의 80%로 설정
  padding: 25px;
  background-color: #fff;
  border-style: 1px solid transparent;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  position: fixed; // 모달을 화면에 고정
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden; // 내부 컨텐츠가 넘치면 숨김
  z-index: 10;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // 모달에 그림자 효과 추가 */

  div {
    width: 500px;
    display: flex;
    justify-content: flex-end;
  }

  h1 {
    font-size: 28px;
    font-weight: 400;
    padding-bottom: 25px;
  }

  h4 {
    font-size: 16px;
    font-weight: 400;
  }

  span {
    font-weight: 600;
  }
`;

export const VoteModalOverlay = styled.div`
  width: 600px;
  height: 400px;
  /* padding: 30px; */
  background-color: #fff;
  border-style: 1px solid transparent;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  position: fixed; // 모달을 화면에 고정
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden; // 내부 컨텐츠가 넘치면 숨김
  z-index: 10;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // 모달에 그림자 효과 추가 */
`;

export const CreateVoteModalOverlay = styled.div`
  width: 650px;
  /* height: 400px; */
  /* padding: 30px; */
  background-color: #fff;
  border-style: 1px solid transparent;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  position: fixed; // 모달을 화면에 고정
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden; // 내부 컨텐츠가 넘치면 숨김
  z-index: 10;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // 모달에 그림자 효과 추가 */
`;

export const CreateVoteModalContainer = styled.div`
  padding: 30px 45px;
`;

// Main Modal 스타일

export const ModalWrapper = styled.div`
  position: fixed;
  width: 180px;
  right: 20%;
  top: 110px;
  z-index: 10;
  opacity: 0;
  transition:
    opacity 0.3s,
    transform 0.3s;
  transform-origin: top right;
`;

export const Modaldrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  transition: opacity 1s;
`;

export const AllModalContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  /* overflow: hidden; */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 8px;
`;

export const MenuItem = styled.div`
  cursor: pointer;
  padding: 16px;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #f9f9f9;
    border-radius: 15px;
  }
`;

// Notice Modal 스타일

export const NotiModalWrapper = styled.div`
  font-size: 18px;
  position: fixed;
  width: 480px;
  /* height: 400px; */
  right: 26%;
  top: 100px;
  z-index: 10;
  opacity: 0;
  transition:
    opacity 0.3s,
    transform 0.3s;
  transform-origin: top right;
`;

export const NotiMenuItem = styled.div`
  cursor: pointer;
  padding: 30px 16px;
  border-bottom: 1px solid #eee;

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
