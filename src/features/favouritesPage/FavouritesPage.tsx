import React, { useEffect } from 'react';
import './FavouritesPage.scss';
import FavSum from './favSum';
import FavProductList from './favProductList';
import { useFavContext } from '../../context/favContext/favContext';
import { BackArrow } from '../../commonComponents/BackArrow';

export const Favourites = () => {
  const { removeFromFav, favState } = useFavContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fav">
      <BackArrow />
      <h1 className="fav__title">Favourites</h1>
      <FavSum favState={favState} />
      <div className="fav__contentBox">
        <FavProductList
          favState={favState}
          removeFromFav={removeFromFav}
        />
      </div>
    </div>
  );
};
