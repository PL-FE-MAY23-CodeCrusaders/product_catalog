/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect } from 'react';
import './AccessoriesPage.scss';

export const Accessories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="Accessories__main">
      <div className="Accessories__map">
        <div className="Accessories__map-homeIcon" />
        <div className="Accessories__map-arrowIcon" />
        <span className="Accessories__map-label">Accessories</span>
      </div>

      <div className="Accessories__titleWrapper">
        <h1 className="Accessories__title">Accessories</h1>
      </div>

      <div className="Accessories__modelsCount">
        <p>95 models</p>
      </div>

      <div className="Accessories__sortByField" />
      <div className="Accessories__itemsOnPageField" />

      <div className="Accessories__itemList">
        <div className="item" />
        <div className="item" />
        <div className="item" />
        <div className="item" />
        <div className="item" />
      </div>

      <div className="Accessories__pagination">
        <button
          type="button"
          className="Accessories__pagination-buttonL"
          aria-label="Previous page"
        >
          <div className="Accessories__pagination-leftButton" />
        </button>
        <button
          type="button"
          className="Accessories__pagination-button"
          aria-label="Go to page 1"
        >
          1
        </button>
        <button
          type="button"
          className="Accessories__pagination-button"
          aria-label="Go to page 2"
        >
          2
        </button>
        <button
          type="button"
          className="Accessories__pagination-button"
          aria-label="Go to page 3"
        >
          3
        </button>
        <button
          type="button"
          className="Accessories__pagination-button"
          aria-label="Go to page 4"
        >
          4
        </button>
        <button
          type="button"
          className="Accessories__pagination-button"
          aria-label="Go to page 5"
        >
          5
        </button>
        <button
          type="button"
          className="Accessories__pagination-buttonR"
          aria-label="Next Page"
        >
          <div className="Accessories__pagination-rightButton" />
        </button>
      </div>
    </main>
  );
};
