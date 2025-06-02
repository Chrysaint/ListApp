import { TMovie } from "@/entities/card/model/card";

export type TPaginatedCatalogue = TMovieCatalogue & {
  totalPages: number;
  currentPage: number;
};

export type TMovieCatalogue = {
  listType: "MovieList";
  items: TMovie[];
};
