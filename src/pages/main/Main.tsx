import { ButtonContainer } from '@/components/commons/buttons/Button.style';
import { Link } from 'react-router-dom';
import Header from '@/components/layouts/Header';
import Search from '@/components/search/Search';
import { TabButton } from '@/components/commons/buttons/Button';
import MainCard from '@/components/commons/mainItem/MainCard';
import Maintitle from '@/components/commons/mainItem/MainTitle';
import ListTitle from '@/components/commons/mainItem/ListTitle';
import MainList from '@/components/commons/mainItem/MainList';
import { useNavigate } from 'react-router-dom';

interface MainProps {
  onClick: () => void;
}

const Main: React.FC<MainProps> = () => {
  const navigate = useNavigate();

  const handleMakePlanClick = () => {
    navigate('/planList');
  };

  const handleReviewPageClick = () => {
    navigate('/travelReview');
  };

  return (
    <>
      <Header />
      <Search placeholder="검색어를 입력해주세요." />
      <ButtonContainer>
        <TabButton text="떠돌이 랜드" onClick={handleReviewPageClick} />
        <TabButton text="어디 갈랜?" onClick={handleMakePlanClick} />
      </ButtonContainer>
      <Maintitle />
      <MainCard />
      <ListTitle />
      <MainList />
    </>
  );
};

export default Main;
