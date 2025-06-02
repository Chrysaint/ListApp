import { CatalogueList } from "@/widgets/catalgoue";
import { useParams } from "react-router-dom";
import { Text } from "@/shared/ui/Text";
import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "@/shared/api/useKPMovies";

export const Catalogue = () => {
  const { page = "page=1" } = useParams<{ page?: string }>();
  const {
    data: response,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["movies", page],
    queryFn: () => fetchMovies(page),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
  console.log("tyring to fetch: ", response);

  const currentPage = Number(page.split("=")[1]) - 1;
  return (
    <>
      <Text
        style={{
          marginBottom: "12px",
        }}
        size="lg"
      >
        Каталог
      </Text>
      {isLoading ? (
        <Text>loading...</Text>
      ) : isError ? (
        <Text>{error.message}</Text>
      ) : (
        <CatalogueList
          listType="MovieList"
          items={response?.movies}
          totalPages={response?.pages_amount}
          currentPage={currentPage}
        />
      )}
    </>
  );
};

export default Catalogue;
