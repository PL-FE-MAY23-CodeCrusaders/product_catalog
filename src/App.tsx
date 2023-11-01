import { NavLink, Route, Routes } from 'react-router-dom';
import {
  ProductDetailsPage,
} from './features/productDetailsPage/ProductDetailsPage';

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
        <nav>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/phones">PHONES</NavLink>
            </li>
            <li>
              <NavLink to="/tablets">TABLETS</NavLink>
            </li>
            <li>
              <NavLink to="/accessories">ACCESSORIES</NavLink>
            </li>
            <li>
              <NavLink to="/phones/1">moje</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/tablets" element={<Tablets />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/phones/1" element={<ProductDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
