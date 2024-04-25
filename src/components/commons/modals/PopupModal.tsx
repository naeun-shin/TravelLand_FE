import React from 'react';
import styled from 'styled-components';
import popupImage from 'public/assets/pop-up.png';

// 기본 모달 스타일
import { ModalDim, ModalOverlay, ModalContainer } from './Modal.style';

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTodayClose: () => void;
  imageUrl: string;
}

const PopupModal: React.FC<PopupModalProps> = ({
  isOpen,
  onClose,
  onTodayClose,
  imageUrl = popupImage,
}) => {
  if (!isOpen) return null;

  return (
    <ModalDim onClick={onClose}>
      <ModalOverlay onClick={(e) => e.stopPropagation()}>
        <StyledModalContainer>
          <img src={popupImage} alt="Popup Content" />
          <div>
            <Detail
              href="https://subdued-jam-76a.notion.site/f97a9afccfe444c3aaf5f55cef2e90ca?pvs=4"
              target="_blank" // 새 탭에서 링크를 열도록 함
              rel="noopener noreferrer" // 보안 상의 이유로 사용
            >
              {' '}
              상세 가이드 보러가기
            </Detail>
          </div>
          <ButtonsWrapper>
            <PopupBtn onClick={onTodayClose}>오늘 하루 그만 보기</PopupBtn>
            <PopupBtn onClick={onClose}>닫기</PopupBtn>
          </ButtonsWrapper>
        </StyledModalContainer>
      </ModalOverlay>
    </ModalDim>
  );
};

export default PopupModal;

const Detail = styled.a`
  display: block;
  margin-top: 10px;
  font-weight: 600;
  cursor: pointer;
  color: #444;
  text-decoration: none;
  &:hover {
    color: #5ac8ec;
  }
`;

const StyledModalContainer = styled(ModalContainer)`
  img {
    max-width: 100%;
    height: auto;
    max-height: 600px;
  }
`;
// 버튼 스타일
const PopupBtn = styled.button`
  border-radius: 30px;
`;
// 버튼 래퍼
const ButtonsWrapper = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
  margin-top: 20px;

  button {
    color: #fff;
    font-weight: 600;
    padding: 10px 20px;
    cursor: pointer;
    border: none;
    background-color: #5ac8ec;
    &:hover {
      background-color: #e0e0e0;
    }
  }
`;
