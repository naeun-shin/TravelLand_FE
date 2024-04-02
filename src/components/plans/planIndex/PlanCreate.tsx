import React from 'react';

const PlanCreate = () => {
  return (
    <>
      <div>
        <h3>[일본 | 도쿄] 일본 여행</h3>
        <div>온오프 버튼</div>
      </div>
      <div>
        {/* 플랜 계획 첫페이지 */}
        <div>
          {/* 작성자 칸 */}
          <div>
            <img />
            <div>writer</div>
          </div>
          {/* 지역 */}
          <div>
            <div>아이콘</div>
            <div>
              <h3>지역</h3>
              <div>일본 - 도쿄</div>
            </div>
          </div>
          {/*예산 */}
          <div>
            <div>아이콘</div>
            <div>
              <h3>예산</h3>
              <div>120,000원</div>
            </div>
          </div>
          {/*기간 */}
          <div>
            <div>아이콘</div>
            <div>
              <h3>여행 기간</h3>
              {/* 버튼 클릭 시 달력 모달 생성 */}
              <div>버튼</div>
            </div>
          </div>
          {/*초대 */}
          <div>
            <div>아이콘</div>
            <div>
              <h3>초대하기</h3>
              <div>
                <div>{/* 초대된 사람들 노출 및 취소처리 구간 */}</div>
                <div>버튼</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* 다음 버튼 */}
        <button>다음</button>
      </div>
    </>
  );
};

export default PlanCreate;
