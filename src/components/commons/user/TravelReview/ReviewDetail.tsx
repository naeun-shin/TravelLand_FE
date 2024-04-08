// import React from 'react';
import { TripDetail } from '@/api/interfaces/reviewInterface';
import * as S from '@components/commons/user/TravelReview/Review.style';
import { useState } from 'react';

interface ReviewDetailHeaderProps {
  tripDetail: TripDetail;
}
// 선하님 여기 tripDetail로 한번 더 감싸서 오자나여 -> 근데 상세보기 받아올 때 "tripDetail.data"  로 받아오죵? 그러면 그냥 tripDetail이라고 만 받아와볼까요? 객체 빼고? 일단 임시로 any해봅시당 이제 새로고침 해봐용
// 흠.. 그러면 콘솔로그 18번째 줄 데이터 볼게용 고거 15번쨰 ㅏ아아아 제가 잘못이해했어용
// 콘솔 17번 볼게여
// 선하님 지금 사진 2개 잇는거죠??? 저 콘솔에 데이터 좀 더 볼게여ㅛ 이미지 url만 주시거에요? 콘솔은 다 직히는뎅...

const ReviewDetailHeader = ({ tripDetail }: ReviewDetailHeaderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(tripDetail);
  // 여기자나여 => 여기가 썸네일 이미지 구간 맞죠?? useImage는 사용자 이미지가 맞을것같ㄱ...
  // 제가봤을때 여기선 썸네일이 필요한게 아니라 이미지 리스트를 저기 ImageBox에서 보여줘야하는게 맞아보요요...저기는 나중에 사용자 정보 받아서 제가 zustand로 상태관리하면 거기서 받아서 적용하면 됩니댜 넹넹ㅎㅎ 빈곳에서 구래서 그랫나봐여

  const imageUrl =
    tripDetail.imageUrlList && tripDetail.imageUrlList.length > 0
      ? tripDetail.imageUrlList[0]
      : '기본이미지URL';

  console.log(imageUrl);
  return (
    <S.Container>
      <S.Title>상세보기</S.Title>
      <S.UserSection>
        <S.UserImage src={imageUrl} alt="사진" /> {/* 수정된 부분 */}
        <S.UserName>{tripDetail.nickname}님</S.UserName>
      </S.UserSection>
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
        <S.SliderDots>
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
  );
};

export default ReviewDetailHeader;
