import { useEffect } from 'react';
import './FavouritesPage.scss';
import FavSum from './favSum';
import FavProductList from './favProductList';
import { BackArrow } from '../../commonComponents/BackArrow';

export const Favourites = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fav">
      <BackArrow />
      <h1 className="fav__title">Favourites</h1>
      <FavSum />
      <div className="fav__contentBox">
        <FavProductList />
      </div>
    </div>
  );
};
