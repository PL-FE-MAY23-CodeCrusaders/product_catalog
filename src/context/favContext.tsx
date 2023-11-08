/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
} from 'react';
import { Phone } from '../types/Phone';

interface FavContextProps {
  favState: Phone[];
  addToFav: (product: Phone) => void;
  removeFromFav: (phoneId: string) => void;
}

const FavContext = createContext<FavContextProps | undefined>(undefined);

// const testValue: Phone[] = [];

export function FavProvider({ children }: { children: ReactNode }) {
  const [favState, setFavState] = useState<Phone[]>([]);

  const addToFav = (product: Phone) => {
    setFavState([...favState, product]);
  };

  const removeFromFav = (phoneId: string) => {
    // Implement your removeFromCart logic here
    setFavState(
      favState.filter((product: Phone) => product.itemId !== phoneId),
    );
  };

  return (
    <FavContext.Provider
      value={{
        favState,
        addToFav,
        removeFromFav,
      }}
    >
      {children}
    </FavContext.Provider>
  );
}

export function useFavContext() {
  const context = useContext(FavContext);

  if (context === undefined) {
    throw new Error('useFavContext must be used within a CartProvider');
  }

  return context;
}
