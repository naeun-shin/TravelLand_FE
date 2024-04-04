import * as S from '@/components/commons/inputs/Input.style';
import KaKaoMap from '@/components/maps/KaKaoMap';
import { useState } from 'react';

export interface InputProps {
  name?: string;
  id?: string;
  type: 'text' | 'email' | 'password';
  onChange?: (e: any) => void;
  placeholder?: string;
  border?: string;
  value?: string;
  width?: number;
  height?: number;
}

export interface ListInputProps {
  value?: string;
  onChange?: (e: any) => void;
}

export interface propsType {
  searchKeyword: string;
}

export const ModernInput = (props: InputProps) => {
  return (
    <>
      <S.modernInput
        id={props.id}
        name={props.name}
        type={props.type ? props.type : 'text'}
        onChange={props.onChange}
        placeholder={props.placeholder}
        border={props.border}
        value={props.value}
        width={props.width}
        height={props.height}
      />
    </>
  );
};

export const PlanListInput: React.FC<ListInputProps> = ({ value }) => {
  const [departure, setDeparture] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [schedule, setSchedule] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDepartureChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDeparture(event.target.value);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };

  const handleScheduleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSchedule(event.target.value);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleOpenMapClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* 리스트 형 인풋 컨테이너 */}
      <S.PlanListInputContainer>
        {/* 출발지 영역 */}
        <S.ListInputbox>
          <div>출발지</div>
          <input
            placeholder="서울 중구"
            value={departure}
            onChange={handleDepartureChange}
          />
        </S.ListInputbox>
        {/* 시간 영역 */}
        <S.ListInputbox>
          <div>시간</div>
          <input placeholder="09:30" value={time} onChange={handleTimeChange} />
        </S.ListInputbox>
        {/* 일정 영역 */}
        <S.ListInputbox>
          <div>일정 *</div>
          <input
            placeholder="가이드 만나기"
            value={schedule}
            onChange={handleScheduleChange}
          />
        </S.ListInputbox>
        {/* 위치 영역 */}
        <S.ListInputbox>
          <div>
            위치
            <img
              src="/assets/icons/pin.png"
              alt="pin"
              onClick={handleOpenMapClick}
            />
            <p>아이콘을 클릭하면 지도가 보입니다.</p>
          </div>

          <input
            placeholder="서울특별시 중구 을지로 201"
            value={location}
            onChange={handleLocationChange}
          />
        </S.ListInputbox>
        
        {/* 일정 순서 영역 */}
        <S.ListInputboxWithOutBorder>
          <h4>일정 순서 *</h4>
          <S.ListPagenation>
            {/* pagination */}
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </S.ListPagenation>
        </S.ListInputboxWithOutBorder>
      </S.PlanListInputContainer>
      <KaKaoMap isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};
