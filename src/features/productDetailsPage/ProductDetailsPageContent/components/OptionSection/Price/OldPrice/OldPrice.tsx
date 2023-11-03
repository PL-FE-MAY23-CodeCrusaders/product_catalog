import './OldPrice.scss';

type Props = {
  oldPrice: number | string;
};
export const OldPrice = ({ oldPrice }: Props) => <p className="price-old">{`$${oldPrice}`}</p>;
