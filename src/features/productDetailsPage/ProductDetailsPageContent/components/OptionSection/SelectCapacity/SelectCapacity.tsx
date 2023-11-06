import { useState } from 'react';
import './SelectCapacity.scss';
import { useProductDetailsPageContext } from '../../../../context/ProductDetailsPageContext';

export const SelectCapacity = () => {
  const { phoneData } = useProductDetailsPageContext();
  const availableCapacities = phoneData?.capacityAvailable || [];

  const [selectedCapacity, setSelectedCapaity] = useState<string | null>(
    phoneData?.capacity || null
  );

  const handleCapacityChange = (capacity: string | null) => {
    setSelectedCapaity(capacity);
  };

  return (
    <div>
      <p className="capacity__paragraph">Select capacity</p>

      <ul className="capacity__list">
        {availableCapacities.map((capacity) => (
          <li key={capacity}>
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
          </li>
        ))}
      </ul>
    </div>
  );
};
