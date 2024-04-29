import React, { useEffect, useState } from 'react';
import {
  ButtonContainer,
  ButtonsWrapper,
} from '@/components/commons/buttons/Button.style';

import {
  SmallButton,
  // TabButton,
} from '@/components/commons/buttons/Button';
import MainCard from '@/components/commons/mainItem/MainCard';
import Maintitle from '@/components/commons/mainItem/MainTitle';
import ListTitle from '@/components/commons/mainItem/ListTitle';
import MainList from '@/components/commons/mainItem/MainList';
import { useNavigate } from 'react-router-dom';
import SearchModal from './SearchPage';
// import styled from 'styled-components';
import {
  useGetMainRandomListQuery,
  useGetMainRankListQuery,
  useGetMainSearchQuery,
} from '@/hooks/useQuery';
import PopupModal from '@/components/commons/modals/PopupModal';

interface MainProps {
  onClick?: () => void;
}

const Main: React.FC<MainProps> = () => {
  const navigate = useNavigate();
  const [searchQuery] = useState(''); // 검색어 상태
  const [isSearchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const [isModalOpen, setModalOpen] = useState(true);

  useEffect(() => {
    // 메인 페이지 로드 시 localStorage에서 'planData','reviewState'를 삭제
    localStorage.removeItem('planData');
    localStorage.removeItem('reviewState');
  }, []);

  // 팝업 모달을 닫기
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // '오늘 하루 그만 보기' 기능을 처리하는 함수
  const handleTodayClose = () => {
    // localStorage에 정보 저장
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem('hideModalDate', today);
    setModalOpen(false);
  };

  // 로컬 스토리지에서 날짜 값을 확인
  useEffect(() => {
    const hideModalDate = localStorage.getItem('hideModalDate');
    const today = new Date().toISOString().split('T')[0];

    if (hideModalDate === today) {
      // 오늘 날짜에 '오늘 하루 그만 보기' 선택!
      setModalOpen(false);
    }
  }, []);

  // TopTen
  const {
    data: TopTenData,
    isLoading: isLoadingTopTen,
    isError: isErrorTopTen,
  } = useGetMainRankListQuery();

  // 랜덤 8개
  const {
    data: randomData,
    isLoading: isLoadingRandom,
    isError: isErrorRandom,
  } = useGetMainRandomListQuery();

  // 검색 API
  const {
    isLoading: isLoadingSearch,
    isError: isErrorSearch,
    data: searchData,
  } = useGetMainSearchQuery(searchQuery);

  if (!searchQuery == null) {
  }

  const handleSearchResult = () => {
    if (searchData) {
      navigate('/search-results', { state: searchData });
    } else {
      closeSearchModal();
    }
  };

  // 모달을 토글하는 함수
  const toggleSearchModal = () => {
    setSearchModalOpen(!isSearchModalOpen);
  };

  // 모달을 여는 함수
  // const openSearchModal = () => {
  //   setSearchModalOpen(true);
  // };

  // // // 모달을 닫는 함수
  const closeSearchModal = () => {
    setSearchModalOpen(false);
  };

  // 전체 로딩 및 에러 처리
  if (isLoadingTopTen || isLoadingRandom || isLoadingSearch) {
    return <div>Loading...</div>;
  }

  if (isErrorTopTen || isErrorRandom || isErrorSearch) {
    return <div>Error occurred</div>;
  }

  return (
    <>
      {/* <ReDesignHeader /> */}
      <div>
        <ButtonContainer>
          {/* 버튼 이벤트 핸들러 로직 */}
          {/* ... */}
        </ButtonContainer>
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
        <SearchModal
          isOpen={isSearchModalOpen}
          onClose={toggleSearchModal}
          onSearch={handleSearchResult}
        />
        <PopupModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onTodayClose={handleTodayClose}
          imageUrl="/assets/popup.png"
        />
      </div>
    </>
  );
};

export default Main;
