import { useEffect, useState } from 'react';
import * as S from '@/components/commons/user/myPage/MyPage.style';
import * as CS from '@/styles/commonStyles';
import * as LS from '@/components/commons/Lists/List.style';
import { MyPlanList } from '@/components/commons/Lists/MyPlanList';
import { useMyPlanListQuery } from '@/hooks/useQuery';
import Button from '@/components/commons/buttons/Button';
import { useNavigate } from 'react-router-dom';

const MyPagePlanList = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [size] = useState(8);
  const [pageGroup, setPageGroup] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const pageGroupSize = 10;

  const [sortBy] = useState('createdAt');
  const [isAsc] = useState(true);

  const planListParams = { page, size, sortBy, isAsc };
  const { data, isError, isLoading } = useMyPlanListQuery(planListParams);

  useEffect(() => {
    if (data) {
      setTotalPages(data.data.totalPages);
    }
  }, [data]);

  const handlePageChange = (newPage: number) => setPage(newPage);
  const handleNextGroup = () => setPageGroup(pageGroup + 1);
  const handlePrevGroup = () => setPageGroup(pageGroup - 1);
  const handlePlanCreate = () => navigate('/planCreate/1');

  return (
    <>
      <S.MyPlanListContainer>
        <LS.MyPlanListButtons>
          <div>
            <Button
              text="나의 여행 플랜"
              color="white"
              textColor="gray"
              width="160px"
              borderColor="gray"
              marginRight="5px"
            />
            <Button
              text="초대된 여행 플랜"
              color="white"
              textColor="gray"
              width="160px"
              borderColor="gray"
            />
          </div>
          <Button
            text="작성하기"
            width="150px"
            borderRadius="15px"
            onClick={handlePlanCreate}
          />
        </LS.MyPlanListButtons>
        <MyPlanList
          planListData={data?.data.content}
          isLoading={isLoading}
          error={isError ? 'Error occurred during fetching' : undefined}
        />
        <CS.PagenationStyle>
          {pageGroup > 0 && <button onClick={handlePrevGroup}>이전</button>}
          {Array.from(
            {
              length: Math.min(
                pageGroupSize,
                totalPages - pageGroup * pageGroupSize,
              ),
            },
            (_, i) => pageGroup * pageGroupSize + i + 1,
          ).map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={pageNumber === page ? 'active' : ''}
            >
              {pageNumber}
            </button>
          ))}
          {(pageGroup + 1) * pageGroupSize < totalPages && (
            <button onClick={handleNextGroup}>다음</button>
          )}
        </CS.PagenationStyle>
      </S.MyPlanListContainer>
    </>
  );
};

export default MyPagePlanList;
