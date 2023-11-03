import React from 'react';
import './AccessoriesPage.scss';

export const Accessories = () => {
  return (
    <main className="Accessories__main">
      <div className="Accessories__map">
        <div className="Accessories__map-homeIcon" />
        <div className="Accessories__map-arrowIcon" />
        <span className="Accessories__map-label">Accessories</span>
      </div>

      <div className="Accessories__titleWrapper">
        <h1 className="Accessories__title">
          Accessories
        </h1>
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
          aria-label="Next page"
        >
          <div className="Accessories__pagination-leftButton" />
        </button>
        <button type="button" className="Accessories__pagination-button">
          1
        </button>
        <button type="button" className="Accessories__pagination-button">
          2
        </button>
        <button type="button" className="Accessories__pagination-button">
          3
        </button>
        <button type="button" className="Accessories__pagination-button">
          4
        </button>
        <button type="button" className="Accessories__pagination-button">
          5
        </button>
        <button
          type="button"
          className="Accessories__pagination-buttonR"
          aria-label="Previouse page"
        >
          <div className="Accessories__pagination-rightButton" />
        </button>
      </div>
    </main>
  );
};
