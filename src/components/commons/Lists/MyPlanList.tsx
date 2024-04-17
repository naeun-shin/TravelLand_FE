// import * as S from './List.style';
import { CiHeart } from 'react-icons/ci';
import { IoEyeOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import * as S from './List.style';
// import Button from '../buttons/Button';

interface PlanListItem {
  tripStartDate: string;
  tripEndDate: string;
  area: string;
  title: string;
  budget: string;
  createdAt: string;
  viewCount: number;
  likeCount: number;
  planId: number;
  isPublic: boolean;
}

interface MyPlanListProps {
  planListData: PlanListItem[];
  isLoading?: boolean;
  error?: string;
}

export const MyPlanList: React.FC<MyPlanListProps> = ({
  planListData,
  isLoading,
  error,
}) => {
  const navigate = useNavigate();
  const handleReadContent = (planId: number) => {
    navigate(`/planDetail/${planId}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <S.MyPlanListWrapper>
      <S.MyPlanListItemWrapper>
        {planListData.length > 0 ? (
          planListData.map((item) => (
            <S.MyPlanListItems key={item.planId}>
              <S.MyPlanIsPublic isPublic={item.isPublic}>
                {item.isPublic ? '공개' : '비공개'}
              </S.MyPlanIsPublic>
              <S.MyPlanListContentBox>
                <div>
                  {item.area} | {item.tripStartDate} -{' '}
                  {item.tripEndDate.substring(5, 11)}
                </div>
                <S.MyPlanListTitle
                  onClick={() => handleReadContent(item.planId)}
                >
                  {item.title}
                </S.MyPlanListTitle>
              </S.MyPlanListContentBox>
              <S.MyPlanListCountBox>
                <div>
                  <IoEyeOutline color="gray" />
                  {item.viewCount}
                </div>
                <div>
                  <CiHeart color="gray" />
                  {item.likeCount}
                </div>
              </S.MyPlanListCountBox>
              <S.MyPlanListInviteeBox>
                <img src="/assets/paris.jpg" alt="Invitee" />
                <img src="/assets/paris.jpg" alt="Invitee" />
                <img src="/assets/paris.jpg" alt="Invitee" />
              </S.MyPlanListInviteeBox>
            </S.MyPlanListItems>
          ))
        ) : (
          <div>No plans available.</div>
        )}
      </S.MyPlanListItemWrapper>
    </S.MyPlanListWrapper>
  );
};
