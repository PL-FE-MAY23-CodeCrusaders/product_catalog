/* eslint-disable no-restricted-syntax */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Phone } from '../../../types/Phone';
import './CartSum.scss';

interface SumItemProps {
  cartState: Phone[]; // Assuming Phone[] is the correct type
  setSumOfPrice: (value: number) => void;
  setNumOfItems: (value: number) => void;
  sumOfPrice: number;
  numOfItems: number;
  quantity: number;
}

const CartSum: React.FC<SumItemProps> = ({
  cartState,
  setSumOfPrice,
  setNumOfItems,
  sumOfPrice,
  numOfItems,
  quantity,
}) => {
  useEffect(() => {
    let sum = 0;

    for (const item of cartState) {
      if (item.quantity) {
        sum += item.quantity;
      }
    }

    setNumOfItems(sum);
    let totalPriceSum = 0;

    for (const item of cartState) {
      if (item.quantity) {
        totalPriceSum += item.price * item.quantity;
      }
    }

    setSumOfPrice(totalPriceSum);
  }, [cartState, quantity]);

  return (
    <div className="cart__sum">
      <h1 className="cart__sum-price">
        $
        {sumOfPrice}
      </h1>
      <h3 className="cart__sum-num">
        Total for
        {' '}
        {numOfItems}
        {' '}
        items
      </h3>
    </div>
  );
};

export default CartSum;
