import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@/icons/SearchIcon.svg';

interface SearchInputProps {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, onChange }) => {
  return (
    <SearchContainer>
      <Input type="text" placeholder={placeholder} onChange={onChange} />
      <Icon src={SearchIcon} alt="Search" />
    </SearchContainer>
  );
};

export default SearchInput;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  line-height: 50px;
  position: relative;
  width: 500px;
  height: 50px;
  padding: 5px;
  padding-right: 40px;
  border-radius: 50px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background: white;
  border: 1px solid #ccc;
  margin: 20px auto;
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
  width: 65px;
  height: 65px;
`;
