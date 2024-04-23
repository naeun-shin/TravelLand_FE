import React, { useState } from 'react';
import {
  ButtonContainer,
  ButtonsWrapper,
} from '@/components/commons/buttons/Button.style';
import Search from '@/components/search/Search';
import Button, {
  SmallButton,
  // TabButton,
} from '@/components/commons/buttons/Button';
import MainCard from '@/components/commons/mainItem/MainCard';
import Maintitle from '@/components/commons/mainItem/MainTitle';
import ListTitle from '@/components/commons/mainItem/ListTitle';
import MainList from '@/components/commons/mainItem/MainList';
import ReDesignHeader from '@/components/layouts/Header2';
import { useNavigate } from 'react-router-dom';
import SearchModal from './SearchPage';
import styled from 'styled-components';
import {
  useGetMainRandomListQuery,
  useGetMainRankListQuery,
} from '@/hooks/useQuery';

interface MainProps {
  onClick?: () => void;
}

const Main: React.FC<MainProps> = () => {
  const navigate = useNavigate();

  const [isSearchModalOpen, setSearchModalOpen] = useState<boolean>(false);

  // 모달을 토글하는 함수
  const toggleSearchModal = () => setSearchModalOpen(!isSearchModalOpen);

  // TopTen
  const { data: TopTenData, isLoading, isError } = useGetMainRankListQuery();

  console.log('topTenData', TopTenData?.data);

  // 랜덤 8개
  const { data: randomData } = useGetMainRandomListQuery();

  console.log('randomData > ', randomData?.data);

  // 모달을 여는 함수
  // const openSearchModal = () => {
  //   setSearchModalOpen(true);
  // };

  // // // 모달을 닫는 함수
  // const closeSearchModal = () => {
  //   setSearchModalOpen(false);
  // };

  const handleMakePlanClick = () => {
    navigate('/planList');
  };

  const handleReviewPageClick = () => {
    navigate('/travelReview');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>error occured</div>;
  }

  return (
    <>
      <ReDesignHeader needSearchInput={false} />
      <Search
        placeholder="검색어를 입력해주세요."
        onIconClick={toggleSearchModal}
      />
      <ButtonContainer>
        {/* 버튼 이벤트 핸들러 로직 */}
        {/* ... */}
      </ButtonContainer>
      <ButtonsWrapper1>
        <Button text="떠돌이랜드" onClick={handleReviewPageClick} />
        <Button text="어디 갈랜?" onClick={handleMakePlanClick} />
      </ButtonsWrapper1>
      <Maintitle />
      <ButtonsWrapper>
        <SmallButton text="전체" />
        {/* <SmallButton text="가족 여행" />
        <SmallButton text="커플 여행" /> */}
      </ButtonsWrapper>
      {/* 해시태그 영역 */}
      <MainCard cards={randomData?.data} />
      <ListTitle />
      {/* 탑텐 데이터 전달 */}
      <MainList items={TopTenData?.data} />
      <SearchModal isOpen={isSearchModalOpen} onClose={toggleSearchModal} />
    </>
  );
};

export default Main;

const ButtonsWrapper1 = styled.div`
  width: 1400px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  height: 100px; /* 버튼을 중앙에 위치시키기 위한 높이 지정 */
`;
