import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ReactImageMagnify from 'react-image-magnify';
import addToFavouritesDefault from '../../images/addToFavouritesDefault.png';
import addToFavouritesAdded from '../../images/addToFovouritesAdded.png';
import './favProductList.scss';
import { useCartContext } from '../../context/cartContext/cartContext';
import { Phone } from '../../types/Phone';

interface FavListProps {
  favState: Phone[];
  removeFromFav: (value: string) => void;
}

const FavProductList: React.FC<FavListProps> = ({
  favState,
  removeFromFav,
}) => {
  const [phoneData, setPhoneData] = useState<Phone[]>([]);
  const [isAddedToCart, setIsAddedToCart] = useState<boolean[]>([]);
  const [isFavourite, setIsFavourite] = useState<boolean[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState<boolean>(false);
  const { addToCart } = useCartContext();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = favState;

        setPhoneData(data);
        setIsAddedToCart(new Array(data.length).fill(false));
        setIsFavourite(new Array(data.length).fill(true));
        setIsLoading(false);
      } catch (e) {
        setError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [favState]);

  const handleAddToCartClick = (index: number, phone: Phone) => {
    const updatedCartStatus = [...isAddedToCart];

    updatedCartStatus[index] = !updatedCartStatus[index];
    setIsAddedToCart(updatedCartStatus);
    addToCart(phone);
  };

  const handleButtonClick = (index: number, phone: Phone) => {
    const updatedFavouriteStatus = [...isFavourite];

    updatedFavouriteStatus[index] = !updatedFavouriteStatus[index];
    setIsFavourite(updatedFavouriteStatus);

    removeFromFav(phone.itemId);
  };

  if (isLoading) {
    return (
      <div className="container">
        <Skeleton height={500} />
      </div>
    );
  }

  if (isError) {
    return <div>Error fetching data.</div>;
  }

  return (
    <div className="fav__content">
      {phoneData.map((phone, index) => (
        <div className="card" key={phone.itemId}>
          <ReactImageMagnify
            className="card-img"
            smallImage={{
              isFluidWidth: true,
              src: phone.image,
            }}
            largeImage={{
              width: 800,
              height: 840,
              src: phone.image,
            }}
          />
          <h4>{phone.name}</h4>
          <div className="card__price">
            <h3 className="card__price--title">
              <span> &#36;</span>
              {phone.price}
            </h3>
            <h3 className="card__price--title-previous">
              <s>
                <span> &#36;</span>
                {phone.fullPrice}
              </s>
            </h3>
          </div>
          <div className="card__description">
            <div className="card__details">
              <div className="card__details-left">Screen</div>
              <div className="card__details-right">{phone.screen}</div>
            </div>
            <div className="card__details">
              <div className="card__details-left">Capacity</div>
              <div className="card__details-right">{phone.capacity}</div>
            </div>
            <div className="card__details">
              <div className="card__details-left">RAM</div>
              <div className="card__details-right">{phone.ram}</div>
            </div>
          </div>
          <div className="card__buttons">
            <button
              type="button"
              className={`card__buttons-left ${
                isAddedToCart[index] ? 'added-to-cart' : ''
              }`}
              onClick={() => handleAddToCartClick(index, phone)}
            >
              {isAddedToCart[index] ? 'Added to cart' : 'Add to cart'}
            </button>
            <button
              type="button"
              className={`card__buttons-right ${
                isFavourite[index] ? 'added-to-favourites' : ''
              }`}
              onClick={() => handleButtonClick(index, phone)}
            >
              <div className="favourites">
                <img
                  src={
                    isFavourite[index]
                      ? addToFavouritesAdded
                      : addToFavouritesDefault
                  }
                  alt="Favourites"
                  title={
                    isFavourite[index]
                      ? 'Added to favourites'
                      : 'Add to favourites'
                  }
                />
              </div>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavProductList;