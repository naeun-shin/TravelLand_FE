import React from 'react';
import { StyledButton } from './Button.style';

interface ButtonProps {
  width?: string;
  height?: string;
  color?: string;
  borderColor?: string;
  borderRadius?: string;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
// 기본 버튼
const Button: React.FC<ButtonProps> = ({
  width = '100px',
  height = '40px',
  color = '#fff',
  borderColor = '#000',
  borderRadius = '30px',
  text,
  onClick,
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      color={color}
      borderColor={borderColor}
      borderRadius={borderRadius}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

export default Button;

// 라지 버튼
export const LargeButton: React.FC<{ text: string }> = ({ text }) => (
  <Button
    width="200px"
    height="60px"
    color="#fff"
    borderColor="#000"
    borderRadius="30px"
    text={text}
  />
);

// 미디움 버튼
export const MediumButton: React.FC<{ text: string }> = ({ text }) => (
  <Button
    width="150px"
    height="50px"
    color="#fff"
    borderColor="#000"
    borderRadius="30px"
    text={text}
  />
);

// 스몰 버튼
export const SmallButton: React.FC<{ text: string }> = ({ text }) => (
  <Button
    width="100px"
    height="40px"
    color="#fff"
    borderColor="#000"
    borderRadius="30px"
    text={text}
  />
);
