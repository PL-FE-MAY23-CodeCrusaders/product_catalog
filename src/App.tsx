import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home() {
  return <h1>Home Page</h1>;
}

function Phones() {
  return <h1>Phones Page</h1>;
}

function Tablets() {
  return <h1>Tablets Page</h1>;
}

function Accessories() {
  return <h1>Accessories Page</h1>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
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
      </div>
    </Router>
  );
}

export default App;
