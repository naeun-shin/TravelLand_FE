import { useAuthStore } from '@/store/useAuthStore';
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import * as S from '@/components/commons/modals/Modal.style';

// 타입 정의 추가
interface IMainModalProps {
  // isLoggedIn: boolean;
  handleLogout: () => void;
  handleLogin: () => void;
}

const MainModal: React.FC<IMainModalProps> = ({
  // isLoggedIn,
  handleLogout,
  handleLogin,
}) => {
  const navigate = useNavigate();
  const [slide, setSlide] = useState<boolean>(false);
  const { isLoggedIn } = useAuthStore(); // Zustand에서 로그인 상태 가져오기
  const modalRef = useRef<HTMLDivElement>(null);
  // mypage 이동
  const handleOpenMypage = () => {
    navigate('/user/myPage');
  };
  // 플랜 작성하기 이동
  const handleOpenPlanCreate = () => {
    navigate('/planCreate/1');
  };
  // 여행 정보 작성하기 이동
  const handleOpenTripCreate = () => {
    navigate('/travelCreate');
  };

  useEffect(() => {
    setSlide(true);
  }, []);

  useEffect(() => {
    // 모달의 위치 조정 함수
    const adjustModalPosition = () => {
      const burgerButtonRect = document
        .querySelector('.BurgerMenuIcon')
        ?.getBoundingClientRect(); // 버거 버튼의 위치 정보

      const modal = document.getElementById('modal-root');
      if (burgerButtonRect && modal) {
        modal.style.top = `${
          burgerButtonRect.top + burgerButtonRect.height + window.scrollY
        }px`; // 모달을 버거 버튼 아래에 위치시킴
        modal.style.right = `${window.innerWidth - burgerButtonRect.right}px`; // 모달을 버거 버튼의 오른쪽 정렬
      }
    };

    // 모달이 열릴 때마다 위치 조정
    adjustModalPosition();

    // 창 크기 변경 시 위치 조정
    window.addEventListener('resize', adjustModalPosition);

    return () => {
      window.removeEventListener('resize', adjustModalPosition);
    };
  }, []);

  const handleCloseModal = () => {
    setSlide(false);
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // 모달 영역 클릭 시 이벤트 버블링 방지
  };

  return ReactDOM.createPortal(
    <S.Modaldrop onClick={handleCloseModal} style={{ opacity: slide ? 1 : 0 }}>
      <S.ModalWrapper
        ref={modalRef}
        style={{
          opacity: slide ? 1 : 0,
          transform: slide ? 'translateY(0)' : 'translateY(-20px)',
        }}
        onClick={handleModalClick}
      >
        <S.AllModalContainer className="ModalContainer">
          {!isLoggedIn && (
            <>
              <S.MenuItem onClick={handleLogin}>로그인</S.MenuItem>
              <S.MenuItem>회원가입</S.MenuItem>
            </>
          )}
          {isLoggedIn && (
            <>
              <S.MenuItem onClick={handleOpenMypage}>마이페이지</S.MenuItem>
              <S.MenuItem onClick={handleOpenPlanCreate}>
                여행 플랜 작성하기
              </S.MenuItem>
              <S.MenuItem onClick={handleOpenTripCreate}>
                여행 정보 작성하기
              </S.MenuItem>
              <S.MenuItem onClick={handleLogout}>로그아웃</S.MenuItem>
            </>
          )}
        </S.AllModalContainer>
      </S.ModalWrapper>
    </S.Modaldrop>,
    document.getElementById('modal-root') || document.createElement('div'),
  );
};

export default MainModal;
