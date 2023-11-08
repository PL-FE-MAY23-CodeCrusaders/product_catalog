import './AddToCart.scss';
import { useCartContext } from '../../../../../../../context/cartContext';
import { useProductDetailsContext } from '../../../../../context/ProductDetailsContext';

export const AddToCart = () => {
  const { phoneData, phonesData } = useProductDetailsContext();
  const { addToCart } = useCartContext();

  const handleAddToCartClick = (phoneId: string | undefined) => {
    if (phoneId) {
      const phone = phonesData.filter((p) => p.phoneId === phoneId);

      addToCart(phone[0]);
    }
  };

  return (
    <button
      type="button"
      className="add-button"
      onClick={() => handleAddToCartClick(phoneData?.id)}
    >
      Add to cart
    </button>
  );
};
