import React from 'react';
import Slider from 'react-slick'; // react-slick에서 Slider를 임포트합니다.
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './MainCard.style';
import CategoryButton from '../buttons/CategoryButton';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import { Card } from '@/components/commons/cards/Card';

// 메인 헤더 카드 인터페이스 업데이트
interface CardProps {
  tripId: number;
  area: string;
  title: string;
  tripStartDate: string;
  tripEndDate: string;
  thumbnailUrl?: string;
  hashtagList: string[];
  isScrap: boolean;
}

interface MainCardProps {
  cards: CardProps[];
}

// 슬라이더 스타일드 컴포넌트 생성
const StyledSlider = styled(Slider)`
  position: relative;
  margin: auto;
  width: 1400px;
  display: flex;

  .slick-prev,
  .slick-next {
    position: absolute;
    top: -27px;
    width: 50px;
    height: 50px;
    z-index: 1;
    color: #ddd;
  }

  .slick-dots {
    display: none;
  }

  .slick-prev {
    left: auto;
    right: 50px;
  }
  .slick-track {
    display: flex;
    padding-bottom: 20px;
  }

  .slick-next {
    left: auto;
    right: 5px;
  }

  .slick-slide {
    width: auto;
  }
`;
const MainCard: React.FC<MainCardProps> = ({ cards = [] }) => {
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <IoIosArrowDropleft />,
    nextArrow: <IoIosArrowDropright />,
  };

  const handleGoToDetailClick = (tripId: number) => {
    navigate(`/travelDetail/${tripId}`);
  };

  return (
    <StyledSlider {...settings}>
      {cards.map((card) => (
        <S.CardContainer key={card.tripId}>
          <S.ImageContainer>
            <img
              src={card.thumbnailUrl || ''}
              alt={`Thumbnail for ${card.title}`}
            />
          </S.ImageContainer>
          <S.TextContainer>
            <div>
              <S.Title>
                {card.area} | {card.tripStartDate} - {card.tripEndDate}
              </S.Title>
            </div>
            <div>
              <S.Price onClick={() => handleGoToDetailClick(card.tripId)}>
                {card.title}
              </S.Price>
            </div>
            <S.CategoriesContainer>
              {card.hashtagList
                ? card.hashtagList.map((category: string, idx: number) => (
                    <CategoryButton
                      key={idx}
                      title={category}
                      hoverColor="none"
                    />
                  ))
                : null}
            </S.CategoriesContainer>
          </S.TextContainer>
        </S.CardContainer>
      ))}
    </StyledSlider>
  );
};

export default MainCard;
