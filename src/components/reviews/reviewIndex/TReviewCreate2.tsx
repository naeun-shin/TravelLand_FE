import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ModernInput } from '@/components/commons/inputs/Input';
import styled from 'styled-components';
import { TitleWithCircle } from './TReviewCreate';
import ToggleButton from '@/components/commons/buttons/ToggleButton';

const ReviewCreate2 = () => {
  const navigate = useNavigate();
  const location = useLocation(); // useLocation을 사용하여 이전 페이지의 데이터 접근
  const { state } = location;
  const { totalReviewTitle } = useParams(); // URL 매개변수에서 데이터 읽기
  const [isPublic, setIsPublic] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(state?.title || ''); // 상태 이름 수정
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  // const [step, setStep] = useState<number>(1);

  // totalPlanTitle이 변경될 때마다 해당 값을 설정
  useEffect(() => {
    if (totalReviewTitle) {
      setTitle(totalReviewTitle);
    }
  }, [totalReviewTitle]);

  // const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(e.target.value); // 상태 업데이트 함수 수정
  // };

  const toggleIsPublic = () => setIsPublic(!isPublic);

  const handleNextClick = () => {
    navigate('/reviewCreate/3', {
      state: { ...state, imageFiles, isPublic },
    });
  };
  // 뒤로가기
  const handleBackClick = () => {
    navigate(-1);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileList = Array.from(event.target.files).slice(
        0,
        5 - imageFiles.length,
      );
      setImageFiles([...imageFiles, ...fileList]);
    }
  };

  const handleAddImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleRemoveImage = (index: number) => {
    const newImageFiles = [...imageFiles];
    newImageFiles.splice(index, 1);
    setImageFiles(newImageFiles);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '100%' }}>
          <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto' }}>
            <Title>
              <TitleWithCircle>제목</TitleWithCircle>
            </Title>
            <ReviewBoxWithSpaceBetween>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src="/assets/icons/Rectangle.png"
                  style={{ height: '40px' }}
                />
                <ModernInput
                  type="text"
                  readonly
                  value={title}
                  placeholder="제목을 입력해주세요"
                  width={400}
                  height={35}
                  border="transparent"
                  fontSize={16}
                  fontWeight={'bold'}
                />
              </div>
              <div>
                <ToggleButton isChecked={!isPublic} onToggle={toggleIsPublic} />
              </div>
            </ReviewBoxWithSpaceBetween>
          </div>
          <PhotoBox>
            {imageFiles.map((file, index) => (
              <ImagePreview key={index}>
                <img
                  src={URL.createObjectURL(file)}
                  alt={`preview ${index}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <RemoveButton onClick={() => handleRemoveImage(index)}>
                  X
                </RemoveButton>
              </ImagePreview>
            ))}
          </PhotoBox>
          <div>
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
              <BringPlanBtn onClick={handleAddImageClick}>
                + 사진 추가하기
              </BringPlanBtn>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                onChange={handleImageChange}
                accept="image/*"
                style={{ display: 'none' }}
              />
            </div>
            <PhotoText>사진은 최대 5장까지 추가할 수 있어요</PhotoText>
          </div>
        </div>
      </div>
      <ReviewBtnBox>
        <ReviewBottomSection>
          <ReviewBackButton onClick={handleBackClick}>뒤로</ReviewBackButton>
        </ReviewBottomSection>
        <ReviewBottomSection>
          <ReviewNextButton onClick={handleNextClick}>다음</ReviewNextButton>
        </ReviewBottomSection>
      </ReviewBtnBox>
    </>
  );
};

export default ReviewCreate2;

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
  margin-top: 50px;
`;

const BringPlanBtn = styled.button`
  width: 700px;
  height: 60px;
  border-radius: 20px;
  border: none;
  font-size: 18px;
  background-color: #cff4ff;
  color: #238bad;
  cursor: pointer;
  margin: 30px 0 0 0;
`;

const ReviewBoxWithSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    padding-left: 5px;
  }
`;

const PhotoText = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 300px;
  color: #238bad;
  margin-bottom: 70px;
`;

const ReviewBtnBox = styled.div`
  display: flex;
  justify-content: center;
`;

const PhotoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1300px;
  margin: 10px auto;
`;

const ImagePreview = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 4px;
  margin-right: 20px;
  margin-top: 40px;
`;

const RemoveButton = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 5px;
  right: 5px;
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: #fff;
  }
`;
