import { create } from 'zustand';

type AuthState = {
  isLoggedIn: boolean;
  currentUserId: string | null;
  login: () => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false, // 초기 로그인 상태는 false
  currentUserId: null,
  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false }),
}));
