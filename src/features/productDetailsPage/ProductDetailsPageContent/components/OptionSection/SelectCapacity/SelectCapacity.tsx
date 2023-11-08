/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState } from 'react';

import './SelectCapacity.scss';
import { Link, useParams } from 'react-router-dom';
import { useProductDetailsContext } from '../../../../context/ProductDetailsContext';

export const SelectCapacity = () => {
  const { phoneData } = useProductDetailsContext();
  const availableCapacities = phoneData?.capacityAvailable || [];

  const [selectedCapacity, setSelectedCapaity] = useState<string>(
    phoneData!.capacity,
  );

  const handleCapacityChange = (capacity: string) => {
    setSelectedCapaity(capacity);
  };

  const { id } = useParams();

  // eslint-disable-next-line consistent-return
  const setNewLink = (capicity: string) => {
    const newId = id!.replace(
      selectedCapacity.toLocaleLowerCase(), capicity.toLocaleLowerCase(),
    );

    return newId;
  };

  return (
    <div>
      <p className="capacity__paragraph">Select capacity</p>

      <ul className="capacity__list">
        {availableCapacities.map((capacity) => (
          <li key={capacity}>
            <Link to={`/phones/${setNewLink(capacity)}`}>
              <button
                type="button"
                onClick={() => handleCapacityChange(capacity)}
                aria-label={`Choose ${capacity} capacity`}
                className={`capacity__button ${
                  selectedCapacity === capacity
                    ? 'capacity__button--selected'
                    : ''
                }`}
              >
                <p
                  className={`capacity__button-text ${
                    selectedCapacity === capacity
                      ? 'capacity__button-text--selected'
                      : ''
                  }`}
                >
                  {capacity}
                </p>
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
