// import React, { useState, useEffect } from 'react';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import ReactImageMagnify from 'react-image-magnify';
// import addToFavouritesDefault from '../../images/addToFavouritesDefault.png';
// import addToFavouritesAdded from '../../images/addToFovouritesAdded.png';
// import phoneImg1 from '../../images/phoneImg1.png';
// import phoneImg1xl from '../../images/phoneImg1xl.png';
// import './Card.scss';

// interface PhoneData {
//   id: number;
//   name: string;
//   category: string;
//   phoneId: string;
//   itemId: string;
//   fullPrice: number;
//   price: number;
//   screen: string;
//   capacity: string;
//   color: string;
//   image: string;
//   ram: string;
//   year: number;
// }

// export const Card: React.FC = () => {
//   const [phoneData, setPhoneData] = useState<PhoneData[] | null>(null);
//   const [isAddedToCart, setIsAddedToCart] = useState(false);
//   const [isFavourite, setIsFavourite] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setError] = useState<boolean>(false);

//   const getData = async () => {
//     const data = fetch('/api/phones.json', {
//       headers: { Accept: 'application/json' },
//     })
//       .then((response) => response.json())
//       .catch((e) => {
//         throw new Error(`Error fetching data: ${e}`);
//       });

//     return data;
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const data = await getData();

//         setPhoneData(data);
//       } catch (e) {
//         setError(true);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleAddToCartClick = () => {
//     setIsAddedToCart(!isAddedToCart);
//   };

//   const handleButtonClick = () => {
//     setIsFavourite(!isFavourite);
//   };

//   return (
//     <div className="container">
//       <div className="card">
//         <div className="card__img">
//           <ReactImageMagnify
//             {...{
//               smallImage: {
//                 // alt: phoneData?.name || '',
//                 isFluidWidth: true,
//                 src: phoneImg1,
//               },
//               largeImage: {
//                 width: 800,
//                 height: 840,
//                 src: phoneImg1xl,
//               },
//             }}
//           />
//         </div>
//         <div className="card__title">
//           {phoneData && phoneData[0].name ? (
//             <h4>{phoneData[0].name}</h4>
//           ) : (
//             <Skeleton count={2} />
//           )}
//         </div>
//         <div className="card__price">
//           <div className="card__price--title">
//             <h3 className="card__price--title-actual">
//               <span> &#36;</span>
//               {phoneData ? phoneData[0].price : <Skeleton />}
//             </h3>
//             <h3 className="card__price--title-previous">
//               <s>
//                 <span> &#36;</span>
//                 {phoneData ? phoneData[0].fullPrice : <Skeleton />}
//               </s>
//             </h3>
//           </div>
//         </div>
//         <div className="card__description">
//           <div className="card__details">
//             <div className="card__details-left">Screen</div>
//             <div className="card__details-right">
//               {/* {phoneData ? phoneData.screen : <Skeleton />} */}
//               {phoneData && phoneData[0].screen ? (
//                 phoneData[0].screen
//               ) : <Skeleton />}
//             </div>
//           </div>
//           <div className="card__details">
//             <div className="card__details-left">Capacity</div>
//             <div className="card__details-right">
//               {/* {phoneData ? phoneData.capacity : <Skeleton />} */}
//               {phoneData && phoneData[0].capacity ? (
//                 phoneData[0].capacity
//               ) : <Skeleton />}
//             </div>
//           </div>
//           <div className="card__details">
//             <div className="card__details-left">RAM</div>
//             <div className="card__details-right">
//               {/* {phoneData ? phoneData.ram : <Skeleton />} */}
//               {phoneData && phoneData[0].ram ? (
//                 phoneData[0].ram
//               ) : <Skeleton />}
//             </div>
//           </div>
//         </div>
//         <div className="card__buttons">
//           {/* eslint-disable-next-line */}
//           <button
//             className={`card__buttons-left ${
//               isAddedToCart ? 'added-to-cart' : ''
//             }`}
//             onClick={handleAddToCartClick}
//           >
//             {isAddedToCart ? 'Added to cart' : 'Add to cart'}
//           </button>
//           {/* eslint-disable-next-line */}
//           <button
//             className={`card__buttons-right ${
//               isFavourite ? 'added-to-favourites' : ''
//             }`}
//             onClick={handleButtonClick}
//           >
//             <div className="favourites">
//               <img
//                 src={
//                   isFavourite ? addToFavouritesAdded : addToFavouritesDefault
//                 }
//                 alt="Favourites"
//                 title={
//                   isFavourite ? 'Added to favourites' : 'Add to favourites'
//                 }
//               />
//             </div>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ReactImageMagnify from 'react-image-magnify';
import addToFavouritesDefault from '../../images/addToFavouritesDefault.png';
import addToFavouritesAdded from '../../images/addToFovouritesAdded.png';
import { useCartContext } from '../../context/cartContext';
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
  const [phoneData, setPhoneData] = useState<PhoneData[]>([]);
  const [isAddedToCart, setIsAddedToCart] = useState<boolean[]>([]);
  const [isFavourite, setIsFavourite] = useState<boolean[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState<boolean>(false);
  const { addToCart } = useCartContext();

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
        setIsAddedToCart(new Array(data.length).fill(false));
        setIsFavourite(new Array(data.length).fill(false));
        setIsLoading(false);
      } catch (e) {
        setError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCartClick = (index: number, product: PhoneData) => {
    const updatedCartStatus = [...isAddedToCart];

    addToCart(product);
    updatedCartStatus[index] = !updatedCartStatus[index];
    setIsAddedToCart(updatedCartStatus);
  };

  const handleButtonClick = (index: number) => {
    const updatedFavouriteStatus = [...isFavourite];

    updatedFavouriteStatus[index] = !updatedFavouriteStatus[index];
    setIsFavourite(updatedFavouriteStatus);
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
          {/* Zawartość karty */}
          <ReactImageMagnify
            smallImage={{
              isFluidWidth: true,
              src: phone.image,
            }}
            largeImage={{
              width: 800,
              height: 840,
              src: phone.image, // Użyj tej samej ścieżki do dużej
              // grafiki, jeśli jest to odpowiednie dla Twojego projektu
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
              onClick={() => handleButtonClick(index)}
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
