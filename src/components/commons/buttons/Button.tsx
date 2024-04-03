import React from 'react';
import * as S from './Button.style';

export interface ButtonProps {
  width?: string;
  height?: string;
  color?: string;
  borderColor?: string;
  borderRadius?: string;
  fontSize?: any;
  fontWeight?: any;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

// 기본 버튼
const Button: React.FC<ButtonProps> = ({
  width = '100px',
  height = '40px',
  color = '#fff',
  borderColor = '#000',
  borderRadius,
  text,
  onClick,
  fontSize,
  fontWeight,
}) => {
  return (
    <S.StyledButton
      width={width}
      height={height}
      color={color}
      borderColor={borderColor}
      borderRadius={borderRadius}
      onClick={onClick}
      style={{ fontSize, fontWeight }}
    >
      {text}
    </S.StyledButton>
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
    borderRadius="25px"
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

// main Tab버튼
export const TabButton: React.FC<ButtonProps> = ({ text, onClick }) => (
  <Button
    width="120px"
    height="40px"
    color="#fff"
    borderColor="#000"
    borderRadius="10px"
    text={text}
    onClick={onClick}
    fontWeight="bold"
  />
);
