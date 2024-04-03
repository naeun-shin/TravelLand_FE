import React from 'react';
import styled from 'styled-components';

interface Review {
  id: number;
  user: string;
  title: string;
  content: string;
}

// 임시 데이터
const reviews: Review[] = [
  {
    id: 1,
    user: '김*하님',
    title: '[일본 | 도쿄]',
    content: '즐거운 여행이었습니다',
  },
  {
    id: 1,
    user: '김*하님',
    title: '[일본 | 도쿄]',
    content: '즐거운 여행이었습니다',
  },
  {
    id: 1,
    user: '김*하님',
    title: '[일본 | 도쿄]',
    content: '즐거운 여행이었습니다',
  },
  {
    id: 1,
    user: '김*하님',
    title: '[일본 | 도쿄]',
    content: '즐거운 여행이었습니다',
  },
  {
    id: 1,
    user: '김*하님',
    title: '[일본 | 도쿄]',
    content: '즐거운 여행이었습니다',
  },
];

const ReviewCard: React.FC<Review> = ({ user, title, content }) => {
  return (
    <ReviewContainer>
      <UserInfo>
        <UserImage />
        <UserName>{user}</UserName>
      </UserInfo>
      <CardContainer>
        <ImageContainer />
      </CardContainer>
      <ReviewInfo>
        <CardTitle>{title}</CardTitle>
        <CardContent>{content}</CardContent>
      </ReviewInfo>
    </ReviewContainer>
  );
};

const ReviewList: React.FC = () => {
  return (
    <ListContainer>
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          id={review.id}
          user={review.user}
          title={review.title}
          content={review.content}
        />
      ))}
    </ListContainer>
  );
};

export default ReviewList;

const ListContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  padding: 20px 0;
`;

const ReviewContainer = styled.div`
  width: 900px;
  margin: 0 auto;
`;

const CardContainer = styled.div`
  width: 200px;
  background: #fff;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const UserInfo = styled.div`
  padding-top: 15px;
  display: flex;
`;

const UserImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ccc;
  margin-right: 5px;
`;

const UserName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-top: 8px;
`;

const ImageContainer = styled.div`
  width: 200px;
  height: 160px;
  background: #f0f0f0;
  margin: 16px auto;
  border-radius: 8px;
`;

const ReviewInfo = styled.div`
  padding-bottom: 10px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 5px 0;
`;

const CardContent = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 16px;
`;
