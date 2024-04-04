import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCamera, FaTimes } from 'react-icons/fa';
import ToggleButton from '@/components/commons/buttons/ToggleButton';
import Header from '@/components/layouts/Header';

interface TravelCreateFormProps {}

const TravelCreateForm: React.FC<TravelCreateFormProps> = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [tripStartDate, setTripStartDate] = useState<string>('');
  const [tripEndDate, setTripEndDate] = useState<string>('');
  const [cost, setCost] = useState<string>('');
  const [area, setArea] = useState<string>('');
  const [isPublic, setIsPublic] = useState<boolean>(true);
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileList = Array.from(event.target.files).slice(
        0,
        5 - imageFiles.length,
      );
      setImageFiles([...imageFiles, ...fileList]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImageFiles(imageFiles.filter((_, i) => i !== index));
  };

  // 토글
  const toggleIsPublic = () => setIsPublic(!isPublic);

  // 이미지 파일 리스트를 이미지 미리보기
  const imagePreviews = imageFiles.map((file, index) => (
    <ImagePreview key={index}>
      <FaTimesCircle onClick={() => handleRemoveImage(index)} />
      <img src={URL.createObjectURL(file)} alt={`preview ${index}`} />
    </ImagePreview>
  ));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <Header />
      <Form onSubmit={handleSubmit}>
        <FieldContainer>
          <ImageUploadSection>
            <ImageUploadContainer>
              <ImageUploadInput
                id="image-upload"
                type="file"
                multiple
                onChange={handleImageChange}
                accept="image/*"
              />
              <ImageUploadLabel htmlFor="image-upload">
                <FaCameraIcon />
              </ImageUploadLabel>
            </ImageUploadContainer>
          </ImageUploadSection>
          <ImagePreviewSection>
            <ImagePreviewContainer>{imagePreviews}</ImagePreviewContainer>
          </ImagePreviewSection>
        </FieldContainer>

        <FieldContainer>
          <Label>제목</Label>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="여행의 제목을 입력하세요"
          />
        </FieldContainer>

        <FieldContainer>
          <Label>내용</Label>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="여행에 대한 내용을 입력해주세요!"
          />
        </FieldContainer>

        <DateFieldsContainer>
          <FieldContainer>
            <Label>여행 시작일</Label>
            <Input
              type="date"
              value={tripStartDate}
              onChange={(e) => setTripStartDate(e.target.value)}
            />
          </FieldContainer>
          <FieldContainer>
            <Label>여행 종료일</Label>
            <Input
              type="date"
              value={tripEndDate}
              onChange={(e) => setTripEndDate(e.target.value)}
            />
          </FieldContainer>
        </DateFieldsContainer>

        <FieldContainer>
          <Label>여행 비용</Label>
          <Input
            type="text"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            placeholder="여행의 예상 비용을 입력해주세요."
          />
        </FieldContainer>

        <FieldContainer>
          <Label>여행 지역</Label>
          <Input
            type="text"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="여행 지역을 입력해주세요."
          />
        </FieldContainer>

        <FieldContainer>
          <FieldContainer>
            <Label>공개/비공개:</Label>
            <ToggleButton isChecked={isPublic} onToggle={toggleIsPublic} />
          </FieldContainer>
        </FieldContainer>

        <SubmitButton type="submit">후기 작성하기</SubmitButton>
      </Form>
    </>
  );
};

export default TravelCreateForm;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const DateFieldsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 80%;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f8f8f8;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Input = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  width: 100%;
  max-width: 600px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  height: 150px;
  resize: none;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #3e3e3e;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #212121;
  }
`;

// 이미지
const ImageUploadContainer = styled.div`
  text-align: center;
`;

const ImageUploadLabel = styled.label`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ddd;
  color: #444;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px 0;

  &:hover {
    background-color: #ccc;
  }
`;
const ImageUploadSection = styled.div`
  /* 이미지 업로드 버튼을 감싸는 섹션 */
`;

const ImagePreviewSection = styled.div`
  /* 이미지 미리보기를 감싸는 섹션 */
  margin-top: 10px;
`;

const ImageUploadInput = styled.input`
  display: none;
`;

const ImagePreviewContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;
const FaCameraIcon = styled(FaCamera)`
  width: 30px;
  height: 30px;
  padding: 10px;
  cursor: pointer;
`;

const FaTimesCircle = styled(FaTimes)`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  color: red;
  background: white;
  border-radius: 50%;
`;

const ImagePreview = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 4px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
