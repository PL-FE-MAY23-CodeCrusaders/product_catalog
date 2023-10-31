import './HeaderH3.scss';

type Props = {
  header3: string;
};

export const HeaderH3 = ({ header3 }: Props) => (
  <h3 className="headerH3">{header3}</h3>
);
