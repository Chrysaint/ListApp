type TTMDBLanguages = "ru-RU" | "en-US";

type API = {
  baseURL: string;
  api_key: string;
};

type TTMDB_API = API & {
  language: TTMDBLanguages;
  imgURL: string;
};

type TKP_API = API & {};

export const TMDB_API_VALUES: TTMDB_API = {
  baseURL: import.meta.env.VITE_TMDB_BASE_URL || "",
  api_key: import.meta.env.VITE_TMDB_TOKEN || "",
  language: "ru-RU",
  imgURL: import.meta.env.VITE_TMDB_IMG_URL || "",
};

export const KP_API_VALUES: TKP_API = {
  baseURL: import.meta.env.VITE_KP_API_BASE_URL || "",
  api_key: import.meta.env.VITE_KP_API_KEY || "",
};
