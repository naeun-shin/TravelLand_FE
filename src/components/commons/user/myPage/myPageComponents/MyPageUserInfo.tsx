// import { NicknameModal } from '@/components/commons/modals/Modal';
import { LoadingComponent } from '@/components/layouts/LoadingComponent';
import { useGetUerInfoQuery } from '@/hooks/useQuery/useUserQuery';
import * as S from '@components/commons/user/myPage/MyPage.style';
// import { useState } from 'react';

const MyPageUserInfo = () => {
  const { data, isLoading, isError } = useGetUerInfoQuery();

  const userData = data?.data;
  if (isLoading)
    return (
      <div>
        <div>{LoadingComponent()}</div>
      </div>
    );
  if (isError) return <div>Error occurred during fetching</div>;
  return (
    <>
      <S.MyPageContainer>
        {' '}
        <S.UserInfoContainer>
          {/* 유저 정보 영역 */}
          {/* 이미지 */}
          <img src={userData.profileImage} />
          {/* 닉네임 & 이메일 */}
          <S.UserInfoCotent>
            <S.UserInfoContentName>
              <div>{userData.nickname}</div>
              <div>{userData.email}</div>
            </S.UserInfoContentName>
            {/* 회원정보 수정하기 버튼 */}
            {/* <button
              onClick={() => {
                handleModalOpen();
              }}
            >
              회원정보 수정하기
            </button> */}
          </S.UserInfoCotent>
        </S.UserInfoContainer>
        {/* 빈 박스 영역 */}
        <S.UserOtherInfoContainer />
      </S.MyPageContainer>
      {/* <NicknameModal isOpen={modalOpen} onClose={handleModalClose}>
        <div style={{ padding: '20px' }}>
          <h2>닉네임 변경</h2>
          <input type="text" placeholder="새 닉네임 입력" />
          <button>변경하기</button>
        </div>
      </NicknameModal> */}
    </>
  );
};

export default MyPageUserInfo;
