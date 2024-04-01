import * as S from './Card.style';

export interface CardProps {
  width?: string;
  height?: string;
}

export const Card: React.FC<CardProps> = (children) => {
  console.log(children);
  //   console.log(width, height);
  //   console.log(size);
  return (
    <>
      {/* 이미지 박스 */}
      <S.CardBox>
        <div>
          <S.CardImg src={'/assets/paris.jpg'} />
        </div>
        {/* 여행 정보*/}
        <S.CardInfo>
          {/* 정보 좌측 - 이모티콘 */}
          <img src={'/assets/pinPoint.png'} />
          {/* 정보 우측 */}
          <S.CardInfoContent>
            <S.CardInfoContentTop>
              <div>파리</div>
              <div>2023.10.09-06.11</div>
            </S.CardInfoContentTop>
            <div>
              <div>프랑스 - 파리 </div>
            </div>
          </S.CardInfoContent>
        </S.CardInfo>
      </S.CardBox>
    </>
  );
};

export default Card;
