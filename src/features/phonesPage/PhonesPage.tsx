/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import './PhonesPage.scss';
import { Breadcrumbs } from '../../commonComponents/Breadcrumbs/Breadcrumbs';
import { Phone } from '../../types/Phone';
import { CardItem } from '../../commonComponents/CardItem/CardItem';
import { getPhones } from '../../api';

export const Phones = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [phoneData, setPhoneData] = useState<Phone[]>([]);

  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const phones = await getPhones();

        setPhoneData(phones);
      } catch (e) {
        setError(true);
      }
    };

    fetchData();
  }, []);

  if (isError) {
    return <p>s</p>;
  }

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
          <p>{`${phoneData.length} models`}</p>
        </div>
        <div className="Phones__sortByField" />
        <div className="Phones__itemsOnPageField" />
        <div className="Phones__itemList">
          {phoneData.map((phone) => (
            <CardItem item={phone} key={phone.id} />
          ))}
        </div>
        <div className="Phones__pagination">
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
          <button type="button" className="Phones__pagination-button">
            4
          </button>
          <button type="button" className="Phones__pagination-button">
            5
          </button>
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
