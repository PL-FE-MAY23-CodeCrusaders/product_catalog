import { NavLink, Route, Routes } from 'react-router-dom';
import PageNotFound from './pageNotFound';

import { Home } from './features/homePage/HomePage';
import { Phones } from './features/phonesPage/PhonesPage';
import { Tablets } from './features/tabletsPage/TabletsPage';
import { Accessories } from './features/accessoriesPage/AccessoriesPage';
import { Favourites } from './features/favouritesPage/FavouritesPage';

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
        <Route path="/phones/1" element={<ProductDetailsPage />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </>
  );
}

export default App;
