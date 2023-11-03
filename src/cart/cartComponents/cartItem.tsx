/* eslint-disable no-param-reassign */
import React from 'react';
import { Phone } from '../../Phone';
import close from '../../images/Close.png';
import test from '../../images/testProductPhoto.svg';
import minus from '../../images/Minus.png';
import plus from '../../images/Plus.png';
import './cartItem.scss';

interface CartItemProps {
  item: Phone;
  removeFromCart: (phoneId: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, removeFromCart }) => {
  const handleMinus = () => {
    if (item.quantity && item.quantity > 1) {
      item.quantity -= 1;
    }
  };

  const handlePlus = () => {
    if (item.quantity) {
      item.quantity += 1;
    }
  };

  return (
    <div className="cart-card">
      <div className="cart-card-mobileOne">
        <div className="cart-card-iconBox">
          <button
            type="button"
            onClick={() => removeFromCart(item.phoneId)}
            className="cart-card-iconButton"
          >
            <img src={close} alt="Remove Item" className="cart-card-icon" />
          </button>
        </div>
        <div className="cart-card-photoBox">
          <img src={test} alt="product" className="cart-card-photo" />
        </div>
        <div className="cart-card-nameBox">
          <a href="/" className="cart-card-name">{item.name}</a>
        </div>
      </div>
      <div className="cart-card-mobileTwo">
        <div className="cart-card-amount">
          <div className="cart-card-amount-iconBox">
            <button
              type="button"
              onClick={() => handleMinus}
              className="cart-card-iconButton"
            >
              <img
                src={minus}
                alt="minus"
                className="cart-card-amount-icon"
              />
            </button>

          </div>
          <div className="cart-card-amount-numBox">
            <h5 className="cart-card-amount-num">{item.quantity}</h5>
          </div>
          <div className="cart-card-amount-iconBox">
            <button
              type="button"
              onClick={() => handlePlus}
              className="cart-card-iconButton"
            >
              <img
                src={plus}
                alt="plus"
                className="cart-card-amount-icon"
              />
            </button>
          </div>
        </div>
        <div className="cart-card-priceBox">
          <h2 className="cart-card-price">
            $
            {item.price}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
