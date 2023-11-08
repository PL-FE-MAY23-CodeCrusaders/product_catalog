/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect } from 'react';
import './PhonesPage.scss';
import { Card } from '../../commonComponents/Card';
import { Breadcrumbs } from '../../commonComponents/Breadcrumbs/Breadcrumbs';

export const Phones = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>

      <main className="Phones__main">
        <div className="breadcrumps_div2">
          <Breadcrumbs />
        </div>
        <div className="Phones__titleWrapper">
          <h1 className="Phones__title">Mobile phones</h1>
        </div>
        <div className="Phones__modelsCount">
          <p>95 models</p>
        </div>
        <div className="Phones__sortByField" />
        <div className="Phones__itemsOnPageField" />
        <div className="Phones__itemList">
          {/* <div className="item" /> */}
          <Card />
          {/* <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" /> */}
        </div>
        <div className="Phones__pagination">
          {/* eslint-disable-next-line */}
          <button
            type="button"
            className="Phones__pagination-buttonL"
            aria-label="Next page"
          >
            <div className="Phones__pagination-leftButton" />
          </button>
          <button type="button" className="Phones__pagination-button">
            1
          </button>
          <button type="button" className="Phones__pagination-button">
            2
          </button>
          <button type="button" className="Phones__pagination-button">
            3
          </button>
          {/* eslint-disable-next-line */}
          <button type="button" className="Phones__pagination-button">
            4
          </button>
          {/* eslint-disable-next-line */}
          <button type="button" className="Phones__pagination-button">
            5
          </button>
          {/* eslint-disable-next-line */}
          <button
            type="button"
            className="Phones__pagination-buttonR"
            aria-label="Previouse page"
          >
            <div className="Phones__pagination-rightButton" />
          </button>
        </div>
      </main>
    </>
  );
};
