/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import './AvailableColors.scss';
import { ReactComponent as ColorAvailable } from './colors.svg';
import { useProductDetailsContext } from '../../../../context/ProductDetailsContext';

export const AvailableColors = () => {
  const { phoneData } = useProductDetailsContext();
  const availableColors = phoneData?.colorsAvailable || [];

  const [selectedColor, setSelectedColor] = useState<string>(
    phoneData!.color,
  );

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const { id } = useParams();

  const setNewLink = (color: string) => {
    const newId = id!.replace(
      selectedColor.toLocaleLowerCase(),
      color.toLocaleLowerCase(),
    );

    return newId;
  };

  return (
    <div>
      <p className="color__paragraph">Available colors</p>
      <ul className="color__list">
        {availableColors.map((color) => (
          <li key={color}>
            <Link to={`/phones/${setNewLink(color)}`}>
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
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableColors;
