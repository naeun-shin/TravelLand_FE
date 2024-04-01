import React from 'react';
import styled from 'styled-components';
// import Button from '../buttons/Button';

interface CardProps {
  title?: string;
  category?: string;
  price?: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ imageUrl }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <img src={imageUrl} alt="이미지" />
      </ImageContainer>
      <TextContainer>
        <button>카테고리</button>
        {/* <h3>{title}</h3> */}
        <p>일본 후쿠오카</p>
        {/* <p>{price}</p> */}
        <p>199,000원</p>
      </TextContainer>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  width: 370px;
  height: 470px;
  border: 1px solid #ddd;
  padding: 5px;
  border-radius: 8px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
`;

const ImageContainer = styled.div`
  height: 320px;
  border: 1px solid #000;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
`;

const TextContainer = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
`;
