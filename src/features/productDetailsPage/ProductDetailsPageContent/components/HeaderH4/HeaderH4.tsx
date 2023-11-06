import './HeaderH4.scss';

type Props = {
  header4: string;
};

export const HeaderH4 = ({ header4 }: Props) => (
  <h4 className="headerH4">{header4}</h4>
);
