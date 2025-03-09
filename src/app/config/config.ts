type TTMDBLanguages = "ru-RU" | "en-US";

type TTMDB_API = {
  baseURL: string;
  api_key: string;
  language: TTMDBLanguages;
  imgURL: string;
};

export const TMDB_API_VALUES: TTMDB_API = {
  baseURL: import.meta.env.VITE_TMDB_BASE_URL || "",
  api_key: import.meta.env.VITE_TMDB_TOKEN || "",
  language: "ru-RU",
  imgURL: import.meta.env.VITE_TMDB_IMG_URL || "",
};
