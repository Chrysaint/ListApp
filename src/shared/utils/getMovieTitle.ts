import { TMovie } from "@/entities/card/model/card";

export function getMovieTitle(movie: TMovie) {
  return movie.nameRu
    ? movie.nameRu
    : movie.nameEn
    ? movie.nameEn
    : movie.nameOriginal;
}
