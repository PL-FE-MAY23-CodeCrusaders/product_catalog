import React from 'react';
import './PhonesPage.scss';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';

export const Phones = () => {
  return (
    <>
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
          {/* <div className="item" /> */}
          <Card />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
        </div>
        <div className="Phones__pagination">
          {/* eslint-disable-next-line */}
          <button type="button" className="Phones__pagination-buttonL">
            <div className="Phones__pagination-leftButton" />
          </button>
          <button type="button" className="Phones__pagination-button">1</button>
          <button type="button" className="Phones__pagination-button">2</button>
          <button type="button" className="Phones__pagination-button">3</button>
          {/* eslint-disable-next-line */}
            <button type="button" className="Phones__pagination-button">4</button>
          {/* eslint-disable-next-line */}
            <button type="button" className="Phones__pagination-button">5</button>
          {/* eslint-disable-next-line */}
          <button type="button" className="Phones__pagination-buttonR">
            <div className="Phones__pagination-rightButton" />
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};
