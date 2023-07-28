import "./styles.css";
import React from "react";

const FilterButtons = ({ filters, selectedFilter, setSelectedFilter, setCurrentPage }) => {
  return (
    <div className="button-container">
      {/* Filter Buttons */}
      {filters.map((filter) => (
        <button
          className={`button ${selectedFilter === filter ? "active" : ""}`}
          key={filter}
          onClick={() => {
            setSelectedFilter(filter);
            setCurrentPage(1); // Reset to the first page when changing filters
          }}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
