import React, { useState } from 'react';
import Modal from '../commons/modals/Modal';
import Button from '../commons/buttons/Button';
import { KaKaoMapResult, MapSearchType } from './KaKaoMapResult';

interface PlaceType {
  place_name: string;
  road_address_name: string;
  x: string;
  y: string;
  address_name: string;
  phone: string;
  place_url: string;
  location?: string;
}

interface KaKaoMapSearchModalProps {
  searchKeyword: string;
  isOpen: boolean;
  onClose: () => void;
  onSelect?: (place: PlaceType) => void; // 선택된 장소를 처리하는 콜백 함수
}

const KaKaoMap: React.FC<KaKaoMapSearchModalProps & MapSearchType> = ({
  isOpen,
  onClose,
  onSelect, // onSelectPlace prop 추가
}) => {
  // 입력 폼 변화 감지하여 입력 값 관리
  const [Value, setValue] = useState('');
  // 제출한 검색어 관리
  const [Keyword, setKeyword] = useState('');

  // const [_, setIsModalOpen] = useState(false);

  // 입력 폼 변화 감지하여 입력 값을 state에 담아주는 함수
  const keywordChange = (e: {
    preventDefault: () => void;
    target: { value: string };
  }) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  // 제출한 검색어 state에 담아주는 함수
  const submitKeyword = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setKeyword(Value);
  };

  // 검색어를 입력하지 않고 검색 버튼을 눌렀을 경우
  const valueChecker = () => {
    if (Value === '') {
      alert('검색어를 입력해주세요.');
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div style={{ alignItems: 'center' }}>
          <form onSubmit={submitKeyword} style={{ marginRight: '10px' }}>
            <label
              htmlFor="place"
              style={{
                display: 'flex',
                alignItems: 'center',
                // padding: ' 15px;',
              }}
            >
              <input
                type="text"
                name="place"
                onChange={keywordChange}
                placeholder="검색어를 입력해주세요. (ex: 강남 맛집)"
                required
                style={{ marginRight: '5px', width: '250px', height: '25px' }}
              />
              <input
                type="submit"
                value="검색"
                onClick={valueChecker}
                style={{
                  height: '30px',
                  backgroundColor: 'transparent',
                  borderRadius: '5px',
                  width: '100px',
                  border: '1px solid black',
                }}
              />
            </label>
          </form>
        </div>
        {/* 제출한 검색어 넘기기 */}
        <KaKaoMapResult searchKeyword={Keyword} onSelect={onSelect} />
        <Button text="닫기" onClick={onClose} />
      </Modal>
    </>
  );
};

export default KaKaoMap;
