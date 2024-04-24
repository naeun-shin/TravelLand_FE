import React, { useEffect, useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import * as S from '@components/search/Search.style';
import CategoryButton from '@/components/commons/buttons/CategoryButton';
import SearchInput from '@/components/search/Search';
import { IoClose } from 'react-icons/io5';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: () => void; // 수정된 부분
}

const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSearch,
}) => {
  const navigate = useNavigate();
  const [isSearchModalOpen, setSearchModalOpen] = useState<boolean>(false);

  const toggleSearchModal = () => {
    setSearchModalOpen(!isSearchModalOpen);
  };

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();
    };

    if (isOpen) {
      window.addEventListener('wheel', handleScroll, { passive: false });
    }

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCategoryClick = (category: string) => {
    console.log(`${category} 카테고리 선택`);
    // 카테고리 Api 호출
    navigate('/results');
  };

  // const handleResultpage = () => {
  //   navigate('/results');
  // }

  /*
  1. 지역별 인기 검색 & 해시태그 검색 get API 호출
    1-1. /v1/trips/rank/area - get (useQuery)
    1-2. /v1/trips/rank/hashtag - get (useQuery)

  2. 해당 검색 버튼 누를 때,
    2-1. 지역별 인기 검색 호출
        /v1/trips/search/area - get (useQuery)
    2-2. 해시태그 검색 호출
        /v1/trips/search/hashtag get (useQuery)
*/

  return (
    <>
      <S.ModalOverlay onClick={onClose}>
        <S.ModalContainer onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={onClose}>
            <IoClose size="50px" />{' '}
            {/* 아이콘 크기는 예시이므로 원하는 대로 조절하세요. */}
          </CloseButton>
          <S.SearchSection>
            <SearchInput placeholder="검색어를 입력해주세요." />
          </S.SearchSection>
          <S.LocalContainer>
            <S.LocalTitle>지역별 인기</S.LocalTitle>
            <S.BtnContainer>
              <CategoryButton
                title="고성"
                icon={<IoLocationSharp />}
                onClick={() => handleCategoryClick('고성')}
              />
              <CategoryButton
                title="강원도"
                icon={<IoLocationSharp />}
                onClick={() => handleCategoryClick('강원도')}
              />
              <CategoryButton
                title="서울"
                icon={<IoLocationSharp />}
                onClick={() => handleCategoryClick('서울')}
              />
            </S.BtnContainer>
          </S.LocalContainer>
          <S.LocalContainer>
            <S.LocalTitle>인기 검색어</S.LocalTitle>
            <S.BtnContainer>
              <CategoryButton
                title="데이트"
                icon={<IoLocationSharp />}
                onClick={() => handleCategoryClick('데이트')}
              />
              <CategoryButton
                title="가족 여행"
                icon={<IoLocationSharp />}
                onClick={() => handleCategoryClick('가족 여행')}
              />
              <CategoryButton
                title="친구"
                icon={<IoLocationSharp />}
                onClick={() => handleCategoryClick('친구')}
              />
            </S.BtnContainer>
          </S.LocalContainer>
        </S.ModalContainer>
      </S.ModalOverlay>
    </>
  );
};

export default SearchModal;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
