import React, { useState } from 'react';
import './AvailableColors.scss';
import { ReactComponent as ColorAvailable } from './colors.svg';
// eslint-disable-next-line max-len
import { useProductDetailsPageContext } from '../../../../context/ProductDetailsPageContext';

export const AvailableColors = () => {
  const { phoneData } = useProductDetailsPageContext();
  const availableColors = phoneData?.colorsAvailable || [];

  const [selectedColor, setSelectedColor] = useState<string | null>(
    phoneData?.color || null,
  );

  const handleColorChange = (color: string | null) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <p className="color__paragraph">Available colors</p>
      <ul className="color__list">
        {availableColors.map((color) => (
          <li key={color}>
            <button
              type="button"
              onClick={() => handleColorChange(color)}
              aria-label={`Choose ${color} color`}
              className={`color__button ${
                selectedColor === color ? 'color__button--selected' : ''
              }`}
            >
              <div>
                <ColorAvailable style={{ fill: color }} />
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableColors;
