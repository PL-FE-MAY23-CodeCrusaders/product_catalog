import React, { useState, useEffect } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import addToFavouritesDefault from '../../images/addToFavouritesDefault.png';
import addToFavouritesAdded from '../../images/addToFovouritesAdded.png';
import phoneImg1 from '../../images/phoneImg1.png';
import phoneImg1xl from '../../images/phoneImg1xl.png';
import phoneData from '../../../public/api/phones.json'; // import pliku JSON
import './Card.scss';

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
}

export const Card: React.FC = () => {
  const [phoneData, setPhoneData] = useState<PhoneData | null>(null);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);

  const getData = async () => {
    const response = await fetch(
      '/public/api/phones.json',
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await getData();

      setPhoneData(data);
      try {
        setTimeout(async () => {
          setIsLoading(false);
        }, 1000);
      } catch (e) {
        setError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCartClick = () => {
    setIsAddedToCart(!isAddedToCart);
  };

  const handleButtonClick = () => {
    setIsFavourite(!isFavourite);
  };

  if (isLoading) {
    return <div>Ładowanie danych z api (jakiś loader tutaj) ...</div>;
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card__img">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: phoneData?.name || '',
                isFluidWidth: true,
                src: phoneImg1,
              },
              largeImage: {
                width: 800,
                height: 840,
                src: phoneImg1xl,
              },
            }}
          />
        </div>
        <div className="card__title">
          {phoneData && phoneData.name ? (
            <h4>{phoneData.name}</h4>
          ) : (
            <h4>Apple iPhone 11 64GB Yellow</h4>
          )}
        </div>
        <div className="card__price">
          {phoneData ? (
            <h3 className="card__price--title">
              <span className="card__price--title-actual">
                &#36;{phoneData.price}
              </span>
              <span className="card__price--title-previous">
                <s>&#36;{phoneData.fullPrice}</s>
              </span>
            </h3>
          ) : (
            <h3 className="card__price--title">
              <span className="card__price--title-actual">&#36;799</span>
              <span className="card__price--title-previous">
                <s>&#36;999</s>
              </span>
            </h3>
          )}
        </div>
        <div className="card__description">
          <div className="card__details">
            <div className="card__details-left">Screen</div>
            <div className="card__details-right">
              {phoneData ? phoneData.screen : '6.1" OLED'}
            </div>
          </div>
          <div className="card__details">
            <div className="card__details-left">Capacity</div>
            <div className="card__details-right">
              {phoneData ? phoneData.capacity : '128 GB'}
            </div>
          </div>
          <div className="card__details">
            <div className="card__details-left">RAM</div>
            <div className="card__details-right">
              {phoneData ? phoneData.ram : '64 GB'}
            </div>
          </div>
        </div>
        <div className="card__buttons">
          <button
            className={`card__buttons-left ${
              isAddedToCart ? 'added-to-cart' : ''
            }`}
            onClick={handleAddToCartClick}
          >
            {isAddedToCart ? 'Added to cart' : 'Add to cart'}
          </button>
          <button
            className={`card__buttons-right ${
              isFavourite ? 'added-to-favourites' : ''
            }`}
            onClick={handleButtonClick}
          >
            <div className="favourites">
              <img
                src={
                  isFavourite ? addToFavouritesAdded : addToFavouritesDefault
                }
                alt="Favourites"
                title={
                  isFavourite ? 'Added to favourites' : 'Add to favourites'
                }
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
