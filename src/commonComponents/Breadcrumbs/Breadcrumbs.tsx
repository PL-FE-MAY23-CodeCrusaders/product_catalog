import { Link, useLocation } from 'react-router-dom';
import homeIco from '../../images/Home.svg';
import leftArrow from '../../images/arrow-right-gray.svg';
import './Breadcrumbs.scss';

export const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = '/';
  const pathSegments = location.pathname.split('/').filter((crumb) => crumb !== '');

  const crumbs = pathSegments.map((crumb, index) => {
    currentLink += `${crumb}/`;

    return (
      <div key={crumb}>
        <Link
          className={`breadcrumbs__link 
          ${index === pathSegments.length - 1
        ? 'breadcrumbs__current'
        : ''}`}
          to={currentLink}
        >
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
          <img
            src={homeIco}
            alt="home icon"
            className="breadcrumbs__home"
          />
        </Link>
      </div>
      {crumbs}
    </div>
  );
};
