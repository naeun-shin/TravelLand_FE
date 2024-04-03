import React, { useState } from 'react';
import * as S from '../Plan.style';
import Map from '@/components/maps/Map';

interface ButtonProps {
  active: boolean;
}

const PlanDetail: React.FC<ButtonProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState('서울 강서구 우장산로 92'); // 예시 주소

  const dateArray: string[] = ['1일차', '2일차', '3일차']; // 표시할 일자 목록
  const [currentStep, setCurrentStep] = useState<number>(0); // 현재 스텝 인덱스

  const startDate: Date = (() => {
    const today = new Date();
    const start = new Date(today);
    start.setDate(today.getDate() + currentStep);
    return start;
  })();

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const handleOpenMapClick = () => {
    console.log('오픈');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {/* 여행 일자 박스 영역 */}
      <S.PlanDetailDateBox>
        {dateArray.map((_, index) => {
          const date = new Date(startDate); // 시작일을 복사
          date.setDate(startDate.getDate() + index); // 해당 날짜로 설정
          return (
            <S.PlanDetailDateButton
              key={index}
              onClick={() => handleStepClick(index)}
              active={index === currentStep}
            >
              {`${index + 1}일차 `}
            </S.PlanDetailDateButton>
          );
        })}
      </S.PlanDetailDateBox>
      {/* 스태퍼 박스 영역 */}
      <S.PlanDetailContentBox>
        {/* 스테퍼 헤더 영역 */}
        <S.PlanDetailContentHeader>
          <S.DetailHeaderContent>
            {dateArray[currentStep]}
          </S.DetailHeaderContent>
          <S.DetailHeaderSubContent>
            <S.DetailHeaderSubDate>
              {`${startDate.getFullYear()}년 |  ${startDate.getMonth() + 1}월  | ${startDate.getDate()}일`}
            </S.DetailHeaderSubDate>
            |
            <S.DetaiHeaderSubDestination>
              <div>출발지</div>
              인사동 | 명동 | <div>도착지</div>
              서울타워{' '}
            </S.DetaiHeaderSubDestination>
          </S.DetailHeaderSubContent>
        </S.PlanDetailContentHeader>
        {/* 스테퍼 내부 요소 영역 */}
        <S.DetailContentSection>
          {/* 반복 영역 */}
          <S.DetailContentBox>
            {/* 순서 */}
            <S.DetailPlanNumber>1</S.DetailPlanNumber>
            {/* 내부 컨텐츠 */}
            <S.DetailPlanContent>
              <S.DetailPlanContentCity>인천</S.DetailPlanContentCity>
              <S.DetailContentItem>
                <div>
                  <div>
                    09:30 인천국제공항 제1터미널 3층 A카운터 창측 가이드 미팅
                  </div>
                  <div>12:10 인천국제공항 출발</div>
                  <div>
                    <img src="/assets/icons/pin.png" alt="pin" /> {address}
                  </div>
                </div>
                <S.DetailButtonDiv onClick={handleOpenMapClick}>
                  <img src="/assets/icons/pin.png" alt="pin" />
                  <p>{address} </p>
                </S.DetailButtonDiv>
              </S.DetailContentItem>
            </S.DetailPlanContent>
          </S.DetailContentBox>
          {/* 반복 영역 끝 */}
        </S.DetailContentSection>
      </S.PlanDetailContentBox>
      {/*  지도 모달 */}
      <Map isOpen={isModalOpen} onClose={closeModal} address={address} />
    </>
  );
};

export default PlanDetail;
