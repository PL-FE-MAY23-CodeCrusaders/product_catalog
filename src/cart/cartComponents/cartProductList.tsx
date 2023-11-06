import React, { useEffect } from 'react';
import CartItem from './cartItem';
import { Phone } from '../../Phone';

interface CartProductListProps {
  cartState: Phone[];
  removeFromCart: (phoneId: string) => void;
  setQuantity: (value: number) => void;
  quantity: number;
}

const CartProductList: React.FC<CartProductListProps> = ({
  cartState,
  removeFromCart,
  setQuantity,
  quantity,
}) => {
  useEffect(() => {
  }, [cartState]);

  return (
    <div>
      {cartState.map((item) => (
        <CartItem
          key={item.itemId}
          item={item}
          removeFromCart={removeFromCart}
          setQuantity={setQuantity}
          quantity={quantity}
        />
      ))}
    </div>
  );
};

export default CartProductList;
