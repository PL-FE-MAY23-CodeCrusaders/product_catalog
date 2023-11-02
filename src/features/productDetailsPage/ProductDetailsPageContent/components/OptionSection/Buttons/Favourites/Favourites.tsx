import './Favourites.scss';
import { ReactComponent as Heart } from './heart.svg';

export const Favourites = () => (
  <button
    type="button"
    className="favourites-button"
    aria-label="Add to favourites"
  >
    <Heart className="favourites-button__heart" />
  </button>
);
