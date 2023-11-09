import React, { useEffect } from 'react';
import { Phone } from '../../../types/Phone';
import CartItem from './CartItem';

interface CartProductListProps {
  cartState: Phone[];
  removeFromCart: (phoneId: string) => void;
  setQuantity: (value: number) => void;
  quantity: number;
  changeQuantity: number;
  setChangeQuantity: (num: number) => void;
}

const CartProductList: React.FC<CartProductListProps> = ({
  cartState,
  removeFromCart,
  setQuantity,
  quantity,
  changeQuantity,
  setChangeQuantity,
}) => {
  useEffect(() => {}, [cartState]);

  return (
    <div>
      {cartState.map((item) => (
        <CartItem
          key={item.itemId}
          item={item}
          removeFromCart={removeFromCart}
          setQuantity={setQuantity}
          quantity={quantity}
          changeQuantity={changeQuantity}
          setChangeQuantity={setChangeQuantity}
        />
      ))}
    </div>
  );
};

export default CartProductList;
