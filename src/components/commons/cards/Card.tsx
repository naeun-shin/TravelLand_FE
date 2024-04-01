import * as S from './Card.style';

const Card = () => {
  return (
    <>
      {/* 이미지 박스 */}
      <div>
        <S.CardImg src={'/assets/paris.jpg'} />
      </div>
      {/* 여행 정보*/}
      <S.CardInfo>
        {/* 정보 좌측 - 이모티콘 */}
        <img src={'/assets/pinPoint.png'} />
        {/* 정보 우측 */}
        <S.CardInfoRight>
          <p>후쿠오카</p>
          <p>일본 - 후쿠오카</p>
          <p>2024.06.09 - 06.11</p>
        </S.CardInfoRight>
      </S.CardInfo>
    </>
  );
};

export default Card;
