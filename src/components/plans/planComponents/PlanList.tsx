import { List } from '@/components/commons/Lists/List';
import * as CS from '@styles/commonStyles';
import * as S from '@/components/plans/Plan.style';
import { useNavigate } from 'react-router-dom';

const PlanList = () => {
  const navigate = useNavigate();
  const handleMakePlanClick = () => {
    navigate('/planCreate/1');
  };
  return (
    <>
      <List />
      {/* pagination */}
      <CS.PagenationStyle>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
      </CS.PagenationStyle>
      <S.ButtonBox>
        <S.PlanNextButton onClick={handleMakePlanClick}>
          플랜 만들기
        </S.PlanNextButton>
      </S.ButtonBox>
    </>
  );
};

export default PlanList;
