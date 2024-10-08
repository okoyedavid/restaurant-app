import React from "react";

const PaginateButton = ({ setCurrentPage, currentPage }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li
          onClick={() => setCurrentPage(currentPage - 1)}
          className="page-item"
        >
          <a className="page-link" href="#">
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>

        <li
          onClick={() => setCurrentPage(currentPage + 1)}
          className="page-item"
        >
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PaginateButton;
