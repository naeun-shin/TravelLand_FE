import React from 'react';
import * as S from './Button.style';
import { IoLocationSharp } from 'react-icons/io5'; // 아이콘을 사용하기 위해 import합니다.

interface CategoryButtonProps {
  title: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  title,
  onClick,
  icon,
}) => {
  return (
    <S.CatagoryBtn onClick={onClick}>
      {icon}
      {title}
    </S.CatagoryBtn>
  );
};

export default CategoryButton;
