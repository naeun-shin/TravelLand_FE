import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ToggleButton from '@/components/commons/buttons/ToggleButton';
import { ModernInput } from '@/components/commons/inputs/Input';
import styled from 'styled-components';

const ReviewCreate = () => {
  const navigate = useNavigate();
  const [isPublic, setIsPublic] = useState<boolean>(false);
  const [totalPlanTitle, setTotalPlanTitle] = useState<string>('');
  const [totalBudget, setTotalBudget] = useState<number>(0);
  const [area, setArea] = useState<string>('');

  const handleAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArea(e.target.value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTotalPlanTitle(e.target.value);
  };

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTotalBudget(parseInt(e.target.value, 10) || 0);
  };

  const toggleIsPublic = () => setIsPublic(!isPublic);

  const handleNextClick = () => {
    navigate('/reviewCreate/2', {
      state: {
        isPublic,
        totalPlanTitle,
        totalBudget,
        area,
      },
    });
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '100%' }}>
          <div>
            <div> 제목</div>
            <ReviewBoxWithSpaceBetween>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ModernInput
                  type="text"
                  placeholder="제목을 입력해주세요"
                  width={400}
                  height={50}
                  border="transparent"
                  onChange={handleTitleChange}
                  fontSize={18}
                  fontWeight={'bold'}
                />
              </div>

              <div>
                <ToggleButton isChecked={!isPublic} onToggle={toggleIsPublic} />
              </div>
            </ReviewBoxWithSpaceBetween>
          </div>
          <div>
            <div>
              <ReviewBox>
                <ReviewContent>
                  <div>지역</div>
                  <ModernInput
                    type="text"
                    placeholder="지역을 입력해주세요"
                    width={400}
                    height={30}
                    border="transparent"
                    fontSize={16}
                    onChange={handleAreaChange}
                  />
                </ReviewContent>
              </ReviewBox>
              <hr />
              <ReviewBox>
                <ReviewContent>
                  <div>예산</div>
                  <ModernInput
                    type="text"
                    placeholder="예산을 입력해주세요"
                    width={400}
                    height={30}
                    border="transparent"
                    fontSize={16}
                    onChange={handleBudgetChange}
                  />
                </ReviewContent>
                <ReviewContent>
                  <div>위치</div>
                  <ModernInput
                    type="text"
                    placeholder="위치을 입력해주세요"
                    width={400}
                    height={30}
                    border="transparent"
                    fontSize={16}
                    onChange={handleBudgetChange}
                  />
                </ReviewContent>
                <ReviewContent>
                  <div>여행기간</div>
                  <ModernInput
                    type="text"
                    placeholder="여행기간을 입력해주세요"
                    width={400}
                    height={30}
                    border="transparent"
                    fontSize={16}
                    onChange={handleBudgetChange}
                  />
                </ReviewContent>
              </ReviewBox>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <ReviewBottomSection>
        <ReviewNextButton onClick={handleNextClick}>다음</ReviewNextButton>
      </ReviewBottomSection>
    </>
  );
};

export default ReviewCreate;

const ReviewBoxWithSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    /* padding-left: 15px; */
  }
`;

const ReviewBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0px;
`;

const ReviewContent = styled.div`
  /* padding-left: 15px; */
  div {
    padding-left: 5px;
  }
`;

const ReviewBottomSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 15px;
`;

const ReviewNextButton = styled.button`
  background-color: #5ac8ec;
  color: white;
  justify-content: center;
  border: none;
  width: 160px;
  height: 50px;
  border-radius: 16px;
`;
