import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ToggleButton from '@/components/commons/buttons/ToggleButton';
import { ModernInput } from '@/components/commons/inputs/Input';
import CategoryButton from '@/components/commons/buttons/CategoryButton';
import { TitleWithCircle } from './TReviewCreate';
import { useUpdateTripMutation } from '@/hooks/useMutation'; // 여기에 추가됨
import styled from 'styled-components';

const EditTrip3 = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);
  const [isPublic, setIsPublic] = useState<boolean>(state?.isPublic || false);
  const [content, setContent] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [hasAttemptedSubmit] = useState<boolean>(false);

  useEffect(() => {
    console.log('Current state:', state);
  }, [state]);

  // useUpdateTripMutation 훅을 여기서 호출합니다.
  const updateMutation = useUpdateTripMutation();

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleTagClick = (
    tag: string,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    event.stopPropagation();
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      if (selectedTags.length >= 4) {
        alert('해시태그는 4개까지 선택 가능합니다.');
      } else {
        setSelectedTags([...selectedTags, tag]);
      }
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  // 여기에 제출 로직을 추가합니다.
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    if (!state || !state.tripId) {
      console.error('Trip ID 없음');
      alert('Trip ID 가 안보이네..');
      return;
    }

    const formData = new FormData();
    // 모든 데이터를 requestDto로 묶어서 JSON 문자열로 변환하여 전송
    formData.append(
      'requestDto',
      JSON.stringify({
        tripId: state.tripId,
        title: state.title,
        content: content,
        tripStartDate: state.tripStartDate,
        tripEndDate: state.tripEndDate,
        cost: state.cost,
        hashTag: selectedTags,
        address: state.address,
        placeName: state.placeName,
        isPublic: isPublic,
      }),
    );

    if (state.imageFiles.length > 0) {
      formData.append('thumbnail', state.imageFiles[0]);
    }
    state.imageFiles.slice(1).forEach((file: File) => {
      formData.append('imageList', file);
    });

    updateMutation.mutate({
      tripId: state.tripId,
      formData: formData,
    });

    localStorage.removeItem('editedReviewState');
    localStorage.removeItem('reviewState');
  };

  useEffect(() => {
    console.log(state);
    const storedData = localStorage.getItem('reviewState');
    if (storedData) {
      const initialData = JSON.parse(storedData);
      setContent(initialData.content || '');
      setSelectedTags(initialData.hashTag || []);
      setIsPublic(initialData.isPublic ?? false);
    }
  }, []);

  useEffect(() => {
    const storedData = localStorage.getItem('editedReviewState');
    if (storedData) {
      const initialData = JSON.parse(storedData);
      setContent(initialData.content || '');
      setSelectedTags(initialData.hashTag || []);
      setIsPublic(initialData.isPublic ?? false);
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: '700px', margin: '50px auto' }}
    >
      <div
        style={{
          fontSize: '28px',
          fontWeight: '600',
          textAlign: 'center',
          marginBottom: '50PX',
        }}
      >
        여행 정보 수정하기
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '100%' }}>
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
                value={state?.title || ''}
                readonly
                placeholder="제목"
                width={560}
                height={35}
                border="transparent"
                fontSize={16}
                fontWeight={'bold'}
              />
            </div>
            <ToggleButton
              isChecked={isPublic}
              onToggle={() => setIsPublic(!isPublic)}
            />
          </ReviewBoxWithSpaceBetween>
          <ReviewBox>
            <ReviewContent>
              <div>
                <TitleWithCircle>내용</TitleWithCircle>
              </div>
              {hasAttemptedSubmit && content.trim() === '' && (
                <ErrorMessage>내용을 입력해주세요</ErrorMessage>
              )}
              <ContentTextarea
                placeholder="내용을 입력해주세요"
                value={content}
                onChange={handleContentChange}
              />
            </ReviewContent>
          </ReviewBox>
          <HashTagContainer>
            <div style={{ display: 'flex' }}>
              <HashTagTitle>
                <TitleWithCircle>해시태그</TitleWithCircle>
              </HashTagTitle>
              <HashTagDescription>
                최대 4개를 선택할 수 있어요
              </HashTagDescription>
            </div>
          </HashTagContainer>
          {hasAttemptedSubmit && selectedTags.length === 0 && (
            <ErrorMessage>1개이상 선택해주세요</ErrorMessage>
          )}
          <div>
            <CategoryButtonContainer>
              {[
                '데이트',
                '가족여행',
                '친구',
                '나는 SOLO',
                '분위기',
                '힐링',
                '지역주민추천',
                '2030',
              ].map((tag) => (
                <CategoryButton
                  cursor="pointer"
                  key={tag}
                  title={tag}
                  onClick={(event) => handleTagClick(tag, event)}
                  selected={selectedTags.includes(tag)}
                />
              ))}
            </CategoryButtonContainer>
          </div>
          <ReviewBtnBox>
            <ReviewBottomSection>
              <ReviewBackButton type="button" onClick={handleBackClick}>
                뒤로
              </ReviewBackButton>
            </ReviewBottomSection>
            <ReviewBottomSection>
              <ReviewNextButton>수정하기</ReviewNextButton>
            </ReviewBottomSection>
          </ReviewBtnBox>
        </div>
      </div>
    </form>
  );
};

export default EditTrip3;

const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 14px;
`;

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
  margin-right: 20px;
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
