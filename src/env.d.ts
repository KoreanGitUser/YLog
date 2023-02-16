interface ImportMetaEnv {
  // VITE_로 시작하는 이름이어야 함.
  readonly VITE_BASE_URL: string;
  readonly VITE_FIREBASE_URL: string;

  // API Server
  readonly VITE_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
