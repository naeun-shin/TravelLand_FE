import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TripDetail } from '@/api/interfaces/reviewInterface';
import * as S from '@/components/commons/user/TravelReview/Review.style';
import Button from '../../buttons/Button';
import { useNavigate } from 'react-router-dom';
import LikeIcon from '@/icons/heart.svg';
import scrapIcon from '@/icons/bookmark.svg';
import { useMutation } from '@tanstack/react-query';
import { deleteTrip } from '@/api/reviewAxios';
import { AxiosError } from 'axios';
import CategoryButton from '../../buttons/CategoryButton';
import {
  // CategoriesContainer,
  HashTagContainer,
} from '../../mainItem/MainCard.style';

interface ReviewDetailListProps {
  tripDetail: TripDetail;
  hashtagList?: string[];
}

const ReviewDetailList = ({ tripDetail }: ReviewDetailListProps) => {
  // const [activeButton, setActiveButton] = useState<ActiveButtonState>(null);
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [likeActive, setLikeActive] = useState(false);
  const [scrapActive, setScrapActive] = useState(false);

  // tripDetail로부터 초기 like 및 scrap 상태를 설정
  useEffect(() => {
    setLikeActive(tripDetail.like);
    setScrapActive(tripDetail.scrap);
  }, [tripDetail.like, tripDetail.scrap]);

  useEffect(() => {
    console.log('tripDetail 전체 데이터:', tripDetail); // 해시태그 데이터 로깅
  }, [tripDetail]);

  const toggleLike = () => {
    setLikeActive(!likeActive);
    // 서버에 상태 업데이트 요청 로직 구현
  };

  const toggleScrap = () => {
    setScrapActive(!scrapActive);
    // 서버에 상태 업데이트 요청 로직 구현
  };
  // 여행 정보 -> 삭제하기
  const deleteReviewMutation = useMutation({
    mutationFn: (tripId: number) => deleteTrip(tripId),
    onSuccess: () => {
      alert('여행 정보가 성공적으로 삭제되었습니다.');
      navigate('/travelReview');
    },
    onError: (error: AxiosError) => {
      const message = error.response?.data;
      alert(`여행 정보 삭제 실패! 오류: ${message}`);
      console.error(error.response?.data);
    },
  });

  const handleDelete = (tripId: number) => {
    deleteReviewMutation.mutate(tripId);
    console.log('아이디', tripId);
  };

  // 여기자나여 => 여기가 썸네일 이미지 구간
  const imageUrl =
    tripDetail.imageUrlList && tripDetail.imageUrlList.length > 0
      ? tripDetail.imageUrlList[0]
      : '기본이미지URL';

  return (
    <>
      <S.Container>
        <S.ImageBox>
          {tripDetail.imageUrlList &&
            tripDetail.imageUrlList.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`리뷰 이미지 ${index + 1}`}
                style={{
                  display: activeIndex === index ? 'block' : 'none',
                  width: '100%',
                  height: '450px',
                }}
              />
            ))}
          <S.SliderDots key={tripDetail.imageUrlList.length}>
            {tripDetail.imageUrlList &&
              tripDetail.imageUrlList.map((_, index) => (
                <S.Dot
                  key={index}
                  active={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
          </S.SliderDots>
        </S.ImageBox>
      </S.Container>
      <Container>
        <DateRange>{`${tripDetail.area} | ${tripDetail.tripStartDate} - ${tripDetail.tripEndDate}`}</DateRange>
        <ReviewHeader>
          <LocationTag>{`${tripDetail.title}`}</LocationTag>
          <div>
            <Icon
              src={LikeIcon}
              alt="Like"
              onClick={toggleLike}
              style={{
                cursor: 'pointer',
                backgroundColor: likeActive ? '#e7e7e7' : '#fff',
                padding: '3px',
                borderRadius: '50%',
              }}
            />
            <Icon
              src={scrapIcon}
              alt="Scrap"
              onClick={toggleScrap}
              style={{
                marginLeft: '10px',
                cursor: 'pointer',
                backgroundColor: scrapActive ? '#e7e7e7' : '#fff',
                padding: '3px',
                borderRadius: '50%',
              }}
            />
          </div>
        </ReviewHeader>
        <UserBox>
          <div>
            <S.UserSection>
              <S.UserImage src={imageUrl} alt="사진" />
              <S.UserName>{tripDetail.nickname}님</S.UserName>
            </S.UserSection>
          </div>
          <div>
            <S.HeaderBox>
              <S.ButtonBox>
                <Button text="수정하기" />
                <Button
                  text="삭제하기"
                  onClick={() => handleDelete(tripDetail.tripId)}
                />
              </S.ButtonBox>
            </S.HeaderBox>
          </div>
        </UserBox>
      </Container>
      <Container2>
        <ContentBox>
          {/* 여기에  리뷰 내용을 렌더링 */}
          <ContentDiv>{tripDetail.content}</ContentDiv>
          <HashTagContainer>
            {tripDetail.hashtagList && tripDetail.hashtagList.length > 0 ? (
              tripDetail.hashtagList.map((category, idx) => (
                <CategoryButton key={idx} title={category} />
              ))
            ) : (
              <p>해시태그가 없습니다.</p>
            )}
          </HashTagContainer>
        </ContentBox>
      </Container2>
    </>
  );
};

export default ReviewDetailList;

const Container = styled.div`
  width: 790px;
  margin: 0 auto;
  padding: 16px;
  border-bottom: 2px solid #ddd;
  /* border-radius: 8px; */
  margin-bottom: 40px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
`;
const Container2 = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 16px;
  /* border: 1px solid #eee; */
  /* border-radius: 8px; */
  margin-bottom: 40px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3px 0 30px 0;
  height: 40px;
  line-height: 40px;
`;

const LocationTag = styled.div`
  padding: 4px 0;
  font-size: 20px;
  font-weight: 600;
`;

const DateRange = styled.div`
  font-size: 15px;
  color: #666;
  margin-left: 2px;
`;

const ContentBox = styled.div`
  min-height: 250px;
  overflow: auto;
  /* height: 75vh; */
`;

const ContentDiv = styled.p`
  width: 85%;
  font-size: 18px;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 1em;
  white-space: pre-line;
  word-wrap: break-word;
  max-height: 100vh;
  overflow: auto;
`;

// const ButtonSection = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const buttonStyles = css<ButtonProps>`
//   width: 420px;
//   height: 45px;
//   padding: 8px 16px;
//   font-size: 16px;
//   cursor: pointer;
//   border-radius: 8px;
//   font-weight: 600;
//   border: 1px solid #ccc;
//   background-color: #fff;
//   transition:
//     background-color 0.3s,
//     color 0.3s;

//   ${({ $active }) =>
//     $active &&
//     css`
//       background-color: #000;
//       color: #fff;
//       border: 1px solid #000;
//     `}
// `;

// const LikeButton = styled.button<ButtonProps>`
//   ${buttonStyles}
// `;

// const ScrapButton = styled.button<ButtonProps>`
//   ${buttonStyles}
// `;

const UserBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  line-height: 50px;
`;

const Icon = styled.img`
  width: 35px;
  height: 35px;
`;
