import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.min.css';

interface CalendarProps {
  isOpen: boolean;
  onClose: () => void;
}

const DateRange = () => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);

  const [startDate, endDate] = dateRange;
  return (
    <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(event) => {
        setDateRange(event);
      }}
      withPortal
    />
  );
};

//{ isOpen, onClose }
const Calendar: React.FC<CalendarProps> = () => {
  return (
    <>
      {/* <Modal isOpen={isOpen} onClose={onClose}>
        <C.CalendarModalBox>
          <C.CalendarHeader> */}
      {/* 달력 구간 */}
      <img src="/assets/icons/calendar.png" />
      <div>여행 기간</div>
      <DateRange />
      {/* </C.CalendarHeader> */}
      {/* 달력을 표시하고 범위를 선택할 수 있도록 합니다. */}
      {/* </C.CalendarModalBox>
        <Button text="닫기" onClick={onClose} />
      </Modal> */}
    </>
  );
};

export default Calendar;
