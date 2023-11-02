import React from 'react';
import './App.css';
import { Cart } from './cart';
import { CartProvider } from './cartContext';

function App() {
  return (
    <CartProvider>
      <Cart />
    </CartProvider>
  );
}

export default App;
