import Calendar from '@/components/commons/calendar/Calendar';
import ToggleButton from '@/components/commons/buttons/ToggleButton';
import * as S from '@/components/plans/Plan.style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Invitation } from '@/components/commons/invitation/Invitation';
import InvitationCard from '@/components/commons/cards/InvitationCard';

interface Person {
  src: string;
}

const PlanCreate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInvitationModalOpen, setIsInvitationModalOpen] = useState(false);
  const [invitedPeople, setInvitedPeople] = useState<Person[]>([]);
  // 초대된 사람들 상태 추가
  const [isPublic, setIsPublic] = useState<boolean>(true);

  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/planCreate/2');
  };
  // 달력 모달 오픈 핸들러

  const handleOpenCalendar = () => {
    console.log('모달 오픈 ');
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 초대하기 모달 오픈 핸들러
  const handleOpenInvitation = () => {
    setIsInvitationModalOpen(true);
  };

  const closeInvitationModal = () => {
    setIsInvitationModalOpen(false);
  };
  // 초대하기 버튼 클릭 시 호출될 함수
  const handleInvite = () => {
    // 초대 로직 구현
    // 초대된 사람을 invitedPeople 상태에 추가
    // 모달 닫기
    setIsInvitationModalOpen(false);
  };

  // 초대한 사람 삭제
  const handleDeleteClick = (index: number) => {
    // 초대된 사람들 배열에서 해당 인덱스의 항목을 제거
    const updatedInvitedPeople = [...invitedPeople];
    updatedInvitedPeople.splice(index, 1);
    setInvitedPeople(updatedInvitedPeople);
  };
  // 토글
  const toggleIsPublic = () => setIsPublic(!isPublic);

  return (
    <>
      <S.PlanFirstSection>
        <h3>[일본 | 도쿄] 일본 여행</h3>
        <div>
          <ToggleButton isChecked={isPublic} onToggle={toggleIsPublic} />
        </div>
      </S.PlanFirstSection>
      <S.PlanSecondSection>
        {/* 플랜 계획 첫페이지 */}
        <div>
          {/* 작성자 칸 */}
          <S.PlanWriterBox>
            <img src="/assets/icons/pinPoint.png" />
            <div>writer</div>
          </S.PlanWriterBox>
          {/* 지역 */}
          <S.PlanBox>
            <img src="/assets/icons/pinPoint.png" />
            <S.PlanContent>
              <S.PlanContentTitle>지역</S.PlanContentTitle>
              <div>일본 - 도쿄</div>
            </S.PlanContent>
          </S.PlanBox>
          {/*예산 */}
          <S.PlanBox>
            <img src="/assets/icons/dolor.png" />
            <S.PlanContent>
              <S.PlanContentTitle>예산</S.PlanContentTitle>
              <div>120,000원</div>
            </S.PlanContent>
          </S.PlanBox>
          {/*기간 */}
          <S.PlanBox>
            <img src="/assets/icons/calendar.png" />
            <S.PlanHorizontalContent>
              <div>여행 기간</div>
              {/* 버튼 클릭 시 달력 모달 생성 */}
              <S.PlanHorizontalRightButton onClick={handleOpenCalendar}>
                <img src="/assets/icons/arrow_to_right.png" />
              </S.PlanHorizontalRightButton>
            </S.PlanHorizontalContent>
          </S.PlanBox>
          {/*초대 */}
          <S.PlanBox>
            <img src="/assets/icons/plus.png" />
            <S.PlanHorizontalContent>
              <div>초대하기</div>
              <S.PlanInvitationBox>
                {/* 초대된 사람들 노출 및 삭제 구간 */}
                {/* <InvitationCard
                  src={'/assets/paris.jpg'}
                  onClick={() => handleDeleteClick(1)}
                /> */}
                {invitedPeople.map((person, index) => (
                  <InvitationCard
                    key={index}
                    src={person.src}
                    onClick={() => handleDeleteClick(index)}
                  />
                ))}
              </S.PlanInvitationBox>
              <div>
                <img
                  src="/assets/icons/blackBackgroundPlus.png"
                  onClick={handleOpenInvitation}
                />
              </div>
            </S.PlanHorizontalContent>
          </S.PlanBox>
        </div>
      </S.PlanSecondSection>
      <S.PlanBottomSection>
        {/* 다음 버튼 */}
        <S.PlanNextButton onClick={handleNextClick}>다음</S.PlanNextButton>
      </S.PlanBottomSection>
      {/* 달력 모달 처리 */}
      <Calendar isOpen={isModalOpen} onClose={closeModal} />
      {/* 초대하기 모달 처리 */}
      <Invitation
        isOpen={isInvitationModalOpen}
        onClose={closeInvitationModal}
        onInvite={handleInvite} // 초대하기 버튼 클릭 시 호출될 함수 전달
      />
    </>
  );
};

export default PlanCreate;
