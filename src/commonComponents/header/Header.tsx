/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cart from '../../images/cart.png';
import favourites from '../../images/favourites.png';
import logo from '../../images/logo.png';
import menu from '../../images/menu.png';
import close from '../../images/close.png';
import './Header.scss';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import { useCartContext } from '../../context/cartContext/cartContext';
import { useFavContext } from '../../context/favContext/favContext';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('none');
  const { quantitySum } = useCartContext();
  const { favState } = useFavContext();

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
          <NavLink to="/">
            <img
              src={logo}
              className="header__logo"
              alt="logo"
              onClick={() => handleNavClick('logo')}
            />
          </NavLink>
        </div>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="/"
                className={`nav__link ${
                  activeNav === 'home' ? 'is-active' : ''
                }`}
                onClick={() => handleNavClick('home')}
              >
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/phones"
                className={`nav__link ${
                  activeNav === 'phones' ? 'is-active' : ''
                }`}
                onClick={() => handleNavClick('phones')}
              >
                Phones
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/tablets"
                className={`nav__link ${
                  activeNav === 'tablets' ? 'is-active' : ''
                }`}
                onClick={() => handleNavClick('tablets')}
              >
                Tablets
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/accessories"
                className={`nav__link ${
                  activeNav === 'accessories' ? 'is-active' : ''
                }`}
                onClick={() => handleNavClick('accessories')}
              >
                Accessories
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="header__icon">
          <NavLink
            to="/favourites"
            onClick={() => handleNavClick('fav')}
            className={`header__icon-box ${
              activeNav === 'fav' ? 'active-icon' : ''
            }`}
          >
            <div className="header__cart">
              <img
                src={favourites}
                alt="wishlist"
                className="header__icon-img"
              />
              <div className="header__counter">{favState.length}</div>
            </div>
          </NavLink>
          <NavLink
            to="/cart"
            onClick={() => handleNavClick('cart')}
            className={`header__icon-box ${
              activeNav === 'cart' ? 'active-icon' : ''
            }`}
          >
            <div className="header__cart">
              <img src={cart} alt="Cart" className="header__cart-img" />
              <div className="header__counter">{quantitySum}</div>
            </div>
          </NavLink>
          <div className="header__icon-box">
            <a onClick={handleMenuToggle}>
              {menuOpen ? (
                <img
                  src={close}
                  className="header__icon-img"
                  alt="Close menu"
                />
              ) : (
                <img src={menu} className="header__icon-img" alt="menu" />
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
