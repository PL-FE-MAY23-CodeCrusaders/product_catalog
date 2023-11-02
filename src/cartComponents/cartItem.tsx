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
      <div className="cart-card-mobileOne">
        <div className="cart-card-iconBox">
          <button
            type="button"
            onClick={() => removeFromCart(item.itemId)}
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
            <img src={minus} alt="minus" className="cart-card-amount-icon" />
          </div>
          <div className="cart-card-amount-numBox">
            <h5 className="cart-card-amount-num">1</h5>
          </div>
          <div className="cart-card-amount-iconBox">
            <img src={plus} alt="plus" className="cart-card-amount-icon" />
          </div>
        </div>
        <div className="cart-card-priceBox">
          <h2 className="cart-card-price">
            $
            {
              item.fullPrice
            }
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
