import { Route, Routes } from 'react-router-dom';
import Header from './commonComponents/header/Header';

import PageNotFound from './features/pageNotFound/PageNotFound';
import { CartProvider } from './context/cartContext';
import { FavProvider } from './context/favContext';

import { Home } from './features/homePage/HomePage';
import { Phones } from './features/phonesPage/PhonesPage';
import { Tablets } from './features/tabletsPage/TabletsPage';
import { Accessories } from './features/accessoriesPage/AccessoriesPage';
import { Favourites } from './features/favouritesPage/FavouritesPage';
import { Footer } from './commonComponents/Footer';
import { Cart } from './features/cart/Cart';
import { ProductDetailsPage } from './features/productDetailsPage/ProductDetailsPage';

function App() {
  return (
    <>
      <CartProvider>
        <FavProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/phones" element={<Phones />} />
            <Route path="/phones/1" element={<ProductDetailsPage />} />
            <Route path="/tablets" element={<Tablets />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/fav" element={<Favourites />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </FavProvider>
      </CartProvider>
    </>
  );
}

export default App;
