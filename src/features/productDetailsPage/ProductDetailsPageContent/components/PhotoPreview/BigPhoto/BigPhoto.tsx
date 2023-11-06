import { useProductDetailsContext } from '../../../../context/ProductDetailsContext';
import './BigPhoto.scss';

export const BigPhoto = () => {
  const { photoPath } = useProductDetailsContext();

  return (
    <div className="bigPhoto">
      <img className="bigPhoto-img" src={photoPath} alt="" />
    </div>
  );
};
