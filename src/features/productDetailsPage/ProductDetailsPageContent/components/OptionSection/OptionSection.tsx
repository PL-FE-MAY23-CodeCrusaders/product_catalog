import { SmallTechSepc } from './SmallTechSpecs';
import { AvailableColors } from './AvailableColors';
import './OptionSection.scss';
import { SelectCapacity } from './SelectCapacity';
import { Price } from './Price/Price';

export const OptionSection = () => (
  <section className="option__section">
    <AvailableColors />
    <div className="option__line" />
    <SelectCapacity />
    <div className="option__line" />
    <Price />
    <p>button add</p>
    <SmallTechSepc />
  </section>
);
