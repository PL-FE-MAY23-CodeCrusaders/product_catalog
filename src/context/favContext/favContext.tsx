/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createContext,
  useContext,
  ReactNode,
  useState,
} from 'react';
import { Phone } from '../../types/Phone';
import { FavContextType } from './type';

const FavContext = createContext<FavContextType | undefined>(undefined);

export function FavProvider({ children }: { children: ReactNode }) {
  const initialFavState = JSON.parse(
    localStorage.getItem('favState') || '[]',
  );
  const [favState, setFavState] = useState<Phone[]>(initialFavState);

  const setFavStateAndLocalStorage = (newState: Phone[]) => {
    setFavState(newState);
    localStorage.setItem('favState', JSON.stringify(newState));
  };

  const addToFav = (product: Phone) => {
    let newProduct = { ...product };

    if (!product.quantity) {
      newProduct = { ...product, quantity: 1 };
    }

    const newFavState = [...favState, newProduct];

    setFavStateAndLocalStorage(newFavState);
  };

  const removeFromFav = (phoneId: string) => {
    setFavState(
      favState.filter((product: Phone) => product.itemId !== phoneId),
    );
  };

  const isAddedToFav = (phoneId: string) => favState.some((p) => p.itemId === phoneId);

  return (
    <FavContext.Provider
      value={{
        favState,
        addToFav,
        removeFromFav,
        isAddedToFav,
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
