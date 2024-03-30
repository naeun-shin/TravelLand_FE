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
