/* eslint-disable no-restricted-syntax */
/* eslint-disable react-hooks/exhaustive-deps */
import { useFavContext } from '../../context/favContext/favContext';
import './favSum.scss';

const FavSum: React.FC = () => {
  const { favState } = useFavContext();

  return (
    <div className="fav__sum">
      <h3 className="fav__sum-text">
        {favState.length}
        {' '}
        items
      </h3>
    </div>
  );
};

export default FavSum;
