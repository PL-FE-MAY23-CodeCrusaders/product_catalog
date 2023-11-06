import { HeaderH2 } from '../../../HeaderH2';

type Props = {
  newPrice: number | string;
};
export const DiscountPrice = ({ newPrice }: Props) => (
  <HeaderH2 header2={`$${newPrice.toString()}`} />
);
