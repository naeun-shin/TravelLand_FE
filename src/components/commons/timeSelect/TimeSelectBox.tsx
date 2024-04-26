import React, { useState } from 'react';

// Define TypeScript interface for component props
interface TimeSelectBoxProps {
  onHourChange: (hour: string) => void;
  onMinuteChange: (minute: string) => void;
  hourValue: string;
  minuteValue: string;
}

// Function to generate hour options for the 24-hour format
const generateHourOptions = (): string[] => {
  return Array.from({ length: 24 }, (_, index) =>
    index.toString().padStart(2, '0'),
  );
};

// Function to generate minute options from 00 to 59
const generateMinuteOptions = (): string[] => {
  return Array.from({ length: 60 }, (_, index) =>
    index.toString().padStart(2, '0'),
  );
};

export const TimeSelectBox: React.FC<TimeSelectBoxProps> = ({
  onHourChange,
  onMinuteChange,
  hourValue,
  minuteValue,
}) => {
  const [hourDropdownOpen, setHourDropdownOpen] = useState(false);
  const [minuteDropdownOpen, setMinuteDropdownOpen] = useState(false);

  const handleHourClick = (hour: string, event: React.MouseEvent) => {
    event.stopPropagation(); // 이벤트 버블링을 막음
    onHourChange(hour);
    setHourDropdownOpen(false);
  };

  const handleMinuteClick = (minute: string, event: React.MouseEvent) => {
    event.stopPropagation(); // 이벤트 버블링을 막음
    onMinuteChange(minute);
    setMinuteDropdownOpen(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        onClick={() => setHourDropdownOpen(!hourDropdownOpen)}
        style={{
          width: '100px',
          border: '1px solid #ccc',
          marginBottom: '5px',
        }}
      >
        <span
          style={{
            fontWeight: '600',
            padding: '10px',
          }}
        >
          {hourValue || '00'}{' '}
        </span>
        {hourDropdownOpen && (
          <div
            style={{
              position: 'absolute',
              width: '100px',
              //   border: '1px solid #ccc',
              backgroundColor: 'white',
              maxHeight: '170px',
              overflowY: 'auto',
              overflowX: 'hidden',
              fontSize: '16px',
              fontWeight: 'lighter',
            }}
          >
            {generateHourOptions().map((hour) => (
              <div
                key={hour}
                onClick={(event) => handleHourClick(hour, event)}
                style={{
                  padding: '10px',
                  cursor: 'pointer',
                }}
              >
                {hour}
              </div>
            ))}
          </div>
        )}
      </div>
      <span>:</span>
      <div
        onClick={() => setMinuteDropdownOpen(!minuteDropdownOpen)}
        style={{
          width: '100px',
          border: '1px solid #ccc',
          marginBottom: '5px',
        }}
      >
        <span
          style={{
            fontWeight: '600',
            padding: '10px',
          }}
        >
          {minuteValue || '00'}
        </span>
        {minuteDropdownOpen && (
          <div
            style={{
              position: 'absolute',
              width: '100px',
              border: '1px solid #ccc',
              backgroundColor: 'white',
              maxHeight: '170px',
              overflowY: 'auto',
              overflowX: 'hidden',
              fontSize: '16px',
              fontWeight: '600',
            }}
          >
            {generateMinuteOptions().map((minute) => (
              <div
                key={minute}
                onClick={(event) => handleMinuteClick(minute, event)}
                style={{
                  padding: '10px',
                  cursor: 'pointer',
                }}
              >
                {minute}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
