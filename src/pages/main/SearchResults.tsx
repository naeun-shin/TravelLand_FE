import React, { useState } from 'react';
import ReDesignHeader2 from '@/components/layouts/Header2';
import ResultsContent from '@/components/search/ResultsContent';
// SearchInputProps import 변경
import { useNavigate } from 'react-router-dom';
import SearchInput from '@/components/search/Search';

const SearchResults = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(''); // 검색어 상태

  // 검색 아이콘 클릭 시 호출될 함수
  const handleSearchIconClick = () => {
    if (searchQuery.trim()) {
      // 검색어가 있으면 검색 결과 페이지로 이동
      navigate(`/results?query=${searchQuery}`);
    } else {
      console.log('검색어를 입력해주세요.');
    }
  };

  return (
    <>
      <ReDesignHeader2 needSearchInput={false} />
      {/* value, onChange 속성 추가 */}
      <SearchInput
        placeholder="검색어를 입력해주세요."
        value={searchQuery}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchQuery(e.target.value)
        }
        onIconClick={handleSearchIconClick}
      />
      <ResultsContent />
    </>
  );
};

export default SearchResults;
