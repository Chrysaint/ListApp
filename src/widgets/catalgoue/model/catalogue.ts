import { TMovieCard } from "@/entities/card/model/card";

export type TPaginatedCatalogue = TMovieCatalogue & {
  totalPages: number;
  currentPage: number;
};

export type TMovieCatalogue = {
  listType: "MovieList";
  list: TMovieCard[];
};
