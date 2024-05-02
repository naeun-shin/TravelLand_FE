import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ToggleButton from '@/components/commons/buttons/ToggleButton';
import { ModernInput } from '@/components/commons/inputs/Input';
import * as S from '@/components/reviews/reviewIndex/CreateEditStyle';
import {
  DateFieldsContainer,
  FieldContainer,
  Input,
  Label,
} from '@/pages/travelReview/TravelReview.styles';

const EditTrip = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const initialData = {
    ...state?.formData,
    tripId:
      state?.tripId ||
      JSON.parse(localStorage.getItem('reviewState') || '{}').tripId,
  };
  console.log('들어온 데이터 확인:', initialData);

  const [title, setTitle] = useState(initialData.title || '');
  const [isPublic, setIsPublic] = useState(initialData.isPublic ?? true);
  const [cost, setCost] = useState(initialData.cost?.toString() || '');
  const [address, setAddress] = useState(initialData.address || '');
  const [tripStartDate, setTripStartDate] = useState(
    initialData.tripStartDate || '',
  );
  const [tripEndDate, setTripEndDate] = useState(initialData.tripEndDate || '');
  const [placeName, setPlaceName] = useState(initialData.placeName || '');
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);

  useEffect(() => {
    const tripData = {
      title,
      isPublic,
      address,
      placeName,
      cost,
      tripStartDate,
      tripEndDate,
      tripId: initialData.tripId,
      content: initialData.content,
      hashTag: initialData.hashTag,
    };
    console.log('데이터 확인', tripData);
    localStorage.setItem('reviewState', JSON.stringify(tripData));
  }, [title, isPublic, address, placeName, cost, tripStartDate, tripEndDate]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const toggleIsPublic = () => {
    setIsPublic((prev: any) => !prev);
  };
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };
  const handlePlaceNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaceName(e.target.value);
  };
  const handleCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 숫자만 입력되도록 처리
    const value = e.target.value.replace(/\D/g, '');
    setCost(value);
  };
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTripStartDate(e.target.value);
  };
  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTripEndDate(e.target.value);
  };

  const handleSubmit = () => {
    setHasAttemptedSubmit(true);
    if (!title || !address || !placeName || !tripStartDate || !tripEndDate) {
      alert('모든 필수 입력 사항을 작성해주세요!');
      return;
    }
    const modifiedData = {
      ...initialData,
      title,
      isPublic,
      address,
      placeName,
      cost,
      tripStartDate,
      tripEndDate,
    };
    console.log('수정 데이터 확인', modifiedData);
    localStorage.setItem('editedReviewState', JSON.stringify(modifiedData));
    navigate('/editTrip/2', { state: modifiedData });
  };

  return (
    <form style={{ width: '700px', margin: '50px auto' }}>
      <h2 style={{ width: '200px', margin: '50px auto', fontSize: '26px' }}>
        여행 정보 수정하기
      </h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '100%' }}>
          <div>
            <S.Title>
              <S.TitleWithCircle>제목</S.TitleWithCircle>
            </S.Title>
            <S.ReviewBoxWithSpaceBetween>
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
                  value={title}
                />
                {hasAttemptedSubmit && title === '' && (
                  <S.ErrorMessage>제목을 입력해주세요</S.ErrorMessage>
                )}
              </div>

              <div>
                <ToggleButton isChecked={isPublic} onToggle={toggleIsPublic} />
              </div>
            </S.ReviewBoxWithSpaceBetween>
          </div>
          <div>
            <div>
              <S.ReviewBox>
                <S.ReviewContent>
                  <div>
                    <S.TitleWithCircle>지역</S.TitleWithCircle>
                  </div>
                  <ModernInput
                    type="text"
                    placeholder="지역을 입력해주세요 (예: 서울시 강남구 역삼동)"
                    width={400}
                    height={30}
                    border="transparent"
                    fontSize={16}
                    onChange={handleAddressChange}
                    value={address}
                  />
                  {hasAttemptedSubmit && address === '' && (
                    <S.ErrorMessage>지역을 입력해주세요</S.ErrorMessage>
                  )}
                </S.ReviewContent>
              </S.ReviewBox>
              <hr />
              <S.ReviewBox>
                <S.ReviewContent>
                  <div>
                    <S.TitleWithCircle>위치</S.TitleWithCircle>
                  </div>
                  <ModernInput
                    type="text"
                    placeholder="위치를 입력해주세요 (예: 메가박스, CGV)"
                    width={400}
                    height={30}
                    border="transparent"
                    fontSize={16}
                    onChange={handlePlaceNameChange}
                    value={placeName}
                  />
                  {hasAttemptedSubmit && placeName === '' && (
                    <S.ErrorMessage>위치를 입력해주세요</S.ErrorMessage>
                  )}
                </S.ReviewContent>
              </S.ReviewBox>
              <hr />
              <S.ReviewBox>
                <S.ReviewContent>
                  <div>
                    <S.TitleWithCircle>예산</S.TitleWithCircle>
                  </div>
                  <ModernInput
                    type="text"
                    placeholder="예산을 입력해주세요"
                    width={400}
                    height={30}
                    border="transparent"
                    fontSize={16}
                    onChange={handleCostChange}
                    value={cost}
                  />
                  {hasAttemptedSubmit && cost === '' && (
                    <S.ErrorMessage>예산을 입력해주세요</S.ErrorMessage>
                  )}
                </S.ReviewContent>
              </S.ReviewBox>
              <hr />
              <DateFieldsContainer>
                <FieldContainer>
                  <Label>
                    <S.TitleWithCircle>여행 시작일</S.TitleWithCircle>
                  </Label>
                  <Input
                    type="date"
                    value={tripStartDate}
                    onChange={handleStartDateChange}
                  />
                  {hasAttemptedSubmit && tripStartDate === '' && (
                    <S.ErrorMessage>여행 시작일을 입력해주세요</S.ErrorMessage>
                  )}
                </FieldContainer>
                <FieldContainer>
                  <Label>
                    <S.TitleWithCircle>여행 종료일</S.TitleWithCircle>
                  </Label>
                  <Input
                    type="date"
                    value={tripEndDate}
                    onChange={handleEndDateChange}
                  />
                  {hasAttemptedSubmit && tripEndDate === '' && (
                    <S.ErrorMessage>여행 종료일을 입력해주세요</S.ErrorMessage>
                  )}
                </FieldContainer>
              </DateFieldsContainer>
            </div>
          </div>
        </div>
      </div>
      <S.ReviewBottomSection>
        <S.ReviewNextButton onClick={handleSubmit}>다음</S.ReviewNextButton>
      </S.ReviewBottomSection>
    </form>
  );
};

export default EditTrip;
