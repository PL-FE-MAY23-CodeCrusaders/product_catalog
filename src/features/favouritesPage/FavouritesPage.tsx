import React, { useEffect } from 'react';
import './FavouritesPage.scss';

export const Favourites = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="Favourites_main">
      <div className="Favourites_map" />
      <div className="Favourites_title" />
      <div className="Favourites_itemsCount" />
      <div className="Favourites_itemList" />
    </main>
  );
};
