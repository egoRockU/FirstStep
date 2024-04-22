// Pagination.js
import React from "react";

function Pagination({ currentPage, totalPages, handlePageChange }) {
  return (
    <div className="w-full py-4">
      <div className="flex justify-end">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className={`px-3 py-1 mx-1 bg-white text-[#444b88] ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`px-3 py-1 mx-1 text-[#444b88] ${
              i + 1 === currentPage
                ? "bg-indigo-700 text-white rounded-full"
                : "bg-white"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`px-3 py-1 mx-1  bg-white text-[#444b88] ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Pagination;
