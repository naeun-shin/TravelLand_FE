// import * as S from './List.style';
import { CiHeart } from 'react-icons/ci';
import { IoEyeOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import * as S from './List.style';
import Button from '../buttons/Button';

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
}

export const MyPlanList: React.FC<MyPlanListProps> = ({ planListData }) => {
  const navigate = useNavigate();

  const handleReadContent = (planId: number) => {
    navigate(`/planDetail/${planId}`);
  };
  const handlePlanCreate = () => {
    navigate('/planCreate/1');
  };
  // const handleBookmarkClick = (planId: number) => {
  //   console.log(planId);
  // };

  return (
    <>
      <S.MyPlanListWrapper>
        {/* 버튼 영역 */}
        <S.MyPlanListButtons>
          <div>
            <Button
              text="나의 여행 플랜"
              color="white"
              textColor="gray"
              width="150px"
              borderColor="gray"
              marginRight="5px"
            />
            <Button
              text="초대된 여행 플랜"
              color="white"
              textColor="gray"
              width="150px"
              borderColor="gray"
            />
          </div>
          <Button
            text="작성하기"
            width="150px"
            borderRadius="15px"
            onClick={handlePlanCreate}
          />
        </S.MyPlanListButtons>
        {/*  목록 */}
        <S.MyPlanListItemWrapper>
          {planListData.map((item) => (
            <S.MyPlanListItems>
              {/* 공개 비공개 칸 */}
              <S.MyPlanIsPublic isPublic={item.isPublic}>
                {item.isPublic ? '공개' : '비공개'}
              </S.MyPlanIsPublic>
              {/* 지역 & 날짜 & 제목 */}
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
              {/* 조회수, 하트, 댓글 */}
              <S.MyPlanListCountBox>
                <div>
                  <IoEyeOutline color="gray" />
                  {item.viewCount}
                </div>
                <div>
                  <CiHeart color="gray" />
                  {item.likeCount}
                </div>

                {/* <div>
                  <CiHeart />
                  12
                </div> */}
              </S.MyPlanListCountBox>
              {/* 초대 사람 사진 영역   */}
              <S.MyPlanListInviteeBox>
                <img src="/assets/paris.jpg" />
                <img src="/assets/paris.jpg" />
                <img src="/assets/paris.jpg" />
              </S.MyPlanListInviteeBox>
            </S.MyPlanListItems>
          ))}
        </S.MyPlanListItemWrapper>
      </S.MyPlanListWrapper>
    </>
  );
};
