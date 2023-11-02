import { SmallTechSepc } from './SmallTechSpecs';
import { AvailableColors } from './AvailableColors';
import './OptionSection.scss';
import { SelectCapacity } from './SelectCapacity';

export const OptionSection = () => (
  <section className="option__section">
    <AvailableColors />
    <div className="option__line" />
    <SelectCapacity />
    <div className="option__line" />
    <p>price</p>
    <p>button add</p>
    <SmallTechSepc />
  </section>
);
