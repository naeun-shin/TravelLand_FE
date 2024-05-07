import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ToggleButton from '@/components/commons/buttons/ToggleButton';
import { ModernInput } from '@/components/commons/inputs/Input';
import * as S from '@/components/reviews/reviewIndex/CreateEditStyle';
import {
  DateFieldsContainer,
  FieldContainer,
  Input,
  Label,
} from '@/components/reviews/reviewIndex/TravelReviewPage.styles';

const ReviewCreate = () => {
  const navigate = useNavigate();
  const savedState = JSON.parse(localStorage.getItem('reviewState') || '{}');

  // 상태 관리 변수들
  const [title, setTitle] = useState<string>(savedState.title || '');
  const [isPublic, setIsPublic] = useState<boolean>(
    savedState.isPublic ?? true,
  );
  const [cost, setCost] = useState<string>(savedState.cost?.toString() || '');
  const [address, setAddress] = useState<string>(savedState.address || '');
  const [tripStartDate, setTripStartDate] = useState<string>(
    savedState.tripStartDate || '',
  );
  const [tripEndDate, setTripEndDate] = useState<string>(
    savedState.tripEndDate || '',
  );
  const [placeName, setPlaceName] = useState<string>(
    savedState.placeName || '',
  );
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState<boolean>(false);

  useEffect(() => {
    // 상태가 바뀔 때마다 업데이트 X / 다음 버튼 클릭 시에만 업데이트됨
    const tripData = {
      title,
      isPublic,
      address,
      placeName,
      cost,
      tripStartDate,
      tripEndDate,
    };
    localStorage.setItem('reviewState', JSON.stringify(tripData));
  }, [title, isPublic, address, placeName, cost, tripStartDate, tripEndDate]);

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem('reviewState') || '{}');
    setTitle(savedState.title || '');
    setIsPublic(savedState.isPublic ?? true);
    setCost(savedState.cost || '');
    setAddress(savedState.address || '');
    setTripStartDate(savedState.tripStartDate || '');
    setTripEndDate(savedState.tripEndDate || '');
    setPlaceName(savedState.placeName || '');
  }, []);

  // 각 입력 필드의 변화를 다루는 함수들
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const toggleIsPublic = () => {
    setIsPublic((prev) => !prev);
  };
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };
  const handlePlaceNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaceName(e.target.value);
  };
  const handleCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // 숫자가 아닌 모든 문자 제거
    const formattedValue = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'); // 숫자 포맷팅
    setCost(formattedValue);
  };
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTripStartDate(e.target.value);
  };
  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTripEndDate(e.target.value);
  };

  // '여행 플랜 불러오기' 버튼 클릭 처리
  const handleBringPlanClick = () => {
    alert('여행 플랜 불러오기 기능은 아직 개발 중입니다!');
  };

  // '다음' 버튼 클릭을 처리
  const handleNextClick = () => {
    setHasAttemptedSubmit(true);
    // 필수 입력 사항 확인
    if (
      title === '' ||
      address === '' ||
      placeName === '' ||
      tripStartDate === '' ||
      tripEndDate === ''
    ) {
      alert('모든 필수 입력 사항을 작성해주세요!');
      return; // 다음 단계로 넘어가지 않음
    }

    const formattedCost = cost.replace(/,/g, '');
    const numericCost = parseFloat(formattedCost);
    // 입력된 데이터를 객체로 생성하여 2단계 페이지로 넘김!
    const tripData = {
      title,
      isPublic,
      address,
      placeName,
      cost: numericCost,
      tripStartDate,
      tripEndDate,
      // 2단계에서 입력받을 나머지 데이터들 일단 빈값으로 둠!
      content: '',
      hashTag: [],
    };
    localStorage.setItem('reviewState', JSON.stringify(tripData));
    navigate('/reviewCreate/2', { state: tripData });
  };

  return (
    <>
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
              <S.BringPlanBtn onClick={handleBringPlanClick}>
                {' '}
                + 여행 플랜 불러오기
              </S.BringPlanBtn>
              {/* 지역 입력 */}
              <S.ReviewBox>
                <S.ReviewContent>
                  <div>
                    <S.TitleWithCircle>지역</S.TitleWithCircle>
                  </div>
                  {/* 지역 입력 여부 확인 */}
                  {hasAttemptedSubmit && address === '' && (
                    <S.ErrorMessage>지역을 입력해주세요</S.ErrorMessage>
                  )}
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
                </S.ReviewContent>
              </S.ReviewBox>
              <hr />
              {/* 위치 입력 */}
              <S.ReviewBox>
                <S.ReviewContent>
                  <div>
                    <S.TitleWithCircle>위치</S.TitleWithCircle>
                  </div>
                  {/* 위치 입력 여부 확인 */}
                  {hasAttemptedSubmit && placeName === '' && (
                    <S.ErrorMessage>위치를 입력해주세요</S.ErrorMessage>
                  )}
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
                </S.ReviewContent>
              </S.ReviewBox>
              <hr />
              {/* 예산 입력 */}
              <S.ReviewBox>
                <S.ReviewContent>
                  <div>
                    <S.TitleWithCircle>예산</S.TitleWithCircle>
                  </div>
                  {/* 예산 입력 여부 확인 */}
                  {hasAttemptedSubmit && cost === '' && (
                    <S.ErrorMessage>예산을 입력해주세요</S.ErrorMessage>
                  )}
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
                </S.ReviewContent>
              </S.ReviewBox>
              <hr />
              {/* 여행 날짜 입력 */}
              <S.ReviewBox>
                <DateFieldsContainer>
                  <FieldContainer>
                    <Label>
                      <S.TitleWithCircle>여행 시작일</S.TitleWithCircle>
                    </Label>
                    {/* 여행 시작일 입력 여부 확인 */}
                    {hasAttemptedSubmit && tripStartDate === '' && (
                      <S.ErrorMessage>
                        여행 시작일을 입력해주세요
                      </S.ErrorMessage>
                    )}
                    <Input
                      type="date"
                      value={tripStartDate}
                      onChange={handleStartDateChange}
                    />
                  </FieldContainer>
                  <FieldContainer>
                    <Label>
                      <S.TitleWithCircle>여행 종료일</S.TitleWithCircle>
                    </Label>
                    {/* 여행 종료일 입력 여부 확인 */}
                    {hasAttemptedSubmit && tripEndDate === '' && (
                      <S.ErrorMessage>
                        여행 종료일을 입력해주세요
                      </S.ErrorMessage>
                    )}
                    <Input
                      type="date"
                      value={tripEndDate}
                      onChange={handleEndDateChange}
                    />
                  </FieldContainer>
                </DateFieldsContainer>
              </S.ReviewBox>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <S.ReviewBottomSection>
        {/* 다음 버튼 클릭시 필수 입력 사항 확인 */}
        <S.ReviewNextButton onClick={handleNextClick}>다음</S.ReviewNextButton>
      </S.ReviewBottomSection>
    </>
  );
};

export default ReviewCreate;
