import { Phone } from '../../types/Phone';

export interface CartContextType {
  cartState: Phone[];
  addToCart: (product: Phone) => void;
  removeFromCart: (phoneId: string) => void;
  clearCart: () => void;
  isAddedToCart: (phoneId: string) => boolean;
  quantitySum: number;
  changeQuantity: number;
  setChangeQuantity: (num: number) => void;
}
