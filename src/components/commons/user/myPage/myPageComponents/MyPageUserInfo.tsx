// import { NicknameModal } from '@/components/commons/modals/Modal';
import { useGetUerInfoQuery } from '@/hooks/useQuery';
import * as S from '@components/commons/user/myPage/MyPage.style';
// import { useState } from 'react';

const MyPageUserInfo = () => {
  // return <></>;
  const { data, isLoading, isError } = useGetUerInfoQuery();
  // const [modalOpen, setModalOpen] = useState(false);

  // const handleModalOpen = () => {
  //   console.log('모달 열기');
  //   setModalOpen(true);
  // };

  // const handleModalClose = () => {
  //   console.log('모달 닫기');
  //   setModalOpen(false);
  // };

  const userData = data?.data;
  if (isLoading) return <div>Data is Loading</div>;
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
