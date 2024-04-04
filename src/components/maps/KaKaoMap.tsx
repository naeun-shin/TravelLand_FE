import React, { useState } from 'react';
import Modal from '../commons/modals/Modal';
import Button from '../commons/buttons/Button';
import LandingKaKao from './LandingKaKao';
interface KaKaoMapSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const KaKaoMap: React.FC<KaKaoMapSearchModalProps> = ({ isOpen, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenMapClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <LandingKaKao />
        <Button text="닫기" onClick={onClose} />
      </Modal>
    </>
  );
};

export default KaKaoMap;
