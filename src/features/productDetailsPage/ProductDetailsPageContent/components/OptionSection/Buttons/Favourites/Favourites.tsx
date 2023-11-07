import { useState } from 'react';

import './Favourites.scss';
import { ReactComponent as HeartWhite } from './heart.svg';
import { ReactComponent as HeartPink } from './pink-heart.svg';

export const Favourites = () => {
  const [selectedFavourite, setSelectedFavourite]
    = useState<boolean>(false);

  const handleCapacityChange = (v: boolean) => {
    setSelectedFavourite(v);
  };

  return (
    <button
      type="button"
      className="favourites-button"
      aria-label="Add to favourites"
      onClick={() => handleCapacityChange(!selectedFavourite)}
    >
      {selectedFavourite ? (
        <HeartPink className="favourites-button__heart" />
      ) : (
        <HeartWhite className="favourites-button__heart" />
      )}
    </button>
  );
};
