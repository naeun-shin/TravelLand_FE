import * as S from '@/components/reviews/reviewIndex/TReviewPageStyle';
import TReviewCreate3 from '@/components/reviews/reviewIndex/TReviewCreate3';
import { useState } from 'react';

const ReviewCreate3 = () => {
  const [step, _] = useState<number>(3);

  return (
    <>
      <S.CenteredContainer3>
        <h2>여행 정보 작성하기</h2>
        <S.StepperContainer>
          <S.ProgressBar width={(step * 33.5).toString() + '%'} />
        </S.StepperContainer>
        <TReviewCreate3 />
      </S.CenteredContainer3>
    </>
  );
};

export default ReviewCreate3;
