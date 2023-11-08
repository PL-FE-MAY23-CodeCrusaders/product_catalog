import { NavLink } from 'react-router-dom';
import './Logo.scss';

export const Logo = () => (
  <NavLink
    className="Logo"
    to="/"
  >
    <div className="Logo__icon" />
  </NavLink>
);
