import styled from 'styled-components';

export const ModalDim = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
`;

export const ModalOverlay = styled.div`
  /* width: 500px; */
  background-color: #fff;
  border: 2px solid #000;
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
