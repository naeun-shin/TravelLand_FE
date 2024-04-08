import React, { useEffect, useState } from 'react';
import * as S from '../Plan.style';
import Map from '@/components/maps/Map';
import { usePlanDetailQuery } from '@/hooks/useQuery';
import { useParams } from 'react-router-dom';

// 사용할 데이터 타입 정의 (예시입니다, 실제 데이터에 맞게 조정해야 합니다.)

interface ButtonProps {
  active: boolean;
}

interface DayPlan {
  dayPlanId: number;
  title: string;
  content: string;
  budget: number;
  date: string;
  unitPlans: UnitPlan[];
}

interface UnitPlan {
  unitPlanId: number;
  title: string;
  content: string;
  budget: number;
  location: string;
  time: string;
}

const PlanDetail: React.FC<ButtonProps> = () => {
  const { id } = useParams<{ id: String }>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [dayPlans, setDayPlans] = useState<DayPlan[]>([]);
  const [address, setAddress] = useState<string>(''); // 예시 주소를 빈 문자열로 초기화
  0; // 현재 스텝 인덱스를 0으로 초기화

  // `id`를 숫자로 변환하기 전에 유효성 검사 수행
  const planId = Number(id);
  const { data, isLoading, isError } = usePlanDetailQuery(planId);

  console.log('43 data >>>>>>> ', data);

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

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        {dayPlans.map((plan, index) => (
          <S.PlanDetailDateButton
            key={index}
            onClick={() => handleStepClick(index)}
            active={index === currentStep}
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
              <div>출발지</div>| <div>도착지</div>
            </S.DetaiHeaderSubDestination>
          </S.DetailHeaderSubContent>
        </S.PlanDetailContentHeader>
        <S.DetailContentSection>
          <S.DetailContentBox>
            {dayPlans[currentStep]?.unitPlans.map((unitPlan, index) => (
              <div key={index}>
                {/* 순서 */}
                <S.DetailPlanNumber>{index + 1}</S.DetailPlanNumber>

                <S.DetailPlanContent>
                  <S.DetailPlanContentCity>
                    {unitPlan.title}
                  </S.DetailPlanContentCity>
                  <S.DetailContentItem>
                    <div>
                      <div>{unitPlan.title}</div>
                      <div>{unitPlan.content}</div>
                      <div>{unitPlan.time.split('T')[0]}</div>
                      <img src="/assets/icons/pin.png" alt="pin" />
                      {unitPlan.location}
                    </div>
                    <div>
                      {/* 이 부분에 지도 버튼 추가 및 클릭 이벤트 핸들러 연결 */}
                      <S.DetailButtonDiv
                        onClick={() => handleOpenMapClick(unitPlan.location)}
                      >
                        <img src="/assets/icons/pin.png" alt="pin" />
                        {unitPlan.location}
                      </S.DetailButtonDiv>
                    </div>
                  </S.DetailContentItem>
                </S.DetailPlanContent>
              </div>
            ))}
          </S.DetailContentBox>
        </S.DetailContentSection>
      </S.PlanDetailContentBox>
      {/*  지도 모달 */}
      <Map isOpen={isModalOpen} onClose={closeModal} address={address} />
    </>
  );
};

export default PlanDetail;
