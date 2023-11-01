import React, { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import './Card.scss';
import addToFavouritesDefault from '../../images/addToFavouritesDefault.png';
import addToFavouritesAdded from '../../images/addToFovouritesAdded.png';
import phoneImg1 from '../../images/phoneImg1.png';
import phoneImg1xl from '../../images/phoneImg1xl.png';

export const Card: React.FC = () => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  const handleAddToCartClick = () => {
    setIsAddedToCart(!isAddedToCart);
  };

  const handleButtonClick = () => {
    setIsFavourite(!isFavourite);
  };

  const watchImg300 = '../../images/phoneImg1.png';
  const watchImg1200 = '../../images/phoneImg1xl.png';

  return (
    <div className="container">
      <div className="card">
        <div className="card__img">
          {/* <img
            className="img"
            src={require('../../images/phone_img_1.png')}
            alt="Apple iPhone 14 Pro 128GB Silver (MQ023)"
          /> */}
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: 'Apple iPhone 14 Pro 128GB Silver (MQ023)',
                isFluidWidth: true,
                src: phoneImg1,
              },
              largeImage: {
                src: phoneImg1xl,
                width: 600,
                height: 640,
              },
            }}
          />
        </div>
        <div className="card__title">
          <h4>Apple iPhone 14 Pro 128GB Silver (MQ023)</h4>
        </div>
        <div className="card__price">
          <h3 className="card__price--title">
            <span className="card__price--title-actual">&#36;799</span>
            <span className="card__price--title-previous">
              <s>&#36;899</s>
            </span>
          </h3>
        </div>
        <div className="card__description">
          <div className="card__details">
            <div className="card__details-left">Screen</div>
            <div className="card__details-right">16&quot; OLED</div>
          </div>
          <div className="card__details">
            <div className="card__details-left">Capacity</div>
            <div className="card__details-right">128 GB</div>
          </div>
          <div className="card__details">
            <div className="card__details-left">RAM</div>
            <div className="card__details-right">16 GB</div>
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
// ------------------- KOD POD DYNAMICZNE DANE ------------------- //

// interface ProductData {
//   title: string;
//   price: number;
//   previousPrice: number;
//   screen: string;
//   capacity: number;
//   ram: number;
// }

// interface CardProps {
//   productData: ProductData;
// }

// export const Card: React.FC<CardProps> = ({ productData }) => {
//   const { title, price, previousPrice, screen, capacity, ram } = productData;

// const [isAddedToCart, setIsAddedToCart] = useState(false);
// const handleAddToCartClick = () => {
//   setIsAddedToCart(!isAddedToCart);
// };

//   return (
//     <div className={`container ${isAddedToCart ? 'added-to-cart' : ''}`}>
//       <div className="card">
//         <div className="card__img">
//           <img
//             className="img"
//             src={require('../../images/phone_img_1.png')}
//             alt={title}
//           />
//         </div>
//         <div className="card__title">
//         <h4>{title || `Apple iPhone 14 Pro 128GB Silver (MQ023)`}</h4>
//         </div>
//         <div className="card__price">
//           <h3 className="card__price--title">
//             <span className="card__price--title-actual">&#36;{price}</span>
//             <span className="card__price--title-previous">
//               <s>&#36;{previousPrice}</s>
//             </span>
//           </h3>
//         </div>
//         <div className="card__description">
//           <div className="card__details">
//             <div className="card__details-left">Screen</div>
//             <div className="card__details-right">{screen} OLED</div>
//           </div>
//           <div className="card__details">
//             <div className="card__details-left">Capacity</div>
//             <div className="card__details-right">{capacity} GB</div>
//           </div>
//           <div className="card__details">
//             <div className="card__details-left">RAM</div>
//             <div className="card__details-right">{ram} GB</div>
//           </div>
//         </div>
//         <div className="card__buttons">
//           <button
//             className={`card__buttons-left ${isAddedToCart ? 'added-to-cart' : ''}`}
//             onClick={handleAddToCartClick}
//           >
//             {isAddedToCart ? 'Added to cart' : 'Add to cart'}
//           <button
//             className={`card__buttons-right ${
//             isFavourite ? 'added-to-favourites' : ''
//             }`}
//             onClick={handleButtonClick}
//           >
//            <div className="favourites">
//             <img
//              src={
//               isFavourite ? addToFavouritesAdded : addToFavouritesDefault
//                }
//              alt="Favourites"
//              title={
//              isFavourite ? 'Added to favourites' : 'Add to favourites'
//               }
//            />
//           </div>
//          </button>
//         </div>
//       </div>
//     </div>
//   );
// };
