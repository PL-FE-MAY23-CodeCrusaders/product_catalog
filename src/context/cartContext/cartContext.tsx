import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { Phone } from '../../types/Phone';
import { CartContextType } from './type';

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const initialCartState = JSON.parse(
    localStorage.getItem('cartState') || '[]',
  );
  const [cartState, setCartState] = useState<Phone[]>(initialCartState);
  const [quantitySum, setQuantitySum] = useState<number>(0);

  const setCartStateAndLocalStorage = (newState: Phone[]) => {
    setCartState(newState);
    localStorage.setItem('cartState', JSON.stringify(newState));
  };

  const addToCart = (product: Phone) => {
    let newProduct = { ...product };

    if (!product.quantity) {
      newProduct = { ...product, quantity: 1 };
    } else {
      newProduct = { ...product, quantity: product.quantity + 1 };
    }

    const newCartState = [...cartState, newProduct];

    setCartStateAndLocalStorage(newCartState);
  };

  const updateQuantityInLocalStorage = () => {
    setCartStateAndLocalStorage(cartState);
  };

  const removeFromCart = (phoneId: string) => {
    const newCartState = cartState.filter(
      (product: Phone) => product.itemId !== phoneId,
    );

    setCartStateAndLocalStorage(newCartState);
  };

  const handleSumQuantity = (cState: Phone[]) => {
    const sum = cState.reduce((acc, currentItem) => {
      if (currentItem.quantity) {
        return acc + currentItem.quantity;
      }

      return acc;
    }, 0);

    setQuantitySum(sum);
  };

  const clearCart = () => {
    setCartStateAndLocalStorage([]);
  };

  const isAddedToCart = (phoneId: string) => cartState.some((p) => p.itemId === phoneId);
  const [changeQuantity, setChangeQuantity] = useState<number>(0);

  useEffect(() => {
    handleSumQuantity(cartState);
  }, [cartState, changeQuantity]);

  return (
    <CartContext.Provider
      value={{
        cartState,
        addToCart,
        removeFromCart,
        clearCart,
        isAddedToCart,
        quantitySum,
        changeQuantity,
        setChangeQuantity,
        updateQuantityInLocalStorage,
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
