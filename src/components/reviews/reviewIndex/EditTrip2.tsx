import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ModernInput } from '@/components/commons/inputs/Input';
import ToggleButton from '@/components/commons/buttons/ToggleButton';
import styled from 'styled-components';
import { TitleWithCircle } from './TReviewCreate';

const EditTrip2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const [isPublic, setIsPublic] = useState<boolean>(state?.isPublic || false);
  const [title, setTitle] = useState<string>(state?.title || '');
  const [imageFiles, setImageFiles] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState<boolean>(false);

  useEffect(() => {
    const savedData = localStorage.getItem('editTripData');
    if (savedData) {
      const data = JSON.parse(savedData);
      setIsPublic(data.isPublic);
      setTitle(data.title);
      setImageFiles(data.imageFiles || []);
    }
  }, []);

  const toggleIsPublic = () => setIsPublic((prev) => !prev);

  const handleNextClick = () => {
    setHasAttemptedSubmit(true);
    if (imageFiles.length === 0) {
      alert('사진을 1장 이상 선택해주세요.');
    } else {
      const editedData = {
        title,
        isPublic,
        imageFiles,
      };
      localStorage.setItem('editTripData', JSON.stringify(editedData));
      navigate('/editTrip/3', {
        state: { ...state, title, isPublic, imageFiles },
      });
    }
  };

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      const newImageFiles = await Promise.all(
        files.map((file) => {
          return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
            reader.readAsDataURL(file);
          });
        }),
      );

      setImageFiles((prevImages) => [...prevImages, ...newImageFiles]);
      localStorage.setItem(
        'editTripData',
        JSON.stringify({
          ...state,
          imageFiles: [...imageFiles, ...newImageFiles],
          title,
          isPublic,
        }),
      );
    }
  };

  const handleAddImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = imageFiles.filter((_, i) => i !== index);
    setImageFiles(updatedImages);
    localStorage.setItem(
      'editTripData',
      JSON.stringify({
        ...state,
        imageFiles: updatedImages,
        title,
        isPublic,
      }),
    );
  };

  const handleBackClick = () => {
    navigate(-1);
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
                <ToggleButton isChecked={isPublic} onToggle={toggleIsPublic} />
              </div>
            </ReviewBoxWithSpaceBetween>
          </div>
          <PhotoBox>
            {imageFiles.map((fileURL, index) => (
              <ImagePreview key={index}>
                <img
                  src={fileURL}
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
              {hasAttemptedSubmit && imageFiles.length === 0 && (
                <ErrorMessage>사진을 1장 이상 선택해주세요.</ErrorMessage>
              )}
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

export default EditTrip2;

const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 14px;
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
  margin-bottom: 500px;

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
  /* margin-bottom: 150px; */

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
  max-width: 250px;
  color: #238bad;
  margin-bottom: 50px;
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
