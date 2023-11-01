import {
  useProductDetailsPageContext,
} from '../../../context/ProductDetailsPageContext';
import { TechSpecItem } from './TechSpecItem';

export const TechSepc = () => {
  const { phoneData } = useProductDetailsPageContext();

  return (
    <div>
      <TechSpecItem name="Screen" value={phoneData?.screen || ''} />
      <TechSpecItem name="Resolution" value={phoneData?.resolution || ''} />
      <TechSpecItem name="Processor" value={phoneData?.processor || ''} />
      <TechSpecItem name="RAM" value={phoneData?.ram || ''} />
      <TechSpecItem name="Camera" value={phoneData?.camera || ''} />
      <TechSpecItem name="Zoom" value={phoneData?.zoom || ''} />
      <TechSpecItem name="Cell" value={phoneData?.cell.join(', ') || ''} />

    </div>
  );
};
