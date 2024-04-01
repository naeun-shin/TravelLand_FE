import * as S from './Button.style';

export interface ButtonProps {
  width?: string;
  height?: string;
  color?: string;
  borderColor?: string;
  borderRadius?: string;
  text: string;
  backgroundColor: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

// 기본 버튼
export const Button: React.FC<ButtonProps> = ({
  width,
  height,
  color,
  borderColor,
  borderRadius,
  backgroundColor,
  text,
  onClick,
}) => {
  return (
    <>
      <S.StyledButton
        width={width}
        height={height}
        color={color}
        borderColor={borderColor}
        borderRadius={borderRadius}
        backgroundColor={backgroundColor}
        onClick={onClick}
      >
        {text}
      </S.StyledButton>
    </>
  );
};

// 라지 버튼
export const LargeButton: React.FC<{ text: string }> = ({ text }) => (
  <Button
    width="200px"
    height="60px"
    color="#fff"
    borderColor="#000"
    borderRadius="30px"
    backgroundColor="tranparent"
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
    backgroundColor="tranparent"
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
    backgroundColor="tranparent"
    text={text}
  />
);
