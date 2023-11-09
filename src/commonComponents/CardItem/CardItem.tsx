import { Link } from 'react-router-dom';
import addToFavouritesDefault from '../../images/addToFavouritesDefault.png';
import addToFavouritesAdded from '../../images/addToFovouritesAdded.png';
import { useCartContext } from '../../context/cartContext/cartContext';
import { Phone } from '../../types/Phone';
import { useFavContext } from '../../context/favContext/favContext';
import { API_IMG_URL } from '../../api';
import './CardItem.scss';

type Props = {
  item: Phone;
};

export const CardItem = ({ item }: Props) => {
  const { addToCart, isAddedToCart, removeFromCart } = useCartContext();
  const { addToFav, isAddedToFav, removeFromFav } = useFavContext();

  const handleAddToCartClick = () => {
    if (isAddedToCart(item.itemId)) {
      removeFromCart(item.phoneId);
    } else {
      addToCart(item);
    }
  };

  const handleAddToFavClick = () => {
    if (isAddedToFav(item.itemId)) {
      removeFromFav(item.phoneId);
    } else {
      addToFav(item);
    }
  };

  return (
    <>
      <div className="cardItem" key={item.id}>
        <Link to={`/phones/${item.phoneId}`} className="card__link">
          <img
            className="cardItem__img"
            src={`${API_IMG_URL}${item.image}`}
            alt={item.name}
          />
        </Link>
        <h4 className="cardItem__title">
          {item.name}
        </h4>
        <div className="cardItem__price">
          <h3 className="cardItem__price--title">
            <span> &#36;</span>
            {item.price}
          </h3>
          <h3 className="cardItem__price--title-previous">
            <s>
              <span> &#36;</span>
              {item.fullPrice}
            </s>
          </h3>
        </div>
        <div className="cardItem__description">
          <div className="cardItem__details">
            <div className="cardItem__details-left">Screen</div>
            <div className="cardItem__details-right">{item.screen}</div>
          </div>
          <div className="cardItem__details">
            <div className="cardItem__details-left">Capacity</div>
            <div className="cardItem__details-right">{item.capacity}</div>
          </div>
          <div className="cardItem__details">
            <div className="cardItem__details-left">RAM</div>
            <div className="cardItem__details-right">{item.ram}</div>
          </div>
        </div>
        <div className="cardItem__buttons">
          <button
            type="button"
            className={`cardItem__buttons-left ${
              isAddedToCart(item.phoneId) ? 'added-to-cart' : ''
            }`}
            onClick={() => handleAddToCartClick()}
          >
            {isAddedToCart(item.phoneId) ? 'Added to cart' : 'Add to cart'}
          </button>
          <button
            type="button"
            className={`cardItem__buttons-right ${
              isAddedToFav(item.phoneId) ? 'added-to-favourites' : ''
            }`}
            onClick={() => handleAddToFavClick()}
          >
            <div className="favourites">
              <img
                src={
                  isAddedToFav(item.phoneId)
                    ? addToFavouritesAdded
                    : addToFavouritesDefault
                }
                alt="Favourites"
                title={
                  isAddedToFav(item.phoneId)
                    ? 'Added to favourites'
                    : 'Add to favourites'
                }
              />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};
