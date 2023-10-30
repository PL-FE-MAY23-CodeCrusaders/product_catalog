import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

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
          <img src={logo} className="App-logo" alt="logo" />
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

        <Route path="/" exact component={Home} />
        <Route path="/phones" component={Phones} />
        <Route path="/tablets" component={Tablets} />
        <Route path="/accessories" component={Accessories} />
      </Router>
    </div>
  );
}

export default App;