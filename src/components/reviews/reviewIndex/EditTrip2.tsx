import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ModernInput } from '@/components/commons/inputs/Input';
import ToggleButton from '@/components/commons/buttons/ToggleButton';
import * as S from '@/components/reviews/reviewIndex/CreateEditStyle';

const EditTrip2 = () => {
  const navigate = useNavigate();
  const location = useLocation(); // useLocation을 사용하여 이전 페이지의 데이터 접근
  const { state } = location;
  const { tripId } = state;
  const { totalReviewTitle } = useParams(); // URL 매개변수에서 데이터 읽기
  const [isPublic, setIsPublic] = useState<boolean>(state?.isPublic || false);
  const [title, setTitle] = useState<string>(state?.title || ''); // 상태 이름 수정
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState<boolean>(false);

  // totalPlanTitle이 변경될 때마다 해당 값을 설정
  useEffect(() => {
    if (totalReviewTitle) {
      setTitle(totalReviewTitle);
    }
  }, [totalReviewTitle]);

  useEffect(() => {
    console.log('EditTrip2 State:', state);
  }, [state]);

  const toggleIsPublic = () => setIsPublic(!isPublic);

  const handleNextClick = async () => {
    setHasAttemptedSubmit(true);

    if (imageFiles.length === 0) {
      alert('사진을 1장 이상 선택해주세요.');
      return;
    }

    // LocalStorage에 상태 저장하기
    try {
      // 이미지 파일을 DataURL로 변환하여 저장합니다.
      const imageUrls = await Promise.all(
        imageFiles.map((file) => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (e) => resolve(e);
            reader.onerror = (e) => reject(e);
            reader.readAsDataURL(file);
          });
        }),
      );

      const reviewData = { title, isPublic, imageFiles: imageUrls };
      localStorage.setItem('reviewData', JSON.stringify(reviewData));

      navigate('/editTrip/3', {
        state: { ...state, imageFiles, isPublic, title, tripId },
      });
    } catch (error) {
      console.error('Error converting image files:', error);
      alert('이미지 파일 처리 중 오류가 발생했습니다.');
    }
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
      event.target.value = '';
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
            <S.Title2>
              <S.TitleWithCircle>제목</S.TitleWithCircle>
            </S.Title2>
            <S.ReviewBoxWithSpaceBetween>
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
            </S.ReviewBoxWithSpaceBetween>
          </div>
          <S.PhotoBox>
            {imageFiles.map((file, index) => (
              <S.ImagePreview key={index}>
                <img
                  src={URL.createObjectURL(file)}
                  alt={`preview ${index}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <S.RemoveButton onClick={() => handleRemoveImage(index)}>
                  X
                </S.RemoveButton>
              </S.ImagePreview>
            ))}
          </S.PhotoBox>
          <div>
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
              {hasAttemptedSubmit && imageFiles.length === 0 && (
                <S.ErrorMessage>사진을 1장 이상 선택해주세요.</S.ErrorMessage>
              )}
              <S.BringPlanBtn onClick={handleAddImageClick}>
                + 사진 추가하기
              </S.BringPlanBtn>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                onChange={handleImageChange}
                accept="image/*"
                style={{ display: 'none' }}
              />
            </div>
            <S.PhotoText>사진은 최대 5장까지 추가할 수 있어요</S.PhotoText>
          </div>
        </div>
      </div>
      <S.ReviewBtnBox>
        <S.ReviewBottomSection>
          <S.ReviewBackButton onClick={handleBackClick}>
            뒤로
          </S.ReviewBackButton>
        </S.ReviewBottomSection>
        <S.ReviewBottomSection>
          <S.ReviewNextButton onClick={handleNextClick}>
            다음
          </S.ReviewNextButton>
        </S.ReviewBottomSection>
      </S.ReviewBtnBox>
    </>
  );
};

export default EditTrip2;
