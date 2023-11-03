import { useState } from 'react';
import CartProductList from './cartComponents/cartProductList';
import CartSum from './cartComponents/cartSum';
import Back from './images/back.png';
import './cart.scss';
import { useCartContext } from './cartContext';
// import { Phone } from './Phone';

export const Cart = () => {
  const { cartState, removeFromCart, clearCart } = useCartContext();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [checkedout, setCheckedout] = useState(false);
  const [numOfItems, setNumOfItems] = useState(0);
  const [sumOfPrice, setSumOfPrice] = useState(0);

  const handleCheckOut = () => {
    clearCart();
    setCheckedout(true);
    setNumOfItems(0);
    setSumOfPrice(0);
  };

  return (
    <div className="cart">
      <nav className="cart-nav">
        <div className="cart-nav-iconBox">
          <img src={Back} alt="Back Icon" className="cart-nav-icon" />
        </div>
        <a className="cart-nav-link" href="#home">
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
            <CartSum
              cartState={cartState}
              setSumOfPrice={setSumOfPrice}
              setNumOfItems={setNumOfItems}
              sumOfPrice={sumOfPrice}
              numOfItems={numOfItems}
            />
          </div>
          <button
            type="submit"
            className="cart-checkout-button"
            onClick={handleCheckOut}
          >
            Checkout
          </button>
        </div>
      </div>
      <button
        type="submit"
        className={`cart-message ${checkedout ? 'message-active' : ''}`}
        onClick={() => setCheckedout(false)}
      >
        Checkout is not implemented yet.
      </button>
    </div>
  );
};
