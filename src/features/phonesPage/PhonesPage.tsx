/* eslint-disable no-console */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import './PhonesPage.scss';
import { string } from 'yargs';
import { Card } from '../../commonComponents/Card';

export const Phones = () => {
  const [sortOption, setSortOption] = useState<string>('default');
  const [itemsOnPage, setItemsOnPage] = useState<string>('16');

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(sortOption, itemsOnPage);
  }, [sortOption, itemsOnPage]);

  return (
    <>
      <main className="Phones__main">
        <div className="Phones__map">
          <div className="Phones__map-homeIcon" />
          <div className="Phones__map-arrowIcon" />
          <span className="Phones__map-label">Phones</span>
        </div>
        <div className="Accessories__titleWrapper">
          <h1 className="Accessories__title">Mobile phones</h1>
        </div>
        <div className="Phones__modelsCount">
          <p>95 models</p>
        </div>

        <div className="Phones__sortByField">
          <label className="Phones__sortByField-label" htmlFor="menu">
            Sort by:
          </label>
          <select
            className="Phones__sortByField-dropdown"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option
              className="Phones__sortByField-dropdown-option"
              value="Newest"
            >
              Newest
            </option>
            <option
              className="Phones__sortByField-dropdown-option"
              value="Screen"
            >
              Screen
            </option>
            <option
              className="Phones__sortByField-dropdown-option"
              value="Price-descending"
            >
              Price descending
            </option>
            <option
              className="Phones__sortByField-dropdown-option"
              value="Price ascending"
            >
              Price ascending
            </option>

          </select>
        </div>

        <div className="Phones__itemsOnPageField">
          <label
            htmlFor="itemsOnPage"
            className="Phones__itemsOnPageFild-label"
          >
            Items on page:
          </label>
          <select
            className="Phones__itemsOnPageField-dropdown"
            value={itemsOnPage.toString()}
            onChange={(e) => setItemsOnPage(e.target.value)}
          >
            <option
              className="Phones__itemsOnPageField-dropdown-option"
              value="24"
            >
              24
            </option>
            <option
              className="Phones__itemsOnPageField-dropdown-option"
              value="32"
            >
              32
            </option>
            <option
              className="Phones__itemsOnPageField-dropdown-option"
              value="36"
            >
              36
            </option>
            <option
              value="40"
              className="Phones__itemsOnPageField-dropdown-option"
            >
              40
            </option>
          </select>
        </div>
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
