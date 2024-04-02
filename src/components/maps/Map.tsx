import { useEffect } from 'react';
import Modal from '@/components/commons/modals/Modal';
import Button from '../commons/buttons/Button';
import * as S from './Map.style';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  address: string; // 주소 prop 추가
}

declare global {
  interface Window {
    kakao: any;
  }
}

const Map: React.FC<MapModalProps> = ({ isOpen, onClose, address }) => {
  useEffect(() => {
    if (isOpen) {
      const container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스

      if (container && window.kakao) {
        // 카카오 API 초기화가 완료되었는지 확인
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소를 좌표로 변환
        geocoder.addressSearch(address, (result: any, status: any) => {
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x,
            ); // 위도와 경도로 좌표 설정
            const options = {
              center: coords, // 변환된 좌표를 지도의 중심으로 설정
              level: 3, // 지도의 확대 레벨
            };

            // 카카오 지도 생성
            const map = new window.kakao.maps.Map(container, options);

            // 마커 생성 및 지도에 추가
            const marker = new window.kakao.maps.Marker({
              position: coords,
            });
            marker.setMap(map);
          }
        });
      }
    }
  }, [isOpen, address]); // 주소가 변경되면 useEffect 재실행

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <S.MapTitle>
          <S.MapTitleLeft>
            <img src="/assets/icons/pinPoint.png" />
            <div>위치 보기</div>
          </S.MapTitleLeft>
          <div>{address}</div>
        </S.MapTitle>
        {/* 지도 영역  */}
        {/* 추후 지도에 마크업으로 표기한 데이터를 갖고 오기  */}
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
