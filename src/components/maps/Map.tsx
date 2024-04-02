import { useEffect } from 'react';
import Modal from '@/components/commons/modals/Modal';
import Button from '../commons/buttons/Button';
import * as S from './Map.style';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

declare global {
  interface Window {
    kakao: any;
  }
}

const Map: React.FC<MapModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스

      if (container && window.kakao) {
        // 카카오 API 초기화가 완료되었는지 확인
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심 좌표
          level: 3, // 지도의 확대 레벨
        };

        // 카카오 지도 생성
        const map = new window.kakao.maps.Map(container, options);
      }
    }
  }, [isOpen]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <S.MapTitle>
          <S.MapTitleLeft>
            <img src="/assets/icons/pinPoint.png" />
            <div>위치보기</div>
          </S.MapTitleLeft>
          <div>서울 강서구 우장산로 92</div>
        </S.MapTitle>
        {/* 지도 영역  */}
        {/* 추후 지도에 마크업으로 표기한 데이터를 갖고 오기 */}
        <div
          id="map"
          style={{
            width: '100%',
            height: '250px',
            borderRadius: '5px',
            marginBottom: '5px',
          }}
        />
        <Button text="닫기" onClick={onClose} />
      </Modal>
    </>
  );
};

export default Map;
