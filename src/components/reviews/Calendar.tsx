import React, { useState, forwardRef, ButtonHTMLAttributes } from 'react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TfiArrowCircleRight } from 'react-icons/tfi';

// 달력을 표시할 버튼 컴포넌트
const CalendarButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ onClick }, ref) => (
  <button onClick={onClick} ref={ref}>
    <TfiArrowCircleRight size="35px" color="lightGray" />
  </button>
));

// CalendarButton 컴포넌트를 위한 타입 정의
CalendarButton.displayName = 'CalendarButton';

const Calendar = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <DatePicker
      selected={startDate}
      onChange={(date: Date | null) => setStartDate(date)}
      customInput={<CalendarButton />}
    />
  );
};

export default Calendar;
