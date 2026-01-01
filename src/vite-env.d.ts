/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTACT_PHONE: string;
  readonly VITE_CONTACT_WHATSAPP: string;
  readonly VITE_CONTACT_EMAIL: string;
  readonly VITE_ADDRESS_STREET: string;
  readonly VITE_ADDRESS_CITY: string;
  readonly VITE_ADDRESS_STATE: string;
  readonly VITE_ADDRESS_ZIP: string;
  readonly VITE_MAP_LINK: string;
  readonly VITE_MAP_EMBED_URL: string;
  readonly VITE_TELEGRAM_USERNAME: string;
  readonly VITE_MENU_DOWNLOAD_LINK: string;
  readonly VITE_CONTACT_FORM_ACTION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}