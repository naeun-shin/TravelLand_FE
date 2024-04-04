import { List } from '@/components/commons/Lists/List';
import * as CS from '@styles/commonStyles';
import * as S from '@/components/plans/Plan.style';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { usePlanListQuery } from '@/hooks/useQuery';

const PlanList = () => {
  const navigate = useNavigate();
  const handleMakePlanClick = () => {
    navigate('/planCreate/1');
  };

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(20);
  const [sortBy, setSortBy] = useState('createdAt');
  const [isAsc, setASC] = useState(false);

  const planListParams = { page, size, sortBy, isAsc };

  const { data, isError, isLoading } = usePlanListQuery(planListParams);

  const planListData = data?.data;

  console.log(planListData);

  return (
    <>
      <List planListData={planListData} />
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
