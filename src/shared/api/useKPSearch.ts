import { KP_API_VALUES } from "@/app/config/config";
import { TMovie } from "@/entities/card/model/card";

export async function fetchMoviesByQuery(query: string): Promise<TMovie[]> {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": KP_API_VALUES.api_key,
    },
  };

  const url = `${KP_API_VALUES.baseURL}/v2.1/films/search-by-keyword?keyword=${query}`;
  console.log("request url: ", url);
  console.log("request opts: ", options);
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("search data: ", data);
    return data.films;
  } catch (e) {
    console.error("Error fetching movies:", e);
    return [];
  }
}
