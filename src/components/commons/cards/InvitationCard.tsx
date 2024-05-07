import * as S from './Card.style';

export interface InvitationCardProps {
  src?: string; // 이미지 URL
  onClick?: () => void; // 클릭 이벤트 핸들러
}

const InvitationCard: React.FC<InvitationCardProps> = ({ src, onClick }) => {
  return (
    <>
      <S.InvitationCardContainer>
        <img src={src} alt="User Profile Image" />
        <button onClick={onClick}>X</button>
      </S.InvitationCardContainer>
    </>
  );
};

export default InvitationCard;
