/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_Application_ID: string;
  readonly VITE_Application_Keys: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
