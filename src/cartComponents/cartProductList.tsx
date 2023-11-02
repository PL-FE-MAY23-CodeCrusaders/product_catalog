import React from 'react';
import CartItem from './cartItem';
import { Phone } from '../Phone';

interface CartProductListProps {
  cartState: Phone[]; // Assuming Phone[] is the correct type
  removeFromCart: (phoneId: string) => void;
}

const CartProductList: React.FC<CartProductListProps> = ({
  cartState,
  removeFromCart,
}) => {
  return (
    <div>
      {cartState.map((item) => (
        <CartItem
          key={item.itemId}
          item={item}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
};

export default CartProductList;
