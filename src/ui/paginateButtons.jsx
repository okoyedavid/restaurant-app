import React from "react";

const PaginateButton = ({ setCurrentPage, currentPage, numberofPages }) => {
  const pageNumbers = Array.from(
    { length: numberofPages },
    (_, index) => index + 1
  );

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>

        {pageNumbers.map((item) => (
          <li key={item} className={`page-item`}>
            <button
              disabled={item === currentPage}
              onClick={() => setCurrentPage(item)}
              className={`page-link ${
                item === currentPage ? "bg-warning text-white" : ""
              }`}
            >
              {item}
            </button>
          </li>
        ))}

        <li
          className={`page-item ${
            currentPage === numberofPages ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === numberofPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PaginateButton;
