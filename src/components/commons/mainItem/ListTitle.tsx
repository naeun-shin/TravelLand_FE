import React from 'react';
import styled from 'styled-components';
import Button from '../buttons/Button';

interface ListTitleProps {
  //   title: string;
}

const ListTitle: React.FC<ListTitleProps> = () => {
  return (
    <TitleContainer>
      <TitleText>
        <div>
          지금 가장
          <br />
          🔥HOT한 방문지 10
        </div>
      </TitleText>
      <Subtitle>지난 일주일 간 평소보다 더 많이 저장된 관광지</Subtitle>
      <ButtonContainer>
        <Button text="해외" />
        <Button text="국내" />
      </ButtonContainer>
    </TitleContainer>
  );
};

export default ListTitle;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const TitleText = styled.h1`
  font-weight: bold;
  font-size: 28px;
  /* margin: 0 0 10px 0; */
  white-space: pre-wrap;
  text-align: center;
  margin: 60px 0 20px;
`;
const Subtitle = styled.p`
  font-size: 18px;
  color: #6d6d6d;
  font-weight: 600;
  margin-bottom: 30px;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
