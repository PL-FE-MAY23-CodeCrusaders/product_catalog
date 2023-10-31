/* eslint-disable react/no-array-index-key */
type Props = {
  text: string[];
};

export const Paragraph = ({ text }: Props): JSX.Element => (
  <div>
    {text.map((p, index) => (
      <p key={index}>{p}</p>
    ))}
  </div>
);
