import './Gallery.scss';
import {
  useProductDetailsPageContext,
} from '../../../../context/ProductDetailsPageContext';

export const Gallery = () => {
  const { phoneData, changePhoto, isActivePhoto }
    = useProductDetailsPageContext();

  return (
    <div className="gallery">
      {phoneData
        && phoneData.images.map((img) => {
          const path = img.slice(-6);

          return (
            <button
              type="button"
              className={`gallery-button ${
                isActivePhoto(`product_catalog/${path}`) ? 'active' : ''
              }`}
              key={img}
              onClick={() => changePhoto(`product_catalog/${path}`)}
              aria-label="Change photo"
            >
              <img
                className="gallery-photo"
                src={`product_catalog/${path}`}
                alt=""
              />
            </button>
          );
        })}
    </div>
  );
};
