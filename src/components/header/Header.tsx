import React, { useState } from 'react';
// import BurgerMenu from './BurgerMenu';
import cart from '../../images/cart.png';
import favourites from '../../images/favourites.png';
import logo from '../../images/logo.png';
import menu from '../../images/menu.png';
import './Header.scss';

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
      <header className="header-home">
        <div className="header-home-logoBox">
          <a href="#home">
            <img src={logo} className="header-home-logo" alt="logo" />
          </a>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a
                href="#home"
                className={`nav-link ${
                  activeNav === 'home' ? 'is-active' : ''
                }`}
                onClick={() => handleNavClick('home')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#phones"
                className={`nav-link ${
                  activeNav === 'phones' ? 'is-active' : ''
                }`}
                onClick={() => handleNavClick('phones')}
              >
                Phones
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#tablets"
                className={`nav-link ${
                  activeNav === 'tablets' ? 'is-active' : ''
                }`}
                onClick={() => handleNavClick('tablets')}
              >
                Tablets
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#accessories"
                className={`nav-link ${
                  activeNav === 'accessories' ? 'is-active' : ''
                }`}
                onClick={() => handleNavClick('accessories')}
              >
                Accessories
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-icon">
          <div className="header-icon-box">
            <a href="#fav">
              <img
                src={favourites}
                className="header-icon-img"
                alt="wishlist icon"
              />
            </a>
          </div>
          <div className="header-icon-box">
            <a href="#cart">
              <img src={cart} className="header-icon-img" alt="Cart" />
            </a>
          </div>
          <div className="header-icon-box">
            <a onClick={handleMenuToggle} href="#menu">
              <img src={menu} className="header-icon-img" alt="Menu" />
            </a>
          </div>
        </div>
      </header>

      {/* {menuOpen && <BurgerMenu />} */}
    </div>
  );
}

export default Header;
