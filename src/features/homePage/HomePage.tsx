import React from 'react';
import './HomePage.scss';

export const Home = () => {
  return (
    <main className="Home_main">
      <section className="Home_sectionWelcome" />
      <section className="Home_sectionNewModels" />
      <section className="Home_sectionCategory" />
      <section className="Home_sectionHotPrice">
        <div className="Home__sectionHotPrice-bar">
          <h2>Hot Price</h2>
        </div>
        <div className="hotPricesItem" />
        <div className="hotPricesItem" />
        <div className="hotPricesItem" />
        <div className="hotPricesItem" />
        <div className="hotPricesItem" />
        <div className="hotPricesItem" />
        <div className="hotPricesItem" />
        <div className="hotPricesItem" />
      </section>
    </main>
  );
};