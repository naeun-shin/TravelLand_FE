// import React from 'react';
import Header from '@/components/layouts/Header';
import SearchInput from '@/components/search/Search';
import { IoLocationSharp } from 'react-icons/io5';
import * as S from '@components/search/Search.style';
import { useNavigate } from 'react-router-dom';
import CategoryButton from '@/components/common/buttons/CategoryButton';

const SearchPage = () => {
  const navigate = useNavigate();

  // 클릭 이벤트를 처리하는 함수를 정의합니다.
  const handleCategoryClick = (category: string) => {
    console.log(`${category} 카테고리가 선택되었습니다.`);
    // 여기서 API 호출 또는 다른 페이지로 navigate하는 로직을 추가할 수 있습니다.
  };

  return (
    <S.SearchPageContainer>
      <Header />
      <S.SearchSection>
        <S.Title>✈️이 여행 어떠행?</S.Title>
        <SearchInput
          placeholder="검색어를 입력해주세요."
          onIconClick={() => navigate('/results')}
        />
      </S.SearchSection>
      <S.LocalContainer>
        <S.LocalTitle>지역별 인기</S.LocalTitle>
        <S.BtnContainer>
          {/* CategoryButton 컴포넌트를 사용하여 버튼을 생성합니다. */}
          <CategoryButton
            title="제주도"
            icon={<IoLocationSharp />}
            onClick={() => handleCategoryClick('제주도')}
          />
          {/* 나머지 버튼들도 동일하게 처리 */}
        </S.BtnContainer>
      </S.LocalContainer>
      <S.ResultsSection>
        <CategoryButton
          title="# 데이트"
          onClick={() => handleCategoryClick('데이트')}
        />
        {/* 나머지 버튼들도 동일하게 처리 */}
      </S.ResultsSection>
    </S.SearchPageContainer>
  );
};

export default SearchPage;
