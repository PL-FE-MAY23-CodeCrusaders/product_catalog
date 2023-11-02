import React from 'react';
import { Phone } from '../Phone';
import close from '../images/Close.png';
import test from '../images/testProductPhoto.svg';
import minus from '../images/Minus.png';
import plus from '../images/Plus.png';
import './cartItem.scss';

interface CartItemProps {
  item: Phone;
  removeFromCart: (phoneId: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, removeFromCart }) => {
  return (
    <div className="cart-card">
      <div className="cart-card-iconBox">
        <img
          src={close}
          alt="remove item"
          className="cart-card-icon"
          onClick={() => removeFromCart(item.itemId)}
        />
      </div>
      <div className="cart-card-photoBox">
        <img src={test} alt="product photo" className="cart-card-photo" />
      </div>
      <a className="cart-card-name">{item.name}</a>
      <div className="cart-card-amount">
        <div className="cart-card-amount-iconBox">
          <img src={minus} alt="minus" className="cart-card-amount-icon" />
        </div>
        <h5 className="cart-card-amount-num">1</h5>
        <div className="cart-card-amount-iconBox">
          <img src={plus} alt="plus" className="cart-card-amount-icon" />
        </div>
        <div className="cart-card-priceBox">
          <h2 className="cart-card-price">${item.fullPrice}</h2>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
