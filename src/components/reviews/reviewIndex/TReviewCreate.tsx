import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ToggleButton from '@/components/commons/buttons/ToggleButton';
import { ModernInput } from '@/components/commons/inputs/Input';
import styled from 'styled-components';
import { TfiArrowCircleRight } from 'react-icons/tfi';

const ReviewCreate = () => {
  const navigate = useNavigate();
  const [isPublic, setIsPublic] = useState<boolean>(false);
  const [totalPlanTitle, setTotalPlanTitle] = useState<string>('');
  const [totalBudget, setTotalBudget] = useState<number>(0);
  const [area, setArea] = useState<string>('');
  const [step, setStep] = useState<number>(1);

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

  // const handleNextClick = () => {
  //   navigate('/reviewCreate/2', {
  //     state: {
  //       isPublic,
  //       totalPlanTitle,
  //       totalBudget,
  //       area,
  //     },
  //   });
  // };

  // 스텝퍼 바 컴포넌트 정의
  // const StepperBar = () => {
  //     return (
  //       <StepperContainer>
  //         <Step active /> {/* active 속성 추가 */}
  //         <Step />
  //         <Step />
  //       </StepperContainer>
  //     );
  //   };
  // 다음 버튼을 클릭할 때 실행되는 함수
  const handleNextClick = () => {
    if (step < 3) {
      setStep(step + 1); // 다음 단계로 이동
    } else {
      navigate('/reviewCreate/2');
    }
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '100%' }}>
          <div>
            <Title> 제목</Title>
            <ReviewBoxWithSpaceBetween>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src="/assets/icons/Rectangle.png"
                  style={{ height: '40px' }}
                />
                <ModernInput
                  type="text"
                  placeholder="제목을 입력해주세요"
                  width={400}
                  height={35}
                  border="transparent"
                  onChange={handleTitleChange}
                  fontSize={16}
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
              <BringPlanBtn> + 여행 플랜 불러오기</BringPlanBtn>
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
              </ReviewBox>
              <hr />
              <ReviewBox>
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
                <IconContainer>
                  <TfiArrowCircleRight
                    size="35px"
                    color="lightGray"
                    cursor="pointer"
                  />
                </IconContainer>
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
    padding-left: 5px;
  }
`;

const ReviewBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 0px;
`;

const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
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
  cursor: pointer;

  &:hover {
    background-color: #cff4ff;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  margin-left: 240px;
`;

const Title = styled.div`
  margin-left: 10px;
`;

const BringPlanBtn = styled.button`
  width: 700px;
  height: 60px;
  margin: 0 auto;
  border-radius: 20px;
  border: none;
  font-size: 18px;
  background-color: #cff4ff;
  color: #238bad;
  margin: 25px 0;
  cursor: pointer;
`;

// const Step = ({ active }: { active?: boolean }) => {
//   // active prop 추가
//   return (
//     <StepCircle $active={active}>
//     </StepCircle>
//   );
// };

// const StepCircle = styled.div<{ $active?: boolean }>`
//   // $active로 수정
//   width: 30px;
//   height: 30px;
//   border-radius: 50%;
//   background-color: ${({ $active }) =>
//     $active ? '#5ac8ec' : '#e0e0e0'}; // $active로 수정
// `;

// #F43B3B 나중에 제목들 옆에 색깔 쪼꼬만 원 모양 넣어야함
