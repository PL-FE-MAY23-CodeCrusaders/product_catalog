/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from '../../../types/Phone';
import close from '../../../images/close.png';
import minus from '../../../images/Minus.png';
import plus from '../../../images/Plus.png';
import './CartItem.scss';
import { useCartContext } from '../../../context/cartContext/cartContext';

interface CartItemProps {
  item: Phone;
  removeFromCart: (phoneId: string) => void;
  setQuantity: (value: number) => void;
  quantity: number;
  changeQuantity: number;
  setChangeQuantity: (num:number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  removeFromCart,
  setQuantity,
  quantity,
  changeQuantity,
  setChangeQuantity,
}) => {
  // useEffect(() => {
  //   console.log(item.quantity);
  // }, [item.quantity, quantity]);

  const {
    updateQuantityInLocalStorage,
  } = useCartContext();

  const handleMinus = () => {
    if (item.quantity && item.quantity > 1) {
      item.quantity -= 1;
      const newQuantity = quantity + 1;

      setChangeQuantity(changeQuantity + 1);
      setQuantity(newQuantity);
      updateQuantityInLocalStorage();
    }
  };

  const handlePlus = () => {
    if (item.quantity) {
      item.quantity += 1;
      const newQuantity = quantity + 1;

      setChangeQuantity(changeQuantity + 1);
      setQuantity(newQuantity);
      updateQuantityInLocalStorage();
    }
  };

  return (
    <div className="cart-card">
      <div className="cart-card-mobileOne">
        <div className="cart-card-iconBox">
          <button
            type="button"
            onClick={() => removeFromCart(item.itemId)}
            className="cart-card-iconButton"
          >
            <img
              src={close}
              alt="Remove Item"
              className="cart-card-icon"
            />
          </button>
        </div>
        <div className="cart-card-photoBox">
          <img
            src={`https://crusaders.onrender.com/${item.image}`}
            alt="product"
            className="cart-card-photo"
          />
        </div>
        <div className="cart-card-nameBox">
          <Link to={`/phones/${item.phoneId}`} className="cart-card-name">
            {item.name}
          </Link>
        </div>
      </div>
      <div className="cart-card-mobileTwo">
        <div className="cart-card-amount">
          <div className="cart-card-amount-iconBox">
            <button
              type="button"
              onClick={() => handleMinus()}
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
              onClick={() => handlePlus()}
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
