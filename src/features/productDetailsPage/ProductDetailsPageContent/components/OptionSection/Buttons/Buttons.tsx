import './Buttons.scss';
import { AddToCart } from './AddToCart';
import { Favourites } from './Favourites';

export const Buttons = () => (
  <div className="buttons">
    <AddToCart />
    <Favourites />
  </div>
);
