// import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Maintitle = () => {
  return (
    <>
      <Container>
        <TitleWrapper>
          <Title>✈️이 여행 어떠행?</Title>
        </TitleWrapper>
        <DetailLink to="/travelReview">자세히보기</DetailLink>
      </Container>
    </>
  );
};

export default Maintitle;

const Container = styled.div`
  display: flex;
  width: 1100px;
  margin: 0 auto;
  margin-top: 30px;
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

const DetailLink = styled(Link)`
  display: block;
  text-align: center;
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
`;
