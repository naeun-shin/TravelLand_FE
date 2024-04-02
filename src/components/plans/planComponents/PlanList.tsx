import { List } from '@/components/commons/Lists/List';
import * as CS from '@styles/commonStyles';
import * as S from '@/components/plans/Plan.style';

const PlanList = () => {
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
        <S.PlanNextButton>후기 작성</S.PlanNextButton>
      </S.ButtonBox>
    </>
  );
};

export default PlanList;
