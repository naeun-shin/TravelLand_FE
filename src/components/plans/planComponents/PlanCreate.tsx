import Calendar from '@/components/commons/calendar/Calendar';
import ToggleButton from '@/components/commons/buttons/ToggleButton';
import * as S from '@/components/plans/Plan.style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PlanCreate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  return (
    <>
      <S.PlanFirstSection>
        <h3>[일본 | 도쿄] 일본 여행</h3>
        <div>
          <ToggleButton />
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
              <div>
                <div>{/* 초대된 사람들 노출 및 취소처리 구간 */}</div>
                <div>
                  <img src="/assets/icons/blackBackgroundPlus.png" />
                </div>
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
    </>
  );
};

export default PlanCreate;
