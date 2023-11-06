import { useProductDetailsContext } from '../../../context/ProductDetailsContext';
import { HeaderH3 } from '../HeaderH3';
import { TechSpecItem } from './TechSpecItem';

export const TechSpec = () => {
  const { phoneData } = useProductDetailsContext();

  return (
    <section>
      <HeaderH3 header3="Tech specs" />
      <div className="main__line" />
      <div>
        <TechSpecItem name="Screen" value={phoneData?.screen || ''} />
        <TechSpecItem
          name="Resolution"
          value={phoneData?.resolution || ''}
        />
        <TechSpecItem
          name="Processor"
          value={phoneData?.processor || ''}
        />
        <TechSpecItem name="RAM" value={phoneData?.ram || ''} />
        <TechSpecItem name="Camera" value={phoneData?.camera || ''} />
        <TechSpecItem name="Zoom" value={phoneData?.zoom || ''} />
        <TechSpecItem
          name="Cell"
          value={phoneData?.cell.join(', ') || ''}
        />
      </div>
    </section>
  );
};
