import {
  useProductDetailsPageContext,
} from '../../../context/ProductDetailsPageContext';
import { SmallTechSpecItem } from './SmallTechSpecItem';

export const SmallTechSepc = () => {
  const { phoneData } = useProductDetailsPageContext();

  return (
    <div>
      <SmallTechSpecItem name="Screen" value={phoneData?.screen || ''} />
      <SmallTechSpecItem
        name="Resolution"
        value={phoneData?.resolution || ''}
      />
      <SmallTechSpecItem name="Processor" value={phoneData?.processor || ''} />
      <SmallTechSpecItem name="RAM" value={phoneData?.ram || ''} />
    </div>
  );
};
