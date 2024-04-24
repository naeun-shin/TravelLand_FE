import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@/icons/search2.svg';
import { useNavigate } from 'react-router-dom';
import { useGetMainSearchQuery } from '@/hooks/useQuery';

interface SearchInputProps {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onIconClick?: () => void;
  openSearchModal?: () => void;
  needSearchInput?: boolean;
  value?: string;
  onInputChange?: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  value,
  openSearchModal,
  // onInputChange,
  needSearchInput = true,
}) => {
  const [inputValue, setInputValue] = useState('');
  const { data: searchData, refetch } = useGetMainSearchQuery(inputValue);
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleSearchIconClick = async () => {
    if (inputValue.trim()) {
      await refetch(); // 검색 요청
      navigate('/results', { state: { searchData: searchData || [] } });
    } else {
      openSearchModal?.(); // 검색어가 입력되지 않았을 경우 모달 열기 함수를 호출
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
        <Icon src={SearchIcon} alt="Search" onClick={handleSearchIconClick} />
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
  width: 550px;
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
