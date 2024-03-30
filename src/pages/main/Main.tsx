import Button from '@/components/commons/buttons/Button';
import Modal from '@/components/commons/modals/Modal';
import { useState } from 'react';

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <Button text="가족여행" onClick={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <h2>모달 완료!</h2>
          <p>안녕하세요 김모달입니다!</p>
          <Button text="닫기" onClick={closeModal} />
        </div>
      </Modal>
    </>
  );
};

export default Main;
