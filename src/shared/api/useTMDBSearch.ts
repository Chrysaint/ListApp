import { TMovieCard } from "@/entities/card/model/card";
import { TMDB_API_VALUES } from "@/app/config/config";

export async function fetchMoviesByQuery(query: string): Promise<TMovieCard[]> {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_API_VALUES.api_key}`,
    },
  };

  const url = `${TMDB_API_VALUES.baseURL}/search/movie?query=${query}&include_adult=false&language=${TMDB_API_VALUES.language}&page=1`;

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (e) {
    console.error("Error fetching movies:", e);
    return [];
  }
}
