import React, { useEffect, useState } from 'react';
import * as S from '../Plan.style';
import Map from '@/components/maps/Map';
import { usePlanDetailQuery } from '@/hooks/useQuery';
import { useParams } from 'react-router-dom';
import Button from '@/components/commons/buttons/Button';
import { useDeleteMutation } from '@/hooks/useMutation';

// 사용할 데이터 타입 정의 (예시입니다, 실제 데이터에 맞게 조정해야 합니다.)

interface ButtonProps {
  active: boolean;
  text: string;
  onClick: () => void;
}

interface DayPlan {
  dayPlanId: number;
  title: string;
  content: string;
  budget: number;
  date: string;
  startAddress: string;
  endAddress: string;
  unitPlans: UnitPlan[];
}

interface UnitPlan {
  unitPlanId: number;
  title: string;
  content: string;
  budget: number;
  address: string;
  time: string;
}

const PlanDetail: React.FC<ButtonProps> = () => {
  const { id } = useParams<{ id: string }>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [dayPlans, setDayPlans] = useState<DayPlan[]>([]);
  const [address, setAddress] = useState<string>(''); // 예시 주소를 빈 문자열로 초기화
  0; // 현재 스텝 인덱스를 0으로 초기화

  // `id`를 숫자로 변환하기 전에 유효성 검사 수행
  const planId = Number(id);
  const { data, isLoading, isError } = usePlanDetailQuery(planId);

  const planDetails = data?.data;
  useEffect(() => {
    if (planDetails?.dayPlans) {
      setDayPlans(planDetails.dayPlans);
    }
  }, [planDetails]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  const selectedDayPlan = dayPlans[currentStep];

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const handleOpenMapClick = (selectedAddress: string) => {
    setAddress(selectedAddress); // 주소 상태 업데이트
    setIsModalOpen(true);
  };

  // 삭제 기능
  const deleteMutaion = useDeleteMutation();

  const handlePlanDelete = () => {
    deleteMutaion.mutate(planId);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // 초대하기 모달 오픈 핸들러
  const handleOpenInvitation = () => {
    // setIsInvitationModalOpen(true);
    alert('개발중입니다.');
  };

  // const closeInvitationModal = () => {
  //   setIsInvitationModalOpen(false);
  // };
  // // 초대하기 버튼 클릭 시 호출될 함수
  // const handleInvite = () => {
  //   // 초대 로직 구현
  //   // 초대된 사람을 invitedPeople 상태에 추가
  //   // 모달 닫기
  //   setIsInvitationModalOpen(false);
  // };

  // 초대한 사람 삭제
  // const handleDeleteClick = (index: number) => {
  //   // 초대된 사람들 배열에서 해당 인덱스의 항목을 제거
  //   const updatedInvitedPeople = [...invitedPeople];
  //   updatedInvitedPeople.splice(index, 1);
  //   setInvitedPeople(updatedInvitedPeople);
  // };

  if (isLoading) {
    // 데이터 로딩 중 UI
    return <div>Loading...</div>;
  }

  if (isError) {
    // 에러 발생 시 UI
    return <div>Error</div>;
  }

  return (
    <>
      {/* 여행 일자 박스 영역 */}
      <S.PlanDetailDateBox>
        {dayPlans.map((_plan, index) => (
          <S.PlanDetailDateButton
            key={index}
            onClick={() => handleStepClick(index)}
            // active={index === currentStep} // 조건부 스타일링 적용
            // text=""
          >
            {`${index + 1}일차`}
          </S.PlanDetailDateButton>
        ))}
      </S.PlanDetailDateBox>
      {/* 스태퍼 박스 영역 */}
      <S.PlanDetailContentBox>
        <S.PlanDetailContentHeader>
          <S.DetailHeaderContent>{`${currentStep + 1}일차`}</S.DetailHeaderContent>
          <S.DetailHeaderSubContent>
            <S.DetailHeaderSubDate>
              {formatDate(selectedDayPlan?.date)}
            </S.DetailHeaderSubDate>
            |
            <S.DetaiHeaderSubDestination>
              {selectedDayPlan?.startAddress} , {selectedDayPlan?.endAddress}
            </S.DetaiHeaderSubDestination>
          </S.DetailHeaderSubContent>
        </S.PlanDetailContentHeader>
        <S.DetailContentSection>
          <S.DetailContentBox>
            {dayPlans[currentStep]?.unitPlans.map((unitPlan, index) => (
              <div key={index}>
                {/* 순서 */}
                <S.DetailPlanNumber></S.DetailPlanNumber>
                <S.DetailPlanContent>
                  <S.DetailPlanContentCity>
                    {unitPlan.title}
                  </S.DetailPlanContentCity>
                  <S.DetailContentItem>
                    <div>
                      <div>{unitPlan.title}</div>
                      <div>{unitPlan.content}</div>
                      <div>{unitPlan.time}</div>
                      <img src="/assets/icons/pin.png" alt="pin" />
                      {unitPlan.address}
                    </div>
                    <div>
                      {/* 이 부분에 지도 버튼 추가 및 클릭 이벤트 핸들러 연결 */}
                      <S.DetailButtonDiv
                        onClick={() => handleOpenMapClick(unitPlan.address)}
                      >
                        <img src="/assets/icons/pin.png" alt="pin" />
                        {unitPlan.address}
                      </S.DetailButtonDiv>
                    </div>
                  </S.DetailContentItem>
                </S.DetailPlanContent>
              </div>
            ))}
          </S.DetailContentBox>
          <Button onClick={handlePlanDelete} text={'삭제하기'} />
        </S.DetailContentSection>
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
              {/* {invitedPeople.map((person, index) => (
                <InvitationCard
                  key={index}
                  src={person.src}
                  onClick={() => handleDeleteClick(index)}
                />
              ))} */}
            </S.PlanInvitationBox>
            <div>
              <img
                src="/assets/icons/blackBackgroundPlus.png"
                onClick={handleOpenInvitation}
              />
            </div>
          </S.PlanHorizontalContent>
        </S.PlanBox>
      </S.PlanDetailContentBox>
      {/*  지도 모달 */}
      <Map isOpen={isModalOpen} onClose={closeModal} address={address} />
      {/* 초대하기 모달 처리 */}
      {/* <Invitation
        isOpen={isInvitationModalOpen}
        onClose={closeInvitationModal}
        onInvite={handleInvite} // 초대하기 버튼 클릭 시 호출될 함수 전달
      /> */}
    </>
  );
};

export default PlanDetail;
