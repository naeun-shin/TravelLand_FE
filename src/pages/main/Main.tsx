import {
  ButtonContainer,
  ButtonsWrapper,
} from '@/components/commons/buttons/Button.style';
// import { Link } from 'react-router-dom';
import Header from '@/components/layouts/Header';
import Search from '@/components/search/Search';
import Button, { TabButton } from '@/components/commons/buttons/Button';
import MainCard from '@/components/commons/mainItem/MainCard';
import Maintitle from '@/components/commons/mainItem/MainTitle';
import ListTitle from '@/components/commons/mainItem/ListTitle';
import MainList from '@/components/commons/mainItem/MainList';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Main = () => {
  const navigate = useNavigate();
  const [isMakePlan, setIsMakePlan] = useState(false);

  const handlePageNavigateClick = () => {
    if (isMakePlan) {
      navigate('/planList');
    } else {
      // 다른 경로로 이동하도록 처리
      navigate('/travelReview');
    }
  };

  return (
    <>
      <Header />
      <Search
        placeholder="검색어를 입력해주세요."
        onIconClick={() => navigate('/search')}
      />
      <ButtonContainer>
        <TabButton
          text="떠돌이 랜드"
          onClick={() => handlePageNavigateClick()}
        />
        <TabButton
          text="어디 갈랜?"
          onClick={() => {
            setIsMakePlan(true);
            handlePageNavigateClick();
          }}
        />
      </ButtonContainer>
      <Maintitle />
      <ButtonsWrapper>
        <Button text="가족 여행"></Button>
        <Button text="커플 여행"></Button>
      </ButtonsWrapper>
      <MainCard />
      <ListTitle />
      <MainList />
    </>
  );
};

export default Main;
