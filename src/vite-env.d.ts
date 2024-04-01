/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_BASE_URL: string;
  readonly VITE_APP_KAKAO_REST_KEY: string;
  readonly VITE_APP_REDIRECT: string;
}

interface ImpportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  Kakao: any;
}
