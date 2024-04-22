// import React from 'react'
import Header3 from '@/components/layouts/Header3';
import ResultsContent from '@/components/search/ResultsContent';
import SearchInput from '@/components/search/Search';

const SearchResults = () => {
  return (
    <>
      <Header3 />
      <SearchInput placeholder="검색어를 입력해주세요." />
      <ResultsContent />
      {/* <ResultsContent /> */}
    </>
  );
};

export default SearchResults;
