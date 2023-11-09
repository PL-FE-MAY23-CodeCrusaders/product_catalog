import { NavLink } from 'react-router-dom';
import './BurgerMenu.scss';
import cart from '../../../images/cart.png';
import favourites from '../../../images/favourites.png';

function BurgerMenu() {
  return (
    <div className="burger">
      <nav className="burger-nav">
        <ul className="burger-nav__list">
          <li className="burger-nav__item">
            <NavLink
              to="/"
              className="burger-nav__link "
            >
              Home
            </NavLink>
          </li>
          <li className="burger-nav__item">
            <NavLink
              to="/phones"
              className="burger-nav__link"
            >
              Phones
            </NavLink>
          </li>
          <li className="burger-nav__item">
            <NavLink
              to="/tablets"
              className="burger-nav__link"
            >
              Tablets
            </NavLink>
          </li>
          <li className="burger-nav__item">
            <NavLink
              to="/accessories"
              className="burger-nav__link"
            >
              Accessories
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="burger-icon">
        <div
          className="burger-icon__box"
        >
          <NavLink to="/favourites">
            <img
              src={favourites}
              className="burger-icon__img"
              alt="wishlist icon"
            />
          </NavLink>
        </div>
        <div
          className="burger-icon__box"
        >
          <NavLink to="/cart">
            <img src={cart} className="burger-icon__img" alt="Cart" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
