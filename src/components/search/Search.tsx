import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@/icons/search2.svg';
import { searchTripsByText } from '@/api/searchAxios';
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
  onChange,
  onIconClick,
  value,
  openSearchModal,
  // onInputChange,
  needSearchInput = true,
}) => {
  const [inputValue, setInputValue] = useState('');
  const {
    data: searchData,
    isLoading,
    error,
    refetch,
  } = useGetMainSearchQuery(inputValue);
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log('API Call Status:');
  //   console.log('Loading:', isLoading);
  //   console.log('Error:', error);
  //   console.log('Data:', searchData);
  // }, [searchData, isLoading, error]);

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleSearchIconClick = async () => {
    if (inputValue.trim()) {
      await refetch(); // 검색 요청
      if (searchData && searchData.length > 0) {
        navigate('/results', { state: { searchData } }); // 결과 페이지로 이동, 검색 데이터 전달
      } else {
        navigate('/results', { state: { searchData: [] } }); // 결과 페이지로 이동, 빈 배열 전달
      }
    } else {
      // 사용자가 검색어를 입력하지 않았을 때 결과 페이지로 이동하고 빈 결과를 보여줍니다.
      navigate('/results', { state: { searchData: [] } });
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
