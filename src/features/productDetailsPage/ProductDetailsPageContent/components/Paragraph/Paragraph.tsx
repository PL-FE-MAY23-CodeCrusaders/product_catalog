/* eslint-disable react/no-array-index-key */
import './Paragraph.scss';

type Props = {
  text: string[];
};

export const Paragraph = ({ text }: Props): JSX.Element => (
  <div>
    {text.map((p, index) => (
      <p className="paragraph" key={index}>{p}</p>
    ))}
  </div>
);
