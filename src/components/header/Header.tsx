import React, { useState } from 'react';
import cart from '../../images/cart.png';
import favourites from '../../images/favourites.png';
import logo from '../../images/logo.png';
import menu from '../../images/menu.png';
import close from '../../images/Close.png';
import './Header.scss';
import BurgerMenu from './BurgerMenu/BurgerMenu';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('none');

  const handleNavClick = (value: string) => {
    setActiveNav(value);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className="header">
        <div className="header__logo-box">
          <a href="#home">
            <img src={logo} className="header__logo" alt="logo" />
          </a>
        </div>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                className={`nav__link ${
                  activeNav === 'home' ? 'is-active' : ''
                }`}
                onClick={() => handleNavClick('home')}
              >
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#phones"
                className={`nav__link ${
                  activeNav === 'phones' ? 'is-active' : ''
                }`}
                onClick={() => handleNavClick('phones')}
              >
                Phones
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#tablets"
                className={`nav__link ${
                  activeNav === 'tablets' ? 'is-active' : ''
                }`}
                onClick={() => handleNavClick('tablets')}
              >
                Tablets
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#accessories"
                className={`nav__link ${
                  activeNav === 'accessories' ? 'is-active' : ''
                }`}
                onClick={() => handleNavClick('accessories')}
              >
                Accessories
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__icon">
          <div className={`header__icon-box ${
            activeNav === 'fav' ? 'active-icon' : ''
          }`}
          >
            <a
              onClick={() => handleNavClick('fav')}
              href="#fav"
            >
              <img
                src={favourites}
                alt="wishlist"
                className="header__icon-img"
              />
            </a>
          </div>
          <div className={`header__icon-box ${
            activeNav === 'cart' ? 'active-icon' : ''
          }`}
          >
            <a
              onClick={() => handleNavClick('cart')}
              href="#cart"
            >
              <img
                src={cart}
                alt="Cart"
                className="header__icon-img"
              />
            </a>
          </div>
          <div className="header__icon-box">
            <a onClick={handleMenuToggle} href="#menu">
              {menuOpen ? (
                <img
                  src={close}
                  className="header__icon-img"
                  alt="Close menu"
                />
              ) : (
                <img
                  src={menu}
                  className="header__icon-img"
                  alt="menu"
                />
              )}
            </a>
          </div>
        </div>
      </header>
      {menuOpen && <BurgerMenu />}
    </div>
  );
}

export default Header;
