import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ReactImageMagnify from 'react-image-magnify';
import addToFavouritesDefault from '../../images/addToFavouritesDefault.png';
import addToFavouritesAdded from '../../images/addToFovouritesAdded.png';
import { useCartContext } from '../../context/cartContext';
import './Card.scss';
import { Phone } from '../../types/Phone';

type Props = {
  item: Phone,
};

export const CardItem = ({ item }: Props) => {
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const [isError, setError] = useState<boolean>(false);
  const { addToCart } = useCartContext();

  const handleAddToCartClick = () => {
    const updatedCartStatus = !isAddedToCart;

    addToCart(item);
    setIsAddedToCart(updatedCartStatus);
  };

  const handleButtonClick = () => {
    const updatedFavouriteStatus = !isFavourite;

    setIsFavourite(updatedFavouriteStatus);
  };

  //   if (isLoading) {
  //     return (
  //       <div className="container">
  //         <Skeleton height={500} />
  //       </div>
  //     );
  //   }

  if (isError) {
    return <div>Error fetching data.</div>;
  }

  return (
    <>

      <div className="card" key={item.id}>
        {/* Zawartość karty */}
        <ReactImageMagnify
          smallImage={{
            isFluidWidth: true,
            src: item.image,
          }}
          largeImage={{
            width: 800,
            height: 840,
            src: item.image, // Użyj tej samej ścieżki do dużej
            // grafiki, jeśli jest to odpowiednie dla Twojego projektu
          }}
        />
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
              isAddedToCart ? 'added-to-cart' : ''
            }`}
            onClick={() => handleAddToCartClick()}
          >
            {isAddedToCart ? 'Added to cart' : 'Add to cart'}
          </button>
          <button
            type="button"
            className={`card__buttons-right ${
              isFavourite ? 'added-to-favourites' : ''
            }`}
            onClick={() => handleButtonClick()}
          >
            <div className="favourites">
              <img
                src={
                  isFavourite
                    ? addToFavouritesAdded
                    : addToFavouritesDefault
                }
                alt="Favourites"
                title={
                  isFavourite
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
