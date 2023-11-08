/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createContext,
  useContext,
  ReactNode,
  useState,
} from 'react';
import { Phone } from '../../types/Phone';
import { CartContextType } from './type';

const CartContext = createContext<CartContextType | undefined>(undefined);

// const testValue: Phone[] = [];

export function CartProvider({ children }: { children: ReactNode }) {
  const initialCartState = JSON.parse(
    localStorage.getItem('cartState') || '[]',
  );
  const [cartState, setCartState] = useState<Phone[]>(initialCartState);

  const setCartStateAndLocalStorage = (newState: Phone[]) => {
    setCartState(newState);
    localStorage.setItem('cartState', JSON.stringify(newState));
  };

  const addToCart = (product: Phone) => {
    let newProduct = { ...product };

    if (!product.quantity) {
      newProduct = { ...product, quantity: 1 };
    }

    const newCartState = [...cartState, newProduct];

    setCartStateAndLocalStorage(newCartState);
  };

  const removeFromCart = (phoneId: string) => {
    const newCartState = cartState.filter(
      (product: Phone) => product.itemId !== phoneId,
    );

    setCartStateAndLocalStorage(newCartState);
  };

  const clearCart = () => {
    setCartStateAndLocalStorage([]);
  };

  const isAddedToCart = (phoneId: string) => cartState.some((p) => p.itemId === phoneId);

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
