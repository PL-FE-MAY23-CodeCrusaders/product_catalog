import { useProductDetailsPageContext } from '../../../../context/ProductDetailsPageContext';
import './Price.scss';
import { DiscountPrice } from './DiscountPrice';
import { OldPrice } from './OldPrice';

export const Price = () => {
  const { phoneData } = useProductDetailsPageContext();

  return (
    <div className="price">
      <DiscountPrice newPrice={phoneData?.priceDiscount || ''} />
      <OldPrice oldPrice={phoneData?.priceRegular || ''} />
    </div>
  );
};
