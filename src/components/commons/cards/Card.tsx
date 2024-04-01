import * as S from './Card.style';

export interface CardProps {
  width?: string;
  height?: string;
  title?: string;
  date?: string;
  writer?: string;
  city?: string;
}

export const Card: React.FC<CardProps> = ({
  width,
  height,
  title,
  date,
  writer,
  city,
}) => {
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
              <div>{title}</div>
              <div>{date}</div>
            </S.CardInfoContentTop>
            <div>
              <div>
                {writer} {city}
              </div>
            </div>
          </S.CardInfoContent>
        </S.CardInfo>
      </S.CardBox>
    </>
  );
};

export default Card;
