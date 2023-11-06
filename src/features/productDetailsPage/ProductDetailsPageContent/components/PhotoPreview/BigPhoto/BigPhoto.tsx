import './BigPhoto.scss';
import {
  useProductDetailsPageContext,
} from '../../../../context/ProductDetailsPageContext';

export const BigPhoto = () => {
  const { photoPath } = useProductDetailsPageContext();

  return (
    <div className="bigPhoto">
      <img className="bigPhoto-img" src={photoPath} alt="" />
    </div>
  );
};
