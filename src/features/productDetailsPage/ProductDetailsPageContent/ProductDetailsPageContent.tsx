import { useProductDetailsContext } from '../context/ProductDetailsContext';
import './ProductDetaisPageContent.scss';
import { HeaderH2 } from './components/HeaderH2';
import { PhotoPreview } from './components/PhotoPreview';
import { TechSpec } from './components/TechSpec';
import { About } from './components/About';
import { OptionSection } from './components/OptionSection';
import { BackArrow } from '../../../commonComponents/BackArrow';
import { Breadcrumbs } from '../../../commonComponents/Breadcrumbs/Breadcrumbs';
import PageNotFound from '../../pageNotFound/PageNotFound';
import { Slider } from '../../../commonComponents/Slider/Slider';
import { LoadingState } from '../../../commonComponents/LoadingState/LoadingState';

export const ProductDetailsPageContent = () => {
  const { isLoading, phoneData, sliderData } = useProductDetailsContext();

  if (isLoading) {
    return <LoadingState />;
  }

  if (phoneData) {
    return (
      <main className="main">
        <Breadcrumbs />
        <BackArrow />
        <HeaderH2 header2={phoneData.name || ''} />
        <div className="main__option-container">
          <PhotoPreview />
          <OptionSection />
        </div>
        <div className="main__text-container">
          <About />
          <TechSpec />
        </div>
        <Slider title="You may also like" itemList={sliderData} />
      </main>
    );
  }

  return <PageNotFound />;
};
