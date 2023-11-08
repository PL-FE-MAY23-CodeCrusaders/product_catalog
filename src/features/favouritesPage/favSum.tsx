/* eslint-disable no-restricted-syntax */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './favSum.scss';
import { Phone } from '../../types/Phone';

interface FavSumProps {
  favState: Phone[];
}
const FavSum: React.FC<FavSumProps> = ({ favState }) => {
  let sum = favState.length;

  useEffect(() => {
    for (const item of favState) {
      if (item) {
        sum += 1;
      }
    }
  }, [favState]);

  return (
    <div className="fav__sum">
      <h3 className="fav__sum-text">
        {sum}
        {' '}
        items
      </h3>
    </div>
  );
};

export default FavSum;
