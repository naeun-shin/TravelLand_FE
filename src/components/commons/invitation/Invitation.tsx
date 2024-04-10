import Button from '../buttons/Button';
import Modal from '../modals/Modal';

interface InvitationProps {
  isOpen: boolean;
  onClose: () => void;
  onInvite: () => void; // 초대하기 버튼 클릭 시 호출될 함수 추가
}

export const Invitation: React.FC<InvitationProps> = ({
  isOpen,
  onClose,
  onInvite,
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        {/* 초대하기 버튼 추가 */}
        <Button text="초대하기" onClick={onInvite} />
        <Button text="닫기" onClick={onClose} />
      </Modal>
    </>
  );
};
