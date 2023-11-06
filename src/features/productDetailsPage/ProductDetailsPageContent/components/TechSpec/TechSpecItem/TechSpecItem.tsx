import './TechSepecItem.scss';

type Props = {
  name: string;
  value: string;
};

export const TechSpecItem = ({ name, value }: Props) => (
  <div className="techSpecItem">
    <p className="techSpecItem__name">{name}</p>
    <p className="techSpecItem__value">{value}</p>
  </div>
);
