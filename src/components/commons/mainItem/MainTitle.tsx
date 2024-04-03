// import React from 'react';
import styled from 'styled-components';
import Button from '../buttons/Button';
import { Link } from 'react-router-dom';

const Maintitle = () => {
  return (
    <>
      <Container>
        <TitleWrapper>
          <Title>✈️이 여행 어떠행?</Title>
        </TitleWrapper>
        <ButtonsWrapper>
          <Button text="가족 여행"></Button>
          <Button text="커플 여행"></Button>
        </ButtonsWrapper>
        <DetailLink to="/travelReview">자세히보기</DetailLink>
      </Container>
    </>
  );
};

export default Maintitle;

const Container = styled.div`
  display: flex;
  width: 800px;
  margin: 0 auto;
  margin-top: 40px;
  justify-content: space-between;
  align-items: center;
`;

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 5px;
  margin-right: 120px;
`;

const DetailLink = styled(Link)`
  display: block;
  text-align: center;
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
`;
