/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './AddToCart.scss';
import { useCartContext } from '../../../../../../../context/cartContext/cartContext';
import { useProductDetailsContext } from '../../../../../context/ProductDetailsContext';

export const AddToCart = () => {
  const { phoneData, phonesData } = useProductDetailsContext();
  const { addToCart, removeFromCart, isAddedToCart } = useCartContext();

  const handleAddToCartClick = (phoneId: string | undefined) => {
    if (phoneId && isAddedToCart(phoneId)) {
      removeFromCart(phoneId);
    } else {
      const phone = phonesData.filter((p) => p.phoneId === phoneId);

      addToCart(phone[0]);
    }
  };

  return (
    <button
      type="button"
      className={`add-button ${
        isAddedToCart(phoneData!.id) ? 'added-to-cart' : ''
      }`}
      onClick={() => handleAddToCartClick(phoneData?.id)}
    >
      Add to cart
    </button>
  );
};
