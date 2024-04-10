// List 컴포넌트 파일
import * as S from './List.style';
import { useNavigate } from 'react-router-dom';

interface PlanListItem {
  area: string;
  title: string;
  memberNickname: string;
  createdAt: string;
  viewCount: number;
  planId: number;
  public: boolean;
}

interface ListProps {
  planListData: PlanListItem[]; // 수정: 객체 배열 타입으로 명시
}

const List: React.FC<ListProps> = ({ planListData }) => {
  const navigate = useNavigate();
  console.log(planListData);

  const handleReadContent = (planId: number) => {
    navigate(`/planDetail/${planId}`);
  };

  return (
    <>
      {planListData.length === 0 ? (
        <S.ListContainer>
          <div>데이터가 없습니다</div>
        </S.ListContainer>
      ) : (
        planListData.map((item, index) => (
          <S.ListContainer key={index}>
            <S.ListLeft>
              <S.ListCity>{item.area}</S.ListCity>
              <S.ListTitle onClick={() => handleReadContent(item.planId)}>
                {item.title}
              </S.ListTitle>
            </S.ListLeft>
            <S.ListRight>
              <div>{item.memberNickname}</div>
              <div>{item.createdAt.split('T')[0]}</div>
              <div>{item.viewCount}</div>
            </S.ListRight>
          </S.ListContainer>
        ))
      )}
    </>
  );
};

export { List };
