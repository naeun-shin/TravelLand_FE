import React from 'react';
import * as S from './Button.style';

interface CategoryButtonProps {
  width?: string;
  heigth?: string;
  title?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  width,
  heigth,
  title,
  onClick,
  icon,
}) => {
  return (
    <S.CatagoryBtn onClick={onClick}>
      {icon}
      {title}
      {width}
    </S.CatagoryBtn>
  );
};

export default CategoryButton;
