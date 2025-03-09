import { TMDB_API_VALUES } from "@/app/config/config";

export const fetchMovies = async (page: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_API_VALUES.api_key}`,
    },
  };

  const response = await fetch(
    `${TMDB_API_VALUES.baseURL}/movie/popular?language=ru-RU&${page}`,
    options
  );

  if (!response.ok) {
    throw new Error("Ошибка при получении данных :(");
  }
  const data = await response.json();
  return { movies: data.results, pages_amount: data.total_pages };
};
