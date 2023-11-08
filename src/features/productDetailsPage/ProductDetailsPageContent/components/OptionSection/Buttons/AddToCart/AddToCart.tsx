import './AddToCart.scss';
import { useCartContext } from '../../../../../../../context/cartContext';
import { useProductDetailsContext } from '../../../../../context/ProductDetailsContext';

export const AddToCart = () => {
  const { phoneData, phonesData } = useProductDetailsContext();
  const { addToCart, cartState, removeFromCart } = useCartContext();

  const isAddedToCart = cartState.find(p => p.phoneId === phoneData?.id);

  const handleAddToCartClick = (phoneId: string | undefined) => {
    if (phoneId && isAddedToCart) {
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
        isAddedToCart ? 'added-to-cart' : ''}`}
      onClick={() => handleAddToCartClick(phoneData?.id)}
    >
      Add to cart
    </button>
  );
};
