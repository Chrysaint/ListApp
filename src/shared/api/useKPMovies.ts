import { KP_API_VALUES } from "@/app/config/config";

export const fetchMovies = async (page: string) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": KP_API_VALUES.api_key,
    },
  };

  const response = await fetch(
    `${KP_API_VALUES.baseURL}/v2.2/films/collections?${page}`,
    options
  );

  if (!response.ok) {
    throw new Error("Ошибка при получении данных :(");
  }
  const data = await response.json();
  console.log("data: ", data);
  return { movies: data.items, pages_amount: data.totalPages };
};
