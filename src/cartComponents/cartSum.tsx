/* eslint-disable no-restricted-syntax */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Phone } from '../Phone';
import './cartSum.scss';

interface SumItemProps {
  cartState: Phone[]; // Assuming Phone[] is the correct type
  setSumOfPrice: (value: number) => void;
  setNumOfItems: (value: number) => void;
  sumOfPrice: number; // Fixed the syntax
  numOfItems: number;
}

const CartSum: React.FC<SumItemProps> = ({
  cartState,
  setSumOfPrice,
  setNumOfItems,
  sumOfPrice,
  numOfItems,
}) => {
  useEffect(() => {
    const sum = cartState.length;

    setNumOfItems(sum);
    let totalPriceSum = 0;

    for (const item of cartState) {
      totalPriceSum += item.fullPrice;
    }

    setSumOfPrice(totalPriceSum);
  }, [cartState]);

  return (
    <>
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
    </>
  );
};

export default CartSum;
