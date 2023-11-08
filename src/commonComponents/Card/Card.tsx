import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ReactImageMagnify from 'react-image-magnify';
import addToFavouritesDefault from '../../images/addToFavouritesDefault.png';
import addToFavouritesAdded from '../../images/addToFovouritesAdded.png';
import './Card.scss';
import { useCartContext } from '../../context/cartContext';
import { useFavContext } from '../../context/favContext';
import { Phone } from '../../types/Phone';

interface PhoneData {
  id: number;
  name: string;
  category: string;
  phoneId: string;
  itemId: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  image: string;
  ram: string;
  year: number;
  quantity?: number;
}

export const Card: React.FC = () => {
  const [phoneData, setPhoneData] = useState<PhoneData[]>([]);
  const [isFavourite, setIsFavourite] = useState<boolean[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState<boolean>(false);
  const { addToFav, removeFromFav, favState } = useFavContext();
  const { addToCart, isAddedToCart, removeFromCart } = useCartContext();

  const getData = async () => {
    const data = await fetch('/api/phones.json', {
      headers: { Accept: 'application/json' },
    })
      .then((response) => response.json())
      .catch((e) => {
        throw new Error(`Error fetching data: ${e}`);
      });

    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getData();

        setPhoneData(data);
        setIsFavourite(new Array(data.length).fill(false));
        setIsLoading(false);
      } catch (e) {
        setError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCartClick = (phone: Phone) => {
    if (isAddedToCart(phone.phoneId)) {
      removeFromCart(phone.phoneId);
    } else {
      addToCart(phone);
    }
  };

  const handleButtonClick = (index: number, phone: PhoneData) => {
    const updatedFavouriteStatus = [...isFavourite];

    updatedFavouriteStatus[index] = !updatedFavouriteStatus[index];
    setIsFavourite(updatedFavouriteStatus);
    let phoneID = '';

    if (favState.some(item => +item.itemId === phone.id)) {
      phoneID = `${phone.id}`;

      removeFromFav(phoneID);
    } else {
      addToFav(phone);
    }
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
    <>
      {phoneData.map((phone, index) => (
        <div className="card" key={phone.id}>
          <Link to={`/phones/${phone.phoneId}`} className="card__link">
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
          </Link>

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
                isAddedToCart(phone.phoneId) ? 'added-to-cart' : ''
              }`}
              onClick={() => handleAddToCartClick(phone)}
            >
              {isAddedToCart(phone.phoneId) ? 'Added to cart' : 'Add to cart'}
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
    </>
  );
};
