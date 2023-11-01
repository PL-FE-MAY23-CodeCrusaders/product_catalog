import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.scss';

import { Footer } from './components/Footer/index';
import { Card } from './components/Card/index';

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
    <div className="App">
      <Router>
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/phones">PHONES</Link>
              </li>
              <li>
                <Link to="/tablets">TABLETS</Link>
              </li>
              <li>
                <Link to="/accessories">ACCESSORIES</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/tablets" element={<Tablets />} />
          <Route path="/accessories" element={<Accessories />} />
        </Routes>
      </Router>
      <Card />
      <Footer />
    </div>
  );
}

export default App;
