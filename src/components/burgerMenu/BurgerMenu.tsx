import React, { useState } from 'react';
import './BurgerMenu.scss';
import cart from '../../images/cart.png';
import favourites from '../../images/favourites.png';

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
            <a
              href="#home"
              className={`burger-nav__link ${
                activeNav === 'home' ? 'is-active' : ''
              }`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </a>
          </li>
          <li className="burger-nav__item">
            <a
              href="#phones"
              className={`burger-nav__link ${
                activeNav === 'phones' ? 'is-active' : ''
              }`}
              onClick={() => handleNavClick('phones')}
            >
              Phones
            </a>
          </li>
          <li className="burger-nav__item">
            <a
              href="#tablets"
              className={`burger-nav__link ${
                activeNav === 'tablets' ? 'is-active' : ''
              }`}
              onClick={() => handleNavClick('tablets')}
            >
              Tablets
            </a>
          </li>
          <li className="burger-nav__item">
            <a
              href="#accessories"
              className={`burger-nav__link ${
                activeNav === 'accessories' ? 'is-active' : ''
              }`}
              onClick={() => handleNavClick('accessories')}
            >
              Accessories
            </a>
          </li>
        </ul>
      </nav>
      <div className="burger-icon">
        <div
          className={`burger-icon__box ${
            activeNav === 'fav' ? 'box-Active' : ''
          }`}
        >
          <a href="#fav" onClick={() => handleNavClick('fav')}>
            <img
              src={favourites}
              className="burger-icon__img"
              alt="wishlist icon"
            />
          </a>
        </div>
        <div
          className={`burger-icon__box ${
            activeNav === 'cart' ? 'box-Active' : ''
          }`}
        >
          <a href="#cart" onClick={() => handleNavClick('cart')}>
            <img src={cart} className="burger-icon__img" alt="Cart" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
