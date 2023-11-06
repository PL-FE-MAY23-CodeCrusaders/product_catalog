<<<<<<< HEAD
import {
  NavLink, Route, Routes,
} from 'react-router-dom';
import PageNotFound from './pageNotFound';
=======
import { NavLink, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';

import PageNotFound from './pageNotFound';
import { Cart } from './cart/cart';
import { CartProvider } from './cartContext';
>>>>>>> origin/main

import { Home } from './features/homePage/HomePage';
import { Phones } from './features/phonesPage/PhonesPage';
import { Tablets } from './features/tabletsPage/TabletsPage';
import { Accessories } from './features/accessoriesPage/AccessoriesPage';
import { Favourites } from './features/favouritesPage/FavouritesPage';
import {
  ProductDetailsPage,
} from './features/productDetailsPage/ProductDetailsPage';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
<<<<<<< HEAD
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
          </ul>
        </nav>
      </header>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/tablets" element={<Tablets />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>

    </>
=======

      <CartProvider>
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/tablets" element={<Tablets />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>
        <Footer />
      </CartProvider>
    </>

>>>>>>> origin/main
  );
}

export default App;
