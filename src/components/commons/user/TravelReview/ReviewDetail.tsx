// import React from 'react';
import styled from 'styled-components';

const ReviewDetailHeader = () => {
  return (
    <Container>
      <Title>상세보기</Title>
      <UserSection>
        <UserImage src="" alt="사진" />
        <UserName>황*미님</UserName>
      </UserSection>
      <ImageBox>
        {/* 이미지 삽입 */}
        <SliderDots>
          {/* 슬라이더 도트 */}
          {[...Array(5)].map((_, i) => (
            <Dot key={i} />
          ))}
        </SliderDots>
      </ImageBox>
    </Container>
  );
};

export default ReviewDetailHeader;

const Container = styled.div`
  width: 900px;
  margin: 0 auto;
  padding: 16px 0;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const UserSection = styled.div`
  display: flex;
  margin: 30px 0;
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
  border: 1px solid #ddd;
`;

const UserName = styled.span`
  font-size: 16px;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 450px;
  background-color: #f0f0f0;
  position: relative;
  margin-bottom: 20px;
`;

const SliderDots = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

const Dot = styled.div`
  height: 15px;
  width: 15px;
  background-color: #bbb;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
`;
