import React, { useEffect } from 'react';
import './FavouritesPage.scss';
import back from '../../images/back.png';
import FavSum from './favSum';
import FavProductList from './favProductList';
import { useFavContext } from '../../context/favContext/favContext';

export const Favourites = () => {
  const { removeFromFav, favState } = useFavContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fav">
      <nav className="fav__nav">
        <div className="fav__nav-iconBox">
          <img src={back} alt="Back Icon" className="fav__nav-icon" />
        </div>
        <a className="fav__nav-link" href="#home">
          Back
        </a>
      </nav>
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
