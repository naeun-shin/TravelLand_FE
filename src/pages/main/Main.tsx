import {
  ButtonContainer,
  ButtonsWrapper,
} from '@/components/commons/buttons/Button.style';
// import { Link } from 'react-router-dom';
import Header from '@/components/layouts/Header';
import Search from '@/components/search/Search';
import Button, { TabButton } from '@/components/commons/buttons/Button';
import MainCard, {
  ListItemProps,
} from '@/components/commons/mainItem/MainCard';
import Maintitle from '@/components/commons/mainItem/MainTitle';
import ListTitle from '@/components/commons/mainItem/ListTitle';
import MainList from '@/components/commons/mainItem/MainList';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { ResultsSection } from '@/components/search/Search.style';

interface MainProps {
  onClick: () => void;
}

const Main: React.FC<MainProps> = () => {
  const navigate = useNavigate();

   const handleMakePlanClick = () => {
    navigate('/planList');
  };

  const handleReviewPageClick = () => {
    navigate('/travelReview');
  };


  // 메인 헤더 카드 임시 데이터
  const MainCardsData = [
    {
      title: '일본 후쿠오카',
      category: '#특급호텔',
      price: '199,000원',
      imageUrl: '사진',
    },
    {
      title: '일본 후쿠오카',
      category: '#특급호텔',
      price: '199,000원',
      imageUrl: '사진',
    },
    {
      title: '일본 후쿠오카',
      category: '#특급호텔',
      price: '199,000원',
      imageUrl: '사진',
    },
  ];

  // 메인 TOP 10 리스트 임시 데이터
  const tempData: ListItemProps[] = [...Array(10)].map((_, index) => ({
    title: `${index + 1} 후쿠오카`,
    location: '일본>후쿠오카',
    description: '아름답고 화려한 건축 양식의 사원',
    likes: 77,
    imageUrl: '이미지URL',
  }));
  
  return (
    <>
      <Header />
      <Search
        placeholder="검색어를 입력해주세요."
        onIconClick={() => navigate('/search')}
      />
      <ButtonContainer>
        <TabButton text="떠돌이 랜드" onClick={handleReviewPageClick} />
        <TabButton text="어디 갈랜?" onClick={handleMakePlanClick} />
      </ButtonContainer>
      <Maintitle />
      <ButtonsWrapper>
        <Button text="가족 여행"></Button>
        <Button text="커플 여행"></Button>
      </ButtonsWrapper>
      <MainCard cards={MainCardsData} />
      <ListTitle />
      <MainList items={tempData} />
    </>
  );
};

export default Main;
