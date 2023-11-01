import React from 'react';
import './favouritesPage.scss';

export const Favourites = () => {
  return (
    <main className="Favourites_main">
      <div className="Favourites_map" />
      <div className="Favourites_title" />
      <div className="Favourites_itemsCount" />
      <div className="Favourites_itemList" />
    </main>
  );
};
