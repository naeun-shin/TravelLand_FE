import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ToggleButton from '@/components/commons/buttons/ToggleButton';
import { ModernInput } from '@/components/commons/inputs/Input';
import styled from 'styled-components';
import {
  DateFieldsContainer,
  FieldContainer,
  Input,
  Label,
} from '@/pages/travelReview/TravelReview.styles';

const EditTrip = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const initialData =
    state?.formData || JSON.parse(localStorage.getItem('reviewState') || '{}');

  console.log('들어온데이터 확인:', initialData);

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
    // 숫자가 아닌 모든 문자를 제거합니다.
    const value = e.target.value.replace(/\D/g, '');
    // 숫자만 있는 문자열을 콤마를 포함한 포맷으로 변환합니다.
    const formattedValue = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    // 유효한 숫자가 입력되었거나 입력 필드가 비워진 경우에만 상태를 업데이트합니다.
    if (!isNaN(parseFloat(value)) || value === '') {
      setCost(formattedValue);
    }
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
      title,
      isPublic,
      address,
      placeName,
      cost,
      tripStartDate,
      tripEndDate,
      content: '',
      hashTag: [],
    };
    console.log('수정 데이터 확인', modifiedData);
    localStorage.setItem('editedReviewState', JSON.stringify(modifiedData));
    navigate('/editTrip/2', { state: modifiedData });
  };

  //   useEffect(() => {
  //     try {
  //       const storedData = localStorage.getItem('editedReviewState');
  //       const initialData = storedData ? JSON.parse(storedData) : {};
  //       setTitle(initialData.title || '');
  //       setIsPublic(initialData.isPublic ?? true);
  //       setAddress(initialData.address || '');
  //       setPlaceName(initialData.placeName || '');
  //       setCost(initialData.cost?.toString() || '');
  //       setTripStartDate(initialData.tripStartDate || '');
  //       setTripEndDate(initialData.tripEndDate || '');
  //     } catch (error) {
  //       console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
  //       alert('저장된 데이터를 불러오는 데 실패했습니다.');
  //     }
  //   }, [initialData]);

  return (
    <form style={{ width: '700px', margin: '50px auto' }}>
      <h2 style={{ width: '200px', margin: '50px auto', fontSize: '26px' }}>
        여행 정보 수정하기
      </h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '100%' }}>
          <div>
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
                  <ErrorMessage>제목을 입력해주세요</ErrorMessage>
                )}
              </div>

              <div>
                <ToggleButton isChecked={isPublic} onToggle={toggleIsPublic} />
              </div>
            </ReviewBoxWithSpaceBetween>
          </div>
          <div>
            <div>
              <ReviewBox>
                <ReviewContent>
                  <div>
                    <TitleWithCircle>지역</TitleWithCircle>
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
                    <ErrorMessage>지역을 입력해주세요</ErrorMessage>
                  )}
                </ReviewContent>
              </ReviewBox>
              <hr />
              <ReviewBox>
                <ReviewContent>
                  <div>
                    <TitleWithCircle>위치</TitleWithCircle>
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
                    <ErrorMessage>위치를 입력해주세요</ErrorMessage>
                  )}
                </ReviewContent>
              </ReviewBox>
              <hr />
              <ReviewBox>
                <ReviewContent>
                  <div>
                    <TitleWithCircle>예산</TitleWithCircle>
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
                    <ErrorMessage>예산을 입력해주세요</ErrorMessage>
                  )}
                </ReviewContent>
              </ReviewBox>
              <hr />
              <DateFieldsContainer>
                <FieldContainer>
                  <Label>
                    <TitleWithCircle>여행 시작일</TitleWithCircle>
                  </Label>
                  <Input
                    type="date"
                    value={tripStartDate}
                    onChange={handleStartDateChange}
                  />
                  {hasAttemptedSubmit && tripStartDate === '' && (
                    <ErrorMessage>여행 시작일을 입력해주세요</ErrorMessage>
                  )}
                </FieldContainer>
                <FieldContainer>
                  <Label>
                    <TitleWithCircle>여행 종료일</TitleWithCircle>
                  </Label>
                  <Input
                    type="date"
                    value={tripEndDate}
                    onChange={handleEndDateChange}
                  />
                  {hasAttemptedSubmit && tripEndDate === '' && (
                    <ErrorMessage>여행 종료일을 입력해주세요</ErrorMessage>
                  )}
                </FieldContainer>
              </DateFieldsContainer>
            </div>
          </div>
        </div>
      </div>
      <ReviewBottomSection>
        <ReviewNextButton onClick={handleSubmit}>다음</ReviewNextButton>
      </ReviewBottomSection>
    </form>
  );
};

export default EditTrip;

const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 14px;
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
  align-items: 'flex-start';
  padding: 10px 0px;
`;

const ReviewContent = styled.div`
  display: flex;
  padding: 5px;
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

// const BringPlanBtn = styled.button`
//   width: 700px;
//   height: 60px;
//   margin: 0 auto;
//   border-radius: 20px;
//   border: none;
//   font-size: 18px;
//   background-color: #cff4ff;
//   color: #238bad;
//   margin: 25px 0;
//   cursor: pointer;
// `;

export const TitleWithCircle = styled.span`
  position: relative;
  margin-right: 5px;

  &::before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: #f43b3b;
    border-radius: 50%;
    top: -3px;
    right: -10px;
  }
`;
