import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './BurgerMenu.scss';
import cart from '../../../images/cart.png';
import favourites from '../../../images/favourites.png';

function BurgerMenu() {
  const [activeNav, setActiveNav] = useState('home');

  const handleNavClick = (value: string) => {
    setActiveNav(value);
  };

  return (
    <div className="burger">
      <nav className="burger-nav">
        <ul className="burger-nav__list">
          <li className="burger-nav__item">
            <NavLink
              to="/"
              className={`burger-nav__link ${
                activeNav === 'home' ? 'is-active' : ''
              }`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </NavLink>
          </li>
          <li className="burger-nav__item">
            <NavLink
              to="/phones"
              className={`burger-nav__link ${
                activeNav === 'phones' ? 'is-active' : ''
              }`}
              onClick={() => handleNavClick('phones')}
            >
              Phones
            </NavLink>
          </li>
          <li className="burger-nav__item">
            <NavLink
              to="/tablets"
              className={`burger-nav__link ${
                activeNav === 'tablets' ? 'is-active' : ''
              }`}
              onClick={() => handleNavClick('tablets')}
            >
              Tablets
            </NavLink>
          </li>
          <li className="burger-nav__item">
            <NavLink
              to="/accessories"
              className={`burger-nav__link ${
                activeNav === 'accessories' ? 'is-active' : ''
              }`}
              onClick={() => handleNavClick('accessories')}
            >
              Accessories
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="burger-icon">
        <div
          className={`burger-icon__box ${
            activeNav === 'fav' ? 'box-Active' : ''
          }`}
        >
          <NavLink to="/fav" onClick={() => handleNavClick('fav')}>
            <img
              src={favourites}
              className="burger-icon__img"
              alt="wishlist icon"
            />
          </NavLink>
        </div>
        <div
          className={`burger-icon__box ${
            activeNav === 'cart' ? 'box-Active' : ''
          }`}
        >
          <NavLink to="/cart" onClick={() => handleNavClick('cart')}>
            <img src={cart} className="burger-icon__img" alt="Cart" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
