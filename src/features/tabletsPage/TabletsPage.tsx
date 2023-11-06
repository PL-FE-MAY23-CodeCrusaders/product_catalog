import React from 'react';
import './TabletsPage.scss';

export const Tablets = () => {
  return (
    <main className="Tablets__main">
      <div className="Tablets__map">
        <div className="Tablets__map-homeIcon" />
        <div className="Tablets__map-arrowIcon" />
        <span className="Tablets__map-label">Tablets</span>
      </div>

      <div className="Tablets__titleWrapper">
        <h1 className="Tablets__title">
          Tablets
        </h1>

      </div>

      <div className="Tablets__modelsCount">
        <p>21 models</p>
      </div>

      <div className="Tablets__sortByField" />
      <div className="Tablets__itemsOnPageField" />

      <div className="Tablets__itemList">
        <div className="item" />
        <div className="item" />
        <div className="item" />
        <div className="item" />
        <div className="item" />
      </div>

      <div className="Tablets__pagination">
        <button
          type="button"
          className="Tablets__pagination-buttonL"
          aria-label="Next page"
        >
          <div className="Tablets__pagination-leftButton" />
        </button>
        <button type="button" className="Tablets__pagination-button">1</button>
        <button type="button" className="Tablets__pagination-button">2</button>
        <button type="button" className="Tablets__pagination-button">3</button>
        <button type="button" className="Tablets__pagination-button">4</button>
        <button type="button" className="Tablets__pagination-button">5</button>
        <button
          type="button"
          className="Tablets__pagination-buttonR"
          aria-label="Gop to Next page"
        >
          <div className="Tablets__pagination-rightButton" />
        </button>
      </div>
    </main>
  );
};
