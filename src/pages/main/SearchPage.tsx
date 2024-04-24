import React, { useEffect, useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import * as S from '@components/search/Search.style';
import CategoryButton from '@/components/commons/buttons/CategoryButton';
import SearchInput from '@/components/search/Search';
import { IoClose } from 'react-icons/io5';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useGetAreaListQuery, useGetHahtagListQuery } from '@/hooks/useQuery';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: () => void; // 수정된 부분
}

const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  // onSearch,
}) => {
  const navigate = useNavigate();
  const [_, setArea] = useState<string>('');
  const [, setHashtag] = useState<string>('');

  // // 인기 태그 (선택박스)
  const { data: tagList } = useGetHahtagListQuery();

  // 인기 지역 (선택박스)
  const { data: areaList } = useGetAreaListQuery();
  const areaItem = areaList?.data;
  // const [isSearchModalOpen, setSearchModalOpen] = useState<boolean>(false);

  // const toggleSearchModal = () => {
  //   setSearchModalOpen(!isSearchModalOpen);
  // };

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
  }, [isOpen, areaItem, tagList]);

  if (!isOpen) return null;

  // 지역 기반 검색
  const handleAreaClick = (area: string) => {
    // 카테고리 Api 호출
    setArea(area);
    navigate('/results', { state: { area } });
  };

  // 해시 태그 검색
  const handleHashtagClick = (hashtag: string) => {
    setHashtag(hashtag);
    navigate('/results', { state: { hashtag } });
  };

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
              {areaItem?.map((area: string, idx: number) => (
                <CategoryButton
                  key={idx}
                  title={area}
                  icon={<IoLocationSharp />}
                  onClick={() => handleAreaClick(area)}
                />
              ))}
            </S.BtnContainer>
          </S.LocalContainer>
          <S.LocalContainer>
            <S.LocalTitle>인기 검색어</S.LocalTitle>
            <S.BtnContainer>
              {tagList?.map((hashtag, idx) => (
                <CategoryButton
                  key={idx}
                  title={hashtag}
                  icon={<IoLocationSharp />}
                  onClick={() => handleHashtagClick(hashtag)}
                />
              ))}
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
