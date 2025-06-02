type TGenre = string;
type TCountry = string;

export type TMovie = {
  kinopoiskId: number;
  imdbId: number;
  nameRu?: string;
  nameEn?: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  ratingKinopoisk?: number;
  ratingImdb?: number;
  webUrl: string;
  genres?: TGenre[];
  countries?: TCountry[];
  completed?: boolean;
};
