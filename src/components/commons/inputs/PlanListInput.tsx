import KaKaoMap from '@/components/maps/KaKaoMap';
import { useState } from 'react';
import { ModernInput } from './Input';
import * as S from './Input.style';
import * as PS from '@components/plans/Plan.style';
import Button from '../buttons/Button';
import { useUnitPlansStore } from '@/store/useUnitPlanStore';

export interface ListInputProps {
  value?: string;
  onChange?: (e: any) => void;
  unitLocation?: string | undefined; // 추가: unitLocation 상태
  setUnitLocation?: (location: string) => void; // 추가: unitLocation 상태를 업데이트하는 함수
  place_name?: string;
}

export interface PlanInput {
  departure: string;
  time: string;
  schedule: string;
  location: string;
}

export const PlanListInput: React.FC<ListInputProps> = () => {
  const [planInputs, setPlanInputs] = useState<PlanInput[]>([
    { departure: '', time: '', schedule: '', location: '' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLocationIndex, setSelectedLocationIndex] = useState<number>(0);

  const handleInputChange = (
    index: number,
    field: keyof PlanInput,
    value: string,
  ) => {
    const newPlanInputs = [...planInputs];
    newPlanInputs[index][field] = value;
    setPlanInputs(newPlanInputs);
  };

  // KaKaoMap 컴포넌트에서 위치가 선택되었을 때 호출될 함수
  // 위치 선택 핸들러 수정
  const handleSelectPlace = (selectedLocation: any, index: number) => {
    // const locationName = selectedLocation.place_name;
    handleInputChange(index, 'location', selectedLocation);
    setIsModalOpen(false);
  };

  const handleOpenMapClick = (index: number) => {
    setSelectedLocationIndex(index);
    setIsModalOpen(true);
  };
  // 전역 Zustand 상태에 추가하는 함수
  const addPlanToGlobalState = (plan: PlanInput) => {
    useUnitPlansStore.getState().addUnitPlan(plan);
  };

  // 추가하기 버튼
  const handlePlanAdd = () => {
    // 사용자가 입력한 마지막 unitPlan만 전역 상태에 추가
    const newUnitPlan = { departure: '', time: '', schedule: '', location: '' }; // 새로운 빈 unitPlan

    if (planInputs.length > 0) {
      const lastInput = planInputs[planInputs.length - 1];
      addPlanToGlobalState(lastInput); // 마지막으로 입력된 unitPlan을 전역 상태에 추가
    }

    // 새로운 빈 unitPlan을 로컬 상태에 추가하여 새 입력 폼을 생성
    setPlanInputs([...planInputs, newUnitPlan]);
    console.log(newUnitPlan);
  };

  return (
    <>
      {planInputs.map((input, index) => (
        <S.PlanListInputContainer key={index}>
          {/* 출발지 영역 */}
          <S.ListInputbox>
            <div>출발</div>
            <input
              placeholder="서울시 강남구"
              value={input.departure}
              onChange={(e) =>
                handleInputChange(index, 'departure', e.target.value)
              }
            />
          </S.ListInputbox>
          {/* 시간 영역 */}
          <S.ListInputbox>
            <div>시간</div>
            <input
              placeholder="09:30"
              value={input.time}
              onChange={(e) => handleInputChange(index, 'time', e.target.value)}
            />
          </S.ListInputbox>
          {/* 일정 영역 */}
          <S.ListInputbox>
            <div>일정 *</div>
            <ModernInput
              placeholder="가이드 만나기"
              value={input.schedule}
              onChange={(e) =>
                handleInputChange(index, 'schedule', e.target.value)
              }
              type="text"
              height={50}
            />
          </S.ListInputbox>
          {/* 위치 영역 */}
          <S.ListInputbox>
            <div>
              위치
              <img
                src="/assets/icons/pin.png"
                alt="pin"
                onClick={() => handleOpenMapClick(index)}
              />
              <p>아이콘을 클릭하면 지도가 보입니다.</p>
            </div>
            <input
              placeholder="서울특별시 중구 을지로 201"
              value={input.location.place_name}
              readOnly
            />
          </S.ListInputbox>
        </S.PlanListInputContainer>
      ))}
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
          onSelect={(location) =>
            handleSelectPlace(location, selectedLocationIndex)
          }
          searchKeyword=""
        />
      )}
    </>
  );
};
