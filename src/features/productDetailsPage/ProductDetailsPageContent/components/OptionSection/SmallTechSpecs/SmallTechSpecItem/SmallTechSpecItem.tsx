import './SmallTechSpecItem.scss';

type Props = {
  name: string;
  value: string;
};

export const SmallTechSpecItem = ({ name, value }: Props) => {
  return (
    <div className="smallTechSpec">
      <p className="smallTechSpec__name">{name}</p>
      <p className="smallTechSpec__value">{value}</p>
    </div>
  );
};
