import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Back from '../../images/back.png';
import './Cart.scss';
import { Phone } from '../../types/Phone';
import { useCartContext } from '../../context/cartContext/cartContext';
import CartProductList from './components/CartProductList';
import CartSum from './components/CartSum';
import { BackArrow } from '../../commonComponents/BackArrow';

export const Cart = () => {
  const {
    cartState,
    removeFromCart,
    clearCart,
    setChangeQuantity,
    changeQuantity,
  } = useCartContext();
  const [checkedout, setCheckedout] = useState(false);
  const [numOfItems, setNumOfItems] = useState(0);
  const [sumOfPrice, setSumOfPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleCheckOut = () => {
    clearCart();
    setCheckedout(true);
    setNumOfItems(0);
    setSumOfPrice(0);
    cartState.map((item: Phone) => item.quantity === 1);
  };

  useEffect(() => {}, [cartState]);

  return (
    <div className="cart">
      <BackArrow />
      <h1 className="cart-title-text">Cart</h1>

      <div className="cart-contentBox">
        <div className="cart-productCardsBox">
          <CartProductList
            cartState={cartState}
            removeFromCart={removeFromCart}
            quantity={quantity}
            setQuantity={setQuantity}
            changeQuantity={changeQuantity}
            setChangeQuantity={setChangeQuantity}
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
              quantity={quantity}
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
        <NavLink to="/" className="cart-message-text">
          Checkout is not implemented yet.
        </NavLink>
      </button>
    </div>
  );
};
