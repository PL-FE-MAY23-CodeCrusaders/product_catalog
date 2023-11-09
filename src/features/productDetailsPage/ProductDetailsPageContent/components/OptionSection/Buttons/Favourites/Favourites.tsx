/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './Favourites.scss';
import { ReactComponent as HeartWhite } from './heart.svg';
import { ReactComponent as HeartPink } from './pink-heart.svg';
import { useFavContext } from '../../../../../../../context/favContext/favContext';
import { useProductDetailsContext } from '../../../../../context/ProductDetailsContext';

export const Favourites = () => {
  const { phoneData, phonesData } = useProductDetailsContext();
  const { addToFav, removeFromFav, isAddedToFav } = useFavContext();

  const handleAddToFavClick = (phoneId: string | undefined) => {
    if (phoneId && isAddedToFav(phoneId)) {
      removeFromFav(phoneId);
    } else {
      const phone = phonesData.filter((p) => p.phoneId === phoneId);

      addToFav(phone[0]);
    }
  };

  return (
    <button
      type="button"
      className="favourites-button"
      aria-label="Add to favourites"
      onClick={() => handleAddToFavClick(phoneData!.id)}
    >
      {isAddedToFav(phoneData!.id) ? (
        <HeartPink className="favourites-button__heart" />
      ) : (
        <HeartWhite className="favourites-button__heart" />
      )}
    </button>
  );
};
