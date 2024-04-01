import React from 'react';
// import MediumButton from '@/components/commons/buttons/Button';
import { ButtonContainer } from '@/components/commons/buttons/Button.style';
import Header from '@/components/layouts/Header';
import Search from '@/components/search/Search';
import { TabButton } from '@/components/commons/buttons/Button';
import MainItem from '@/components/commons/mainItem/MainItem';
import MainCard from '@/components/commons/mainItem/MainCard';

const Main = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('버튼이 클릭되었습니다!', e);
  };
  return (
    <>
      <Header />
      <Search placeholder="검색어를 입력해주세요." />
      <ButtonContainer>
        <TabButton text="떠돌이 랜드" onClick={handleClick} />
        <TabButton text="어디 갈랜?" onClick={handleClick} />
      </ButtonContainer>
      <MainItem />
      <MainCard />
    </>
  );
};

export default Main;
