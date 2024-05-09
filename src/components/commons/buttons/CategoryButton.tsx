import React from 'react';
import * as S from './Button.style';

interface CategoryButtonProps {
  width?: string;
  height?: string;
  title?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode;
  hoverColor?: string;
  selected?: boolean; // 선택된 상태를 처리하기 위해 추가
  cursor?: string;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  width,
  title,
  onClick,
  icon,
  hoverColor,
  selected = false,
  cursor,
}) => {
  return (
    <S.CategoryButtonStyle
      type="button"
      onClick={onClick}
      hoverColor={hoverColor}
      selected={selected}
      cursor={cursor}
    >
      {icon}
      {title}
      {width}
    </S.CategoryButtonStyle>
  );
};

export default CategoryButton;
