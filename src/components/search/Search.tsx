import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@/icons/search2.svg';
import { searchTripsByText } from '@/api/searchAxios';
import { Navigate, useNavigate } from 'react-router-dom';

interface SearchInputProps {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onIconClick?: () => void;
  openSearchModal?: () => void;
  needSearchInput?: boolean;
  value?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  onChange,
  onIconClick,
  value,
  openSearchModal,
  needSearchInput = true,
}) => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const handleSearchIconClick = async (searchQuery: string) => {
    if (searchQuery.trim()) {
      try {
        // 검색어가 있으면 검색 결과를 가져옴
        const results = await searchTripsByText(
          searchQuery,
          1,
          9,
          'startDate',
          true,
        );
        // 검색 결과가 있으면 검색 결과 페이지로 이동
        if (results.length > 0) {
          navigate('/results');
        } else {
          // 검색 결과가 없을 때 처리
          console.log('No search results found.');
        }
      } catch (error) {
        console.error('Error searching:', error);
      }
    } else {
      // 검색어가 없으면 검색 모달 토글
      openSearchModal && openSearchModal();
    }
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
      {needSearchInput && (
        <Icon
          src={SearchIcon}
          alt="Search"
          onClick={() => handleSearchIconClick(inputValue)}
        />
      )}
    </SearchContainer>
  );
};

export default SearchInput;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  line-height: 50px;
  position: relative;
  width: 550px; // 550px로 변경가능하면 변경!
  height: 50px;
  padding: 5px;
  border-radius: 50px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background: white;
  border: 1px solid #ccc;
  margin: 40px auto;
  margin-bottom: 40px;
`;

const Input = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 16px;
  padding-left: 20px;
`;

const Icon = styled.img`
  position: absolute;
  right: 10px;
  width: 50px;
  height: 50px;
`;
