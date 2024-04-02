import { useState } from 'react';
import styled, { css } from 'styled-components';
import { IoMdHeart } from 'react-icons/io';
import { CiBookmark } from 'react-icons/ci';

interface ButtonProps {
  active: boolean;
}

type ActiveButtonState = 'like' | 'scrap' | null;

const ReviewDetailList = () => {
  const [activeButton, setActiveButton] = useState<ActiveButtonState>(null);

  const toggleActiveButton = (buttonType: ActiveButtonState) => {
    setActiveButton((prevState) =>
      prevState === buttonType ? null : buttonType,
    );
  };

  return (
    <Container>
      <ReviewHeader>
        <LocationTag>[일본 | 도쿄] 즐거운 여행이었습니다</LocationTag>
      </ReviewHeader>
      <DateRange>2024.09.09 - 10.11</DateRange>
      <ButtonSection>
        <LikeButton
          active={activeButton === 'like'}
          onClick={() => toggleActiveButton('like')}
        >
          <IoMdHeart size="18" /> 좋아요
        </LikeButton>
        <ScrapButton
          active={activeButton === 'scrap'}
          onClick={() => toggleActiveButton('scrap')}
        >
          <CiBookmark size="18" /> 스크랩하기
        </ScrapButton>
      </ButtonSection>
    </Container>
  );
};

export default ReviewDetailList;

const Container = styled.div`
  width: 870px;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 8px;
  margin-bottom: 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const LocationTag = styled.span`
  padding: 4px 6px;
  font-size: 18px;
  font-weight: 600;
`;

const DateRange = styled.div`
  font-size: 15px;
  color: #666;
  margin-bottom: 16px;
  margin-left: 6px;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const buttonStyles = css<ButtonProps>`
  width: 420px;
  height: 45px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  font-weight: 600;
  border: 1px solid #ccc;
  background-color: #fff;
  transition:
    background-color 0.3s,
    color 0.3s;

  ${({ active }) =>
    active &&
    css`
      background-color: #000;
      color: #fff;
      border: 1px solid #000;
    `}
`;

const LikeButton = styled.button<ButtonProps>`
  ${buttonStyles}
`;

const ScrapButton = styled.button<ButtonProps>`
  ${buttonStyles}
`;
