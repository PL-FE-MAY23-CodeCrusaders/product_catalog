import 'react-loading-skeleton/dist/skeleton.css';
import './favProductList.scss';

import { CardItem } from '../../commonComponents/CardItem';
import { useFavContext } from '../../context/favContext/favContext';

const FavProductList: React.FC = () => {
  const { favState } = useFavContext();

  return (
    <div className="fav__content">
      {favState.map((phone) => (
        <CardItem item={phone} key={phone.id} />
      ))}
    </div>
  );
};

export default FavProductList;
