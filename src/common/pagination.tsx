import React from "react";
import "./pagination.css";

interface PaginateProps {
  currentPage: number;
  setCurrentPage: any;
  totalItems: number;
  pageLimit: number;
}

export default function Paginate({
  currentPage,
  setCurrentPage,
  pageLimit,
  totalItems,
}: PaginateProps) {
  return (
    <div className="pagination">
      {currentPage > 1 && (
        <>
          <button onClick={() => setCurrentPage(1)}>First</button>

          <button onClick={() => setCurrentPage(currentPage - 1)}>
            {currentPage - 1}
          </button>
        </>
      )}

      <span className="current-page">{currentPage}</span>

      {currentPage < totalItems / pageLimit && (
        <>
          <button onClick={() => setCurrentPage(currentPage + 1)}>
            {currentPage + 1}
          </button>

          <button
            onClick={() => setCurrentPage(Math.ceil(totalItems / pageLimit))}
          >
            Last
          </button>
        </>
      )}
    </div>
  );
}
