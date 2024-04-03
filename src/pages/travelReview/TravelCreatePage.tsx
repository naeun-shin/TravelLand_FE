import React, { useState } from 'react';
import styled from 'styled-components';

const TravelCreateForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tripStartDate, setTripStartDate] = useState('');
  const [tripEndDate, setTripEndDate] = useState('');
  const [cost, setCost] = useState('');
  const [area, setArea] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [imageList, setImageList] = useState<File[]>([]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImageList([...imageList, ...Array.from(event.target.files)]);
    }
  };

  return (
    <FormWrapper>
      <Label htmlFor="image-upload">이미지 업로드:</Label>
      <Input
        id="image-upload"
        type="file"
        multiple
        onChange={handleImageChange}
      />

      <Label htmlFor="title">제목:</Label>
      <Input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Label htmlFor="content">내용:</Label>
      <Textarea
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <Label htmlFor="trip-start-date">여행 시작 일자:</Label>
      <Input
        id="trip-start-date"
        type="date"
        value={tripStartDate}
        onChange={(e) => setTripStartDate(e.target.value)}
      />

      <Label htmlFor="trip-end-date">여행 종료 일자:</Label>
      <Input
        id="trip-end-date"
        type="date"
        value={tripEndDate}
        onChange={(e) => setTripEndDate(e.target.value)}
      />

      <Label htmlFor="cost">가격:</Label>
      <Input
        id="cost"
        type="number"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />

      <Label htmlFor="area">지역:</Label>
      <Input
        id="area"
        type="text"
        value={area}
        onChange={(e) => setArea(e.target.value)}
      />

      <Label htmlFor="public">공개 여부:</Label>
      <Input
        id="public"
        type="checkbox"
        checked={isPublic}
        onChange={(e) => setIsPublic(e.target.checked)}
      />

      <SubmitButton onClick={handleSubmit}>후기 작성하기</SubmitButton>
    </FormWrapper>
  );
};

export default TravelCreateForm;

const FormWrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  margin: 10px 0;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Label = styled.label`
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
`;
