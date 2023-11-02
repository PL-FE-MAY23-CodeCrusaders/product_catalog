//import { useNavigate } from 'react-router-dom';
import CartProductList from './cartComponents/cartProductList';
import { CartSum } from './cartComponents/cartSum';
import Back from './images/back.png';
import './cart.scss';
import React from 'react';
import { useCartContext } from './cartContext';
//import { Phone } from './Phone';

export const Cart = () => {
  const { cartState, removeFromCart } = useCartContext();

  return (
    <div className="cart">
      <nav className="cart-nav">
        <div className="cart-nav-iconBox">
          <img src={Back} alt="Back Icon" className="cart-nav-icon" />
        </div>
        <a className="cart-nav-link" href="#home">
          {/* <a className="cart-nav-link" onClick={() => navigate(-1)}> */}
          {/* waiting for router working so i can implemend this button */}
          Back
        </a>
      </nav>

      <h1 className="cart-title-text">Cart</h1>

      <div className="cart-contentBox">
        <div className="cart-productCardsBox">
          <CartProductList
            cartState={cartState}
            removeFromCart={removeFromCart}
          />
        </div>
        <div className="cart-checkoutBox">
          <div className="cart-sumBox">
            <CartSum />
          </div>
          <button className="cart-checkout-button">Checkout</button>
        </div>
      </div>
    </div>
  );
};
