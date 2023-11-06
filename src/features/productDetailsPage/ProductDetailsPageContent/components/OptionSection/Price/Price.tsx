import { useProductDetailsContext } from '../../../../context/ProductDetailsContext';
import './Price.scss';
import { DiscountPrice } from './DiscountPrice';
import { OldPrice } from './OldPrice';

export const Price = () => {
  const { phoneData } = useProductDetailsContext();

  return (
    <div className="price">
      <DiscountPrice newPrice={phoneData?.priceDiscount || ''} />
      <OldPrice oldPrice={phoneData?.priceRegular || ''} />
    </div>
  );
};
