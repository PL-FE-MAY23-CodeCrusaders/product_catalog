import { Link, useLocation } from 'react-router-dom';
import homeIco from '../../images/Home.svg';
import leftArrow from '../../images/phonepage__arrow-right.svg';
import './Breadcrumbs.scss';

export const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = '/';
  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `${crumb}/`;

      return (
        <div key={crumb}>
          <Link className="breadcrumbs__link" to={currentLink}>
            <img
              src={leftArrow}
              alt="left arrow"
              className="breadcrumbs__arrow"
            />
            {crumb}
          </Link>
        </div>
      );
    });

  return (
    <div className="breadcrumbs">
      <div>
        <Link to="/">
          <img src={homeIco} alt="home icon" className="breadcrumbs__home" />
        </Link>
      </div>
      {crumbs}
    </div>
  );
};
