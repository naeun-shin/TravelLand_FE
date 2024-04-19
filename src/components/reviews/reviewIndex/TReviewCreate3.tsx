import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ToggleButton from '@/components/commons/buttons/ToggleButton';
import { ModernInput } from '@/components/commons/inputs/Input';
import styled from 'styled-components';
// import { TfiArrowCircleRight } from 'react-icons/tfi';
import CategoryButton from '@/components/commons/buttons/CategoryButton';

const TReviewCreate3 = () => {
  const navigate = useNavigate();
  const [isPublic, setIsPublic] = useState<boolean>(false);
  const [_, setTotalPlanTitle] = useState<string>('');
  // const [area, setArea] = useState<string>('');

  // const handleAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setArea(e.target.value);
  // };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTotalPlanTitle(e.target.value);
  };

  const toggleIsPublic = () => setIsPublic(!isPublic);

  // const handleNextClick = () => {
  //   navigate('/reviewCreate/2');
  // };

  const handleBackClick = () => {
    navigate('/reviewCreate/2');
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '100%' }}>
          <Title>제목</Title>
          <ReviewBoxWithSpaceBetween>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="/assets/icons/Rectangle.png"
                style={{ height: '40px' }}
              />
              <ModernInput
                type="text"
                placeholder="제목을 입력해주세요"
                width={570}
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

          <div>
            <ReviewBox>
              <ReviewContent>
                <div>내용</div>
                <ContentTextarea placeholder="내용을 입력해주세요" />
              </ReviewContent>
            </ReviewBox>
            <hr />
          </div>
          <div>
            <HashTagContainer>
              <HashTagTitle>해시태그</HashTagTitle>
              <HashTagDescription>
                최대 4개를 선택할 수 있어요
              </HashTagDescription>
            </HashTagContainer>
            <CategoryButtonContainer>
              <CategoryButton title="데이트" />
              <CategoryButton title="가족여행" />
              <CategoryButton title="친구" />
              <CategoryButton title="나는 SOLO" />
              <CategoryButton title="분위기" />
              <CategoryButton title="힐링" />
              <CategoryButton title="지역주민추천" />
              <CategoryButton title="2030" />
            </CategoryButtonContainer>
          </div>
        </div>
      </div>
      <ReviewBtnBox>
        <ReviewBottomSection>
          <ReviewBackButton onClick={handleBackClick}>뒤로</ReviewBackButton>
        </ReviewBottomSection>
        <ReviewBottomSection>
          <ReviewNextButton>작성하기</ReviewNextButton>
        </ReviewBottomSection>
      </ReviewBtnBox>
    </>
  );
};

export default TReviewCreate3;
const ReviewBtnBox = styled.div`
  display: flex;
  justify-content: center;
`;

const ReviewBackButton = styled.button`
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

const HashTagContainer = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px 0 0 0;
`;

const HashTagTitle = styled.div`
  font-weight: bold;
`;

const HashTagDescription = styled.div`
  color: #238bad;
  font-weight: 600;
`;
const CategoryButtonContainer = styled.div`
  display: flex;
  width: 400px;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0 80px 90px;
`;

const ContentTextarea = styled.textarea`
  width: 700px;
  height: 150px;
  /* border: 1px solid #ccc; */
  padding: 10px;
  font-size: 15px;
  margin: 10px 0;
  border-radius: 4px;
  border: none;
  resize: none;
`;

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

const Title = styled.div`
  margin-left: 10px;
`;
