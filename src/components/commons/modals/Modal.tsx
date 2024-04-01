import React from 'react';
import { ModalDim, ModalOverlay, ModalContainer } from './Modal.style';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalDim onClick={onClose}>
      <ModalOverlay onClick={(e) => e.stopPropagation()}>
        <ModalContainer>{children}</ModalContainer>
      </ModalOverlay>
    </ModalDim>
  );
};

export default Modal;

// 모달 사용 예시로 해둔거 일단 주석처리로 둠

// import Modal from '@/components/commons/modals/Modal';
// import { useState } from 'react';

// const [isModalOpen, setIsModalOpen] = useState(false);
// const openModal = () => setIsModalOpen(true);
// const closeModal = () => setIsModalOpen(false);

{
  /* <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <h2>모달 완료!</h2>
          <p>안녕하세요 김모달입니다!</p>
          <Button text="닫기" onClick={closeModal} />
        </div>
      </Modal> */
}
