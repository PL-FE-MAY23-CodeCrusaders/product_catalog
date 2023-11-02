import React, { createContext, useContext, ReactNode, useState } from 'react';
import { Phone } from './Phone';

interface CartContextProps {
  cartState: Phone[];
  addToCart: (product: Phone) => void;
  removeFromCart: (phoneId: string) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

const testValue: Phone[] = [
  {
    category: 'Smartphone',
    phoneId: '1',
    itemId: '101',
    name: 'iPhone 13',
    fullPrice: 999,
    price: 899,
    screen: '6.1 inches',
    capacity: '128GB',
    color: 'Midnight',
    ram: '4GB',
    year: 2022,
    image: 'iphone13.jpg',
  },
  {
    category: 'Smartphone',
    phoneId: '2',
    itemId: '102',
    name: 'Samsung Galaxy S21',
    fullPrice: 899,
    price: 799,
    screen: '6.2 inches',
    capacity: '256GB',
    color: 'Phantom Gray',
    ram: '8GB',
    year: 2021,
    image: 'samsungs21.jpg',
  },
];

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartState, setCartState] = useState<Phone[]>(testValue);

  const addToCart = (product: Phone) => {
    // Implement your addToCart logic here
    setCartState([...cartState, product]);
  };

  const removeFromCart = (phoneId: string) => {
    // Implement your removeFromCart logic here
    setCartState(
      cartState.filter((product: Phone) => product.phoneId !== phoneId)
    );
  };

  return (
    <CartContext.Provider value={{ cartState, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
}
