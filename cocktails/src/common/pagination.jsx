import React from "react";
import _ from "lodash";
import { useGlobalContext } from "../context";

function Pagination() {
  const { itemCount, setPage, page: currentPage, error } = useGlobalContext();
  const pagesCount = Math.ceil(itemCount / 3);
  const pages = _.range(1, pagesCount + 1);

  const increase = () => {
    if (currentPage === pagesCount) {
      return;
    }
    setPage(currentPage + 1);
  };

  const decrease = () => {
    if (currentPage === 1) {
      return;
    }
    setPage(currentPage - 1);
  };

  if (pagesCount === 1 || error) return null;

  return (
    <div className="pagination">
      <button className="btn-paginate" onClick={decrease}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="btn--icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <div className="pages">
        {pages.map((page) => (
          <a
            key={page}
            className={page === currentPage ? "page active" : "page"}
            onClick={() => setPage(page)}
          >
            {page}
          </a>
        ))}
      </div>
      <button className="btn-paginate" onClick={increase}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="btn--icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export default Pagination;
