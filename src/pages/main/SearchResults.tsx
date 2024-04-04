// import React from 'react'

import Header from '@/components/layouts/Header';
import ResultsContent from '@/components/search/ResultsContent';
import SearchInput from '@/components/search/Search';

const SearchResults = () => {
  return (
    <>
      <Header />
      <SearchInput placeholder="검색어를 입력해주세요." />
      <ResultsContent />
    </>
  );
};

export default SearchResults;
