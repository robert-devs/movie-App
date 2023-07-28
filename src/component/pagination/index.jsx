import "./style.css";
import React from "react";

const PaginationButtons = ({ totalPages, currentPage, handlePageChange }) => {
  return (
    <div className="pagination-container">
      {/* Custom Pagination */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          className={`pagination-button ${currentPage === index + 1 ? "active" : ""}`}
          key={index}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default PaginationButtons;
