import './HeaderH2.scss';

type Props = {
  header2: string;
};

export const HeaderH2 = ({ header2 }: Props) => (
  <h2 className="headerH2">{header2}</h2>
);
