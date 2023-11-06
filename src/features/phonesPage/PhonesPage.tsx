/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './PhonesPage.scss';
import { Card } from '../../components/Card';

export const Phones = () => {
  return (
    <main className="Phones__main">
      <div className="Phones__map">
        <div className="Phones__map-homeIcon" />
        <div className="Phones__map-arrowIcon" />
        <span className="Phones__map-label">Phones</span>
      </div>
      <div className="Accessories__titleWrapper">
        <h1 className="Accessories__title">
          Mobile phones
        </h1>
      </div>
      <div className="Phones__modelsCount">
        <p>95 models</p>
      </div>
      <div className="Phones__sortByField" />
      <div className="Phones__itemsOnPageField" />
      <div className="Phones__itemList">
        <Card />
        {/* <div className="item" />
        <div className="item" />
        <div className="item" />
        <div className="item" />
        <div className="item" /> */}
      </div>
      <div className="Phones__pagination">
        <button
          type="button"
          className="Phones__pagination-buttonL"
          aria-label="Next page"
        >
          <div className="Phones__pagination-leftButton" />
        </button>
        <button type="button" className="Phones__pagination-button">1</button>
        <button type="button" className="Phones__pagination-button">2</button>
        <button type="button" className="Phones__pagination-button">3</button>
        <button type="button" className="Phones__pagination-button">4</button>
        <button type="button" className="Phones__pagination-button">5</button>
        <button
          type="button"
          className="Phones__pagination-buttonR"
          aria-label="Previouse page"
        >
          <div className="Phones__pagination-rightButton" />
        </button>
      </div>
    </main>
  );
};
