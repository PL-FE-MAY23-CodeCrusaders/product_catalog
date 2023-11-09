import { Link } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css';
import ReactImageMagnify from 'react-image-magnify';
import addToFavouritesDefault from '../../images/addToFavouritesDefault.png';
import addToFavouritesAdded from '../../images/addToFovouritesAdded.png';
import { useCartContext } from '../../context/cartContext/cartContext';
import './CardItem.scss';
import { Phone } from '../../types/Phone';
import { useFavContext } from '../../context/favContext/favContext';

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
      <div className="card" key={item.id}>
        <Link to={`/phones/${item.phoneId}`} className="card__link">
          {/* Zawartość karty */}
          <ReactImageMagnify
            smallImage={{
              isFluidWidth: true,
              src: `https://crusaders.onrender.com/${item.image}`,
            }}
            largeImage={{
              width: 800,
              height: 840,
              src: `https://crusaders.onrender.com/${item.image}`,
            }}
          />
        </Link>
        <h4>{item.name}</h4>
        <div className="card__price">
          <h3 className="card__price--title">
            <span> &#36;</span>
            {item.price}
          </h3>
          <h3 className="card__price--title-previous">
            <s>
              <span> &#36;</span>
              {item.fullPrice}
            </s>
          </h3>
        </div>
        <div className="card__description">
          <div className="card__details">
            <div className="card__details-left">Screen</div>
            <div className="card__details-right">{item.screen}</div>
          </div>
          <div className="card__details">
            <div className="card__details-left">Capacity</div>
            <div className="card__details-right">{item.capacity}</div>
          </div>
          <div className="card__details">
            <div className="card__details-left">RAM</div>
            <div className="card__details-right">{item.ram}</div>
          </div>
        </div>
        <div className="card__buttons">
          <button
            type="button"
            className={`card__buttons-left ${
              isAddedToCart(item.phoneId) ? 'added-to-cart' : ''
            }`}
            onClick={() => handleAddToCartClick()}
          >
            {isAddedToCart(item.phoneId) ? 'Added to cart' : 'Add to cart'}
          </button>
          <button
            type="button"
            className={`card__buttons-right ${
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
