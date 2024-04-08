import React from 'react';
import styled from 'styled-components';

interface ToggleSwitchProps {
  isChecked: boolean;
  onToggle: () => void;
}

const ToggleButton: React.FC<ToggleSwitchProps> = ({ isChecked, onToggle }) => (
  <ToggleWrapper onClick={onToggle}>
    <ToggleInput type="checkbox" checked={isChecked} readOnly />
    <Slider $isChecked={isChecked} />
  </ToggleWrapper>
);

export default ToggleButton;

const ToggleWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin: 10px 0;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span<{ $isChecked: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.$isChecked ? '#3e3e3e' : '#ccc')};
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: ${(props) => (props.$isChecked ? '28px' : '5px')};
    bottom: 4px;
    background-color: white;
    transition: left 0.4s;
    border-radius: 50%;
  }
`;
