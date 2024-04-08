import ToggleButton from '@/components/commons/buttons/ToggleButton';
import * as S from '@/components/plans/Plan.style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Invitation } from '@/components/commons/invitation/Invitation';
import InvitationCard from '@/components/commons/cards/InvitationCard';
import 'react-datepicker/dist/react-datepicker.min.css';
// import * as DS from '@components/plans/DatePicker.styles';

import DatePicker from 'react-datepicker';
import { ModernInput } from '@/components/commons/inputs/Input';
import { usePlanStore } from '@/store/usePlanStore';
interface Person {
  src: string;
}

const PlanCreate = () => {
  const navigate = useNavigate();
  const [isInvitationModalOpen, setIsInvitationModalOpen] = useState(false);
  const [invitedPeople, setInvitedPeople] = useState<Person[]>([]);
  // 초대된 사람들 상태 추가
  // 로컬 상태 훅 대신 Zustand 스토어 사용
  const {
    isPublic,
    dateRange,
    invitePeople,
    setIsPublic,
    setDateRange,
    addInvitePerson,
    removeInvitedPerson,
  } = usePlanStore();

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // 커스텀 입력 컴포넌트 정의
  // 이 컴포넌트는 달력 포탈을 열기 위한 버튼을 렌더링합니다.
  const CalendarButton = ({ onClick }) => (
    <img
      src="/assets/icons/arrow_to_right.png"
      onClick={onClick}
      alt="Calendar"
      style={{ cursor: 'pointer' }}
    />
  );

  // 날짜 범위 변경 핸들러
  const handleDateRangeChange = (update: [Date, Date]) => {
    setDateRange(update);
    // 선택 범위가 완료되면 달력을 자동으로 닫도록 설정할 수 있음
    if (update[0] && update[1]) {
      setIsCalendarOpen(false);
    }
  };

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  // 여행 기간 텍스트를 표시하기 위한 함수
  const displayDateRange = () => {
    const start = dateRange[0] ? dateRange[0].toLocaleDateString() : '';
    const end = dateRange[1] ? dateRange[1].toLocaleDateString() : '';

    return `${start} - ${end}`;
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

  // 다음 페이지 넘어가기
  const handleNextClick = () => {
    // dateRange 값 확인
    console.log('선택된 날짜 범위:', dateRange);
    if (dateRange[0] && dateRange[1]) {
      // 날짜 범위가 모두 선택되었다면, 처리 로직 추가
      console.log('시작 날짜:', dateRange[0].toLocaleDateString());
      console.log('종료 날짜:', dateRange[1].toLocaleDateString());
    }

    navigate('/planCreate/2', {
      state: { startDate: dateRange[0], endDate: dateRange[1] },
    });
  };

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
            <div></div>
          </S.PlanWriterBox>
          {/* 지역 */}
          <S.PlanBox>
            <img src="/assets/icons/pinPoint.png" />
            <S.PlanContent>
              <S.PlanContentTitle>지역</S.PlanContentTitle>
              <ModernInput
                type="text"
                placeholder="부산"
                width={100}
                height={30}
                border="transparent"
              />
            </S.PlanContent>
          </S.PlanBox>
          {/*예산 */}
          <S.PlanBox>
            <img src="/assets/icons/dolor.png" />
            <S.PlanContent>
              <S.PlanContentTitle>예산</S.PlanContentTitle>
              <ModernInput
                type="text"
                placeholder="100000"
                width={100}
                height={30}
                border="transparent"
              />
            </S.PlanContent>
          </S.PlanBox>
          {/*기간 선택*/}
          <S.PlanBox>
            <img src="/assets/icons/calendar.png" />
            <S.PlanHorizontalContent>
              <S.PlanContentTitle>기간</S.PlanContentTitle>
              <div>{displayDateRange()}</div>
              <DatePicker
                selectsRange={true}
                startDate={dateRange[0]}
                endDate={dateRange[1]}
                onChange={handleDateRangeChange}
                customInput={<CalendarButton onClick={undefined} />}
                withPortal
                open={isCalendarOpen}
                shouldCloseOnSelect={true}
                onCalendarOpen={() => setIsCalendarOpen(true)}
                onCalendarClose={() => setIsCalendarOpen(false)} // 달력이 닫힐 때 상태를 업데이트하는 콜백 추가
              />
            </S.PlanHorizontalContent>
          </S.PlanBox>
        </div>
      </S.PlanSecondSection>
      <S.PlanBottomSection>
        {/* 다음 버튼 */}
        <S.PlanNextButton onClick={handleNextClick}>다음</S.PlanNextButton>
      </S.PlanBottomSection>
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
