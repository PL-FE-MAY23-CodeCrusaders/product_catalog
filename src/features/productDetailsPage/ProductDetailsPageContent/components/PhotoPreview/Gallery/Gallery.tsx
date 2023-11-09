import { API_IMG_URL } from '../../../../../../api';
import { useProductDetailsContext } from '../../../../context/ProductDetailsContext';
import './Gallery.scss';

export const Gallery = () => {
  const { phoneData, changePhoto, isActivePhoto }
    = useProductDetailsContext();

  if (!phoneData) {
    return null;
  }

  return (
    <div className="gallery">
      {phoneData
        && phoneData.images.map((img) => {
          const path = `${API_IMG_URL}${img}`;

          return (
            <button
              type="button"
              className={`gallery-button ${
                isActivePhoto(`${path}`) ? 'active' : ''
              }`}
              key={img}
              onClick={() => changePhoto(`${path}`)}
              aria-label="Change photo"
            >
              <img
                className="gallery-photo"
                src={`${path}`}
                alt=""
              />
            </button>
          );
        })}
    </div>
  );
};
