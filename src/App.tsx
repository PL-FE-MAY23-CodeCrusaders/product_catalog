import { Route, Routes } from 'react-router-dom';
import Header from './commonComponents/header/Header';
import './App.scss';

import PageNotFound from './features/pageNotFound/PageNotFound';
import { CartProvider } from './context/cartContext/cartContext';

import { Home } from './features/homePage/HomePage';
import { Phones } from './features/phonesPage/PhonesPage';
import { Tablets } from './features/tabletsPage/TabletsPage';
import { Accessories } from './features/accessoriesPage/AccessoriesPage';
import { Favourites } from './features/favouritesPage/FavouritesPage';
import { Footer } from './commonComponents/Footer';
import { Cart } from './features/cart/Cart';
import { ProductDetailsPage } from './features/productDetailsPage/ProductDetailsPage';
import { FavProvider } from './context/favContext/favContext';

function App() {
  return (
    <div className="App">
      <FavProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/phones" element={<Phones />} />
            <Route path="/phones/:id" element={<ProductDetailsPage />} />
            <Route path="/tablets" element={<Tablets />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </CartProvider>
      </FavProvider>
    </div>
  );
}

export default App;
