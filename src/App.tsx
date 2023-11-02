<<<<<<< HEAD
import {
  NavLink, Route, Routes,
} from 'react-router-dom';
import Header from './components/Header/Header';

function Home() {
  return <div>Home Page Content</div>;
}

function Phones() {
  return <div>Phones Page Content</div>;
}

function Tablets() {
  return <div>Tablets Page Content</div>;
}

function Accessories() {
  return <div>Accessories Page Content</div>;
}

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/tablets" element={<Tablets />} />
        <Route path="/accessories" element={<Accessories />} />
      </Routes>

    </>
  );
=======
import React from 'react';
import Header from './components/header/Header';

function App() {
  return <Header />;
>>>>>>> 4b83b0b2c2076aeeaa70ec986908aa01fdb04fb1
}

export default App;
