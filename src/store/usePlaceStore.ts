import create from 'zustand';

interface PlaceType {
  place_name: string;
  road_address_name: string;
  x: string;
  y: string;
  address_name: string;
  phone: string;
  place_url: string;
}

interface PlaceState {
  selectedPlaceInfo: PlaceType | null;
  setSelectedPlaceInfo: (info: PlaceType | null) => void;
  onClose: () => void; // 모달을 닫는 함수 추가
}

export const usePlaceStore = create<PlaceState>((set) => ({
  selectedPlaceInfo: null,
  setSelectedPlaceInfo: (info) => set({ selectedPlaceInfo: info }),
  onClose: () => set({ selectedPlaceInfo: null }), // closeModal 구현
}));
