/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
} from 'react';
import { Phone } from '../types/Phone';

interface CartContextProps {
  cartState: Phone[];
  addToCart: (product: Phone) => void;
  removeFromCart: (phoneId: string) => void;
  clearCart: () => void;
  isAddedToCart: (phoneId: string) => boolean;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

// const testValue: Phone[] = [];

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartState, setCartState] = useState<Phone[]>([]);

  const addToCart = (product: Phone) => {
    let newProduct = { ...product };

    if (!product.quantity) {
      newProduct = { ...product, quantity: 1 };
    }

    setCartState([...cartState, newProduct]);
  };

  const removeFromCart = (phoneId: string) => {
    setCartState(
      cartState.filter((product: Phone) => product.itemId !== phoneId),
    );
  };

  const clearCart = () => {
    setCartState([]);
  };

  const isAddedToCart = (phoneId: string) => cartState.some((p) => p.phoneId === phoneId);

  return (
    <CartContext.Provider
      value={{
        cartState,
        addToCart,
        removeFromCart,
        clearCart,
        isAddedToCart,
      }}
    >
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
