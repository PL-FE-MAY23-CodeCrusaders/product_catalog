import React from 'react';

export const Pagination = () => {
  const handlePagination = (pageNumber: number) => {
    console.log('logika paginacji', pageNumber);
  };

  const pages = 4;

  const buttons = [];

  for (let i = 1; i <= pages; i++) {
    buttons.push(
      <button
        className="pagination_button"
        type="button"
        key={i}
        onClick={() => handlePagination(i)}
      >
        <p className="pagination_number">{i}</p>
      </button>
    );
  }

  return (
    <div className="pagination">
      <button className="pagination_arrow--transform" type="button">
        <p />
      </button>
      {buttons}
      <button className="pagination_arrow" type="button">
        <p />
      </button>
    </div>
  );
};

export default Pagination;
