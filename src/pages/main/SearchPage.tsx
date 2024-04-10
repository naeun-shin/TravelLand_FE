// import React from 'react';
import Header from '@/components/layouts/Header';
import SearchInput from '@/components/search/Search';
import { IoLocationSharp } from 'react-icons/io5';
import * as S from '@components/search/Search.style';
import { useNavigate } from 'react-router-dom';
import CategoryButton from '@/components/commons/buttons/CategoryButton';

const SearchPage = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    console.log(`${category} 카테고리 선택`);

    // 카테고리 Api 호출
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
          <CategoryButton
            title="제주도"
            icon={<IoLocationSharp />}
            onClick={() => handleCategoryClick('제주도')}
          />
        </S.BtnContainer>
      </S.LocalContainer>
      <S.ResultsSection>
        <CategoryButton
          title="# 데이트"
          onClick={() => handleCategoryClick('데이트')}
        />
        <CategoryButton
          title="# 친구"
          onClick={() => handleCategoryClick('친구')}
        />
        <CategoryButton
          title="# 가족"
          onClick={() => handleCategoryClick('가족')}
        />
        <CategoryButton
          title="# 가성비"
          onClick={() => handleCategoryClick('가성비')}
        />
        <CategoryButton
          title="# 이색 여행"
          onClick={() => handleCategoryClick('이색 여행')}
        />
        <CategoryButton
          title="# 지역 주민 추천"
          onClick={() => handleCategoryClick('지역 주민 추천')}
        />
        <CategoryButton
          title="# 2030"
          onClick={() => handleCategoryClick('2030')}
        />
      </S.ResultsSection>
    </S.SearchPageContainer>
  );
};

export default SearchPage;
