import './TechSepecItem.scss';

type Props = {
  name: string;
  value: string;
};

export const TechSpecItem = ({ name, value }: Props) => (
  <div className="techSpecItem">
    <p className="techSpecItem-name">{name}</p>
    <p className="techSpecItem-value">{value}</p>
  </div>
);
