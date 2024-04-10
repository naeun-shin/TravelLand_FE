import KaKaoMap from '@/components/maps/KaKaoMap';
import { useState } from 'react';
import * as S from './Input.style';
import * as PS from '@components/plans/Plan.style';
import Button from '../buttons/Button';
import { useUnitPlansStore } from '@/store/useUnitPlanStore';

export interface ListInputProps {
  value?: string;
  onChange?: (e: any) => void;
  unitLocation?: string | undefined;
  setUnitLocation?: (location: string) => void;
  place_name?: string;
}

export const PlanListInput: React.FC<ListInputProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLocationIndex, setSelectedLocationIndex] = useState<number>(0);

  // Zustand 스토어에서 unitPlans를 구독합니다.
  const unitPlans = useUnitPlansStore((state) => state.unitPlans);
  const addUnitPlan = useUnitPlansStore((state) => state.addUnitPlan);
  const updateUnitPlan = useUnitPlansStore((state) => state.updateUnitPlan);

  const handleInputChange = (
    index: number,
    field: keyof PlanInput,
    value: string,
  ) => {
    updateUnitPlan(index, { ...unitPlans[index], [field]: value });
  };

  const handleSelectPlace = (location: any) => {
    updateUnitPlan(selectedLocationIndex, {
      ...unitPlans[selectedLocationIndex],
      location,
    });
    setIsModalOpen(false);
  };

  const handleOpenMapClick = (index: number) => {
    setSelectedLocationIndex(index);
    setIsModalOpen(true);
  };

  const handlePlanAdd = () => {
    addUnitPlan({ departure: '', time: '', schedule: '', location: '' });
  };

  return (
    <>
      {unitPlans.map((plan, index) => (
        <S.PlanListInputContainer key={index}>
          {/* 여기서 plan의 각 항목을 출력하고, 입력값 변경에 대한 핸들러를 연결합니다. */}
          {/* 출발지, 시간, 일정, 위치 영역 등 */}
        </S.PlanListInputContainer>
      ))}
      {/* 추가하기 버튼 */}
      <PS.ButtonBoxToCenter>
        <Button
          text="추가하기"
          width="150px"
          height="50px"
          color="white"
          borderColor="black"
          borderRadius="15px"
          fontWeight="bold"
          onClick={handlePlanAdd}
        />
      </PS.ButtonBoxToCenter>
      {isModalOpen && (
        <KaKaoMap
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSelect={handleSelectPlace}
          searchKeyword=""
        />
      )}
    </>
  );
};
