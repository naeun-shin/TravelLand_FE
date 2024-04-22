// import React from 'react'
import ReDesignHeader2 from '@/components/layouts/Header2';
import ResultsContent from '@/components/search/ResultsContent';
import SearchInput from '@/components/search/Search';
// import { ReDesignHeader2 } from '@/components/layouts/Header3';

const SearchResults = () => {
  return (
    <>
      <ReDesignHeader2 />
      <SearchInput placeholder="검색어를 입력해주세요." />
      <ResultsContent />
      {/* <ResultsContent /> */}
    </>
  );
};

export default SearchResults;
