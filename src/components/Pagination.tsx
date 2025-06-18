import React from "react";
import { Button } from "react-bootstrap";
import "../assets/Pagination.scss";

interface PaginationProps {
  page: number;
  totalPages?: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  onNextPage: () => void;
  onPreviousPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  hasNextPage,
  hasPreviousPage,
  onNextPage,
  onPreviousPage,
}) => {
  return (
    <div className="PaginationContainer">
      <div className="prev">
        <Button
          disabled={!hasPreviousPage}
          onClick={onPreviousPage}
          variant="outline-danger"
        >
          Previous Page
        </Button>
      </div>

      <div className="page">
        Page {page}
        {totalPages && "/" + totalPages}
      </div>

      <div className="next">
        <Button
          disabled={!hasNextPage}
          onClick={onNextPage}
          variant="outline-danger"
        >
          Next Page
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
