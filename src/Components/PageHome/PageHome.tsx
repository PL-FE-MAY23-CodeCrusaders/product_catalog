import React from 'react';
import './PageHome.scss';

export const Home = () => {
  return (
    <main className="Home_main">
      <section className="Home_sectionWelcome" />
      <section className="Home_sectionNewModels" />
      <section className="Home_sectionCategory" />
      <section className="Home_sectionHotPrice" />
    </main>
  );
};
