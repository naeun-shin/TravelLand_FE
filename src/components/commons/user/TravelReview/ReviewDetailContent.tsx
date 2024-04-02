// import React from 'react';
import styled from 'styled-components';

const ReviewContent = () => {
  return (
    <>
      <Container>
        <ContentBox>
          <ContentDiv>
            오사카는 호텔이 다 입니다.너무 좋은 호텔 어렵게 구했습니다. 시내
            호텔이라 쇼핑이 자유롭습니다. 오사카에서 보기드문 천연온천이
            가능합니다. 좁은 방 아니고 정규 트윈룸 입니다.호텔에서는 야식라면과
            음료, 주류도 무제한입니다.여러 단서 넣지않은 패키지 입니다. 팁
            3천엔, 자유식 2천엔 총 5만원 상당의 혜택 포함 되었습니다.
            자유여행으로 가기 힘든롯코산 포함,여행의 꽃, 베테랑 가이드 선정은
            기본이죠.일본 여행 전문가가 자신있게 소개합니다.
          </ContentDiv>
        </ContentBox>
        <CommentsList>
          <Comment>
            <UserAvatar />
            <div>
              <CommentName>신*은님</CommentName>
              <CommentText>어떤 여행이었나요?? 😊</CommentText>
            </div>
          </Comment>
          <Comment>
            <UserAvatar />
            <div>
              <CommentName>김*용님</CommentName>
              <CommentText>날씨가 너무 좋네요~😊</CommentText>
            </div>
          </Comment>
          <Comment>
            <UserAvatar />
            <div>
              <CommentName>유*찬님</CommentName>
              <CommentText>저도 가고 싶어요!!😊</CommentText>
            </div>
          </Comment>
          <Comment>
            <UserAvatar />
            <div>
              <CommentName>김*원님</CommentName>
              <CommentText>좋은 정보 감사합니다~😊</CommentText>
            </div>
          </Comment>
        </CommentsList>
      </Container>
      <ViewMore>댓글 더보기</ViewMore>
    </>
  );
};

export default ReviewContent;

const Container = styled.div`
  width: 880px;
  margin: 0 auto;
  padding: 16px;
  border-radius: 8px;
  background: #fff;
`;

const ContentBox = styled.div`
  height: 300px;
`;

const ContentDiv = styled.p`
  width: 400px;
  font-size: 16px;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 1em;
  white-space: pre-line;
`;

const CommentsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Comment = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-top: 1px solid #bbb;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #ddd;
  margin-right: 8px;
`;

const CommentName = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const CommentText = styled.div`
  padding-top: 5px;
  color: #4a4a4a;
`;

const ViewMore = styled.div`
  text-align: center;
  margin-top: 10px;
  width: 100%;
  padding: 8px 0;
  cursor: pointer;
  padding-bottom: 40px;
  border-bottom: 4px solid #ddd;
`;
