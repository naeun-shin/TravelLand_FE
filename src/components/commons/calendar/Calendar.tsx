import React, { useState } from 'react';
import Modal from '../modals/Modal';
import Button from '../buttons/Button';
import * as C from './Calendar.style';

interface CalendarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Calendar: React.FC<CalendarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <C.CalendarModalBox>
          <C.CalendarHeader>
            {/* 달력 구간 */}
            <img src="/assets/icons/calendar.png" />
            <div>여행 기간</div>
          </C.CalendarHeader>
          {/* 달력을 표시하고 범위를 선택할 수 있도록 합니다. */}
        </C.CalendarModalBox>
        <Button text="닫기" onClick={onClose} />
      </Modal>
    </>
  );
};

export default Calendar;
