import { NavLink, useLocation } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import './Footer.scss';

export const Footer: React.FC = () => {
  const { pathname } = useLocation();
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="Footer">
      <div className="Footer__content">
        <Logo />
        <div className="Footer__links">
          <NavLink
            className="Footer__links--link"
            target="_blank"
            to="https://github.com/PL-FE-MAY23-CodeCrusaders/product_catalog"
          >
            Github
          </NavLink>
          <NavLink
            className="Footer__links--link"
            to={{ pathname }}
          >
            Contact
          </NavLink>
          <NavLink
            className="Footer__links--link"
            to={{ pathname }}
          >
            Rights
          </NavLink>
        </div>
        <button
          type="button"
          className="Footer__navigation"
          onClick={handleScroll}
        >
          <p className="Footer__navigation--text">Back to top</p>
          <div className="Footer__navigation--icon" />
        </button>
      </div>
    </div>
  );
};
