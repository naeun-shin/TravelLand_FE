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
  useGetMainHashtagListQuery,
  useGetMainRankListQuery,
  useGetMainSearchQuery,
} from '@/hooks/useQuery';
import { searchTripsByText } from '@/api/searchAxios';

interface MainProps {
  onClick?: () => void;
}

const Main: React.FC<MainProps> = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(''); // 검색어 상태
  const [isSearchModalOpen, setSearchModalOpen] = useState<boolean>(false);

  // 모달을 토글하는 함수
  const toggleSearchModal = () => {
    console.log('Toggling search modal');
    setSearchModalOpen(!isSearchModalOpen);
  };

  // TopTen
  // const { data: TopTenData, isLoading, isError } = useGetMainRankListQuery();

  // console.log(TopTenData);

  // // 해시태그
  // const { data: hashTagData } = useGetMainHashtagListQuery();

  // console.log(hashTagData);

  // 검색 아이콘 클릭 시 호출될 함수
  const handleSearchIconClick = () => {
    if (searchQuery.trim()) {
      // 검색어가 있으면 검색 결과 페이지로 이동
      navigate('/results', { state: searchQuery });
    } else {
      // 검색어가 없으면 검색 모달 토글
      toggleSearchModal();
    }
  };

  // 검색어 입력 시 호출될 함수
  const handleSearchInputChange = (query: string) => {
    setSearchQuery(query);
  };

  // 검색어를 사용하여 검색 API를 호출
  const {
    isLoading,
    isError,
    data: searchData,
  } = useGetMainSearchQuery(searchQuery);

  // API 호출 상태에 따라 로딩 또는 에러 처리
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred</div>;
  }
  const handleSearchResult = () => {
    if (searchData) {
      navigate('/search-results', { state: searchData });
    } else {
      closeSearchModal();
    }
  };

  // 검색 아이콘 클릭 시 호출될 함수
  /**
 > planList.tsx 파일 -> 15 ~ 27줄 참고해서 아래 코드 적용 필요!!

 * 1. useQuery -> useSearchQuery(); : 폴더 : hooks
 *    - export const useMyTripListQuery = (tripListParams: TripListParams) => {
  return useQuery({
    queryKey: ['myTripList', tripListParams],
    queryFn: () => getMyTripList(tripListParams),
    staleTime: 0,
  });
};

  2. handleSearchIconClick 함수에서 실행

  const handleSearchIconClick = (query : string) => {
    console.log(query);

  메인 -> const {data : searchData} = useSearchQuery();
 console.log(searchData);
  
 3. navigate -> state -> searchData 담아서 전달
    if(query.trim()) {
      navigate("결과페이지",searchData)
    }else{
     검색모달로 navigate("검색 모달 페이지")
    }


  }
  */

  // 모달을 여는 함수
  const openSearchModal = () => {
    setSearchModalOpen(true);
  };

  // 모달을 닫는 함수
  const closeSearchModal = () => {
    setSearchModalOpen(false);
  };

  const handleMakePlanClick = () => {
    navigate('/planList');
  };

  const handleReviewPageClick = () => {
    navigate('/travelReview');
  };

  // 메인 헤더 카드 임시 데이터
  const MainCardsData = [
    {
      tripId: 1,
      area: '경상도',
      title: '향기로운 봄날의 한옥 체험',
      tripStartDate: '2024-05-01',
      tripEndDate: '2024-05-03',
      thumbnailUrl: '/assets/jejudo_720.jpg',
      hashtagList: ['한옥', '데이트', '가족여행', '역사'],
      isScrap: true,
    },
    {
      tripId: 1,
      area: '경상도',
      title: '향기로운 봄날의 한옥 체험',
      tripStartDate: '2024-05-01',
      tripEndDate: '2024-05-03',
      thumbnailUrl: '/assets/kyeongju_720.jpg',
      hashtagList: ['한옥', '가족여행', '데이트'],
      isScrap: true,
    },
    {
      tripId: 1,
      area: '경상도',
      title: '향기로운 봄날의 한옥 체험',
      tripStartDate: '2024-05-01',
      tripEndDate: '2024-05-03',
      thumbnailUrl: '/assets/jejudo_720.jpg',
      hashtagList: ['한옥', '데이트', '가족여행'],
      isScrap: true,
    },
    {
      tripId: 1,
      area: '경상도',
      title: '향기로운 봄날의 한옥 체험',
      tripStartDate: '2024-05-01',
      tripEndDate: '2024-05-03',
      thumbnailUrl: '/assets/kyeongju_720.jpg',
      hashtagList: ['한옥', '데이트', '가족여행', '역사'],
      isScrap: true,
    },
    {
      tripId: 1,
      area: '경상도',
      title: '향기로운 봄날의 한옥 체험',
      tripStartDate: '2024-05-01',
      tripEndDate: '2024-05-03',
      thumbnailUrl: '/assets/jejudo_720.jpg',
      hashtagList: ['한옥', '데이트', '가족여행', '역사'],
      isScrap: true,
    },
    {
      tripId: 1,
      area: '경상도',
      title: '향기로운 봄날의 한옥 체험',
      tripStartDate: '2024-05-01',
      tripEndDate: '2024-05-03',
      thumbnailUrl: '/assets/kyeongju_720.jpg',
      hashtagList: ['한옥', '데이트', '가족여행'],
      isScrap: true,
    },
    {
      tripId: 1,
      area: '경상도',
      title: '향기로운 봄날의 한옥 체험',
      tripStartDate: '2024-05-01',
      tripEndDate: '2024-05-03',
      thumbnailUrl: '/assets/jejudo_720.jpg',
      hashtagList: ['한옥', '가족여행', '데이트', '역사'],
      isScrap: true,
    },
    {
      tripId: 1,
      area: '경상도',
      title: '향기로운 봄날의 한옥 체험',
      tripStartDate: '2024-05-01',
      tripEndDate: '2024-05-03',
      thumbnailUrl: '/assets/kyeongju_720.jpg',
      hashtagList: ['한옥', '데이트'],
      isScrap: true,
    },
  ];

  const items = [
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
  ];

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
        openSearchModal={toggleSearchModal}
        onIconClick={handleSearchIconClick}
        onInputChange={handleSearchInputChange}
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
        <SmallButton text="가족 여행" />
        <SmallButton text="커플 여행" />
      </ButtonsWrapper>
      {/* 해시태그 영역 */}
      <MainCard cards={MainCardsData} />
      <ListTitle />
      {/* 탑텐 데이터 전달 */}
      <MainList items={items} />
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={toggleSearchModal}
        onSearch={handleSearchResult}
      />
    </>
  );
};

export default Main;

const ButtonsWrapper1 = styled.div`
  width: 1100px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  height: 100px; /* 버튼을 중앙에 위치시키기 위한 높이 지정 */
`;
