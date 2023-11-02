import {
  NavLink, Route, Routes,
} from 'react-router-dom';
import PageNotFound from './pageNotFound';
import { Cart } from './cart';
import { CartProvider } from './cartContext';

import { Home } from './features/homePage/HomePage';
import { Phones } from './features/phonesPage/PhonesPage';
import { Tablets } from './features/tabletsPage/TabletsPage';
import { Accessories } from './features/accessoriesPage/AccessoriesPage';
import { Favourites } from './features/favouritesPage/FavouritesPage';

function App() {
  return (
    <>
      <CartProvider>
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
                <NavLink to="/favourites">FAVOURITES</NavLink>
              </li>
              <li>
                <NavLink to="/cart">CART</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/tablets" element={<Tablets />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
