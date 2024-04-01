import { ButtonContainer } from '@/components/commons/buttons/Button.style';
import Header from '@/components/layouts/Header';
import Search from '@/components/search/Search';
import { TabButton } from '@/components/commons/buttons/Button';
import MainCard from '@/components/commons/mainItem/MainCard';
import MainItem from '@/components/commons/mainItem/MainItem';
import ListTitle from '@/components/commons/mainItem/ListTitle';
import MainList from '@/components/commons/mainItem/MainList';

const Main = () => {
  return (
    <>
      <Header />
      <Search placeholder="검색어를 입력해주세요." />
      <ButtonContainer>
        <TabButton text="떠돌이 랜드" />
        <TabButton text="어디 갈랜?" />
      </ButtonContainer>
      <MainItem />
      <MainCard />
      <ListTitle />
      <MainList />
    </>
  );
};

export default Main;
