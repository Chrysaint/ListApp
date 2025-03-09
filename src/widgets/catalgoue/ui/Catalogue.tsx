import styled from "styled-components";
import { TPaginatedCatalogue } from "../model/catalogue";
import { Card } from "@/entities/card/ui/Card";
import ReactPaginate from "react-paginate";
import "@/app/styles/pagination.css";
import { useNavigate } from "react-router-dom";

const CatalgoueWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  justify-items: center;
  gap: 24px;
  margin-bottom: 12px;
`;

export const CatalogueList = (data: TPaginatedCatalogue) => {
  const navigate = useNavigate();

  const handlePaginationClick = (event: { selected: number }) => {
    navigate(`/catalogue/page=${event.selected + 1}`);
  };

  return (
    <>
      <CatalgoueWrapper data-type={data.listType}>
        {data.list.map((movie) => (
          <Card key={movie.id} {...movie} />
        ))}
      </CatalgoueWrapper>
      <ReactPaginate
        className="pagination"
        activeClassName="pagination__active"
        breakLabel="..."
        nextLabel=""
        previousLabel=""
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        pageCount={data.totalPages}
        onPageChange={handlePaginationClick}
        forcePage={data.currentPage}
      />
    </>
  );
};
