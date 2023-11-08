import { useProductDetailsContext } from '../context/ProductDetailsContext';
import './ProductDetaisPageContent.scss';
import { HeaderH2 } from './components/HeaderH2';
import { PhotoPreview } from './components/PhotoPreview';
import { TechSpec } from './components/TechSpec';
import { Loader } from './components/Loader';
import { About } from './components/About';
import { OptionSection } from './components/OptionSection';
import { BackArrow } from './components/BackArrow';
import { Breadcrumbs } from '../../../commonComponents/Breadcrumbs/Breadcrumbs';

export const ProductDetailsPageContent = () => {
  const { isLoading, phoneData } = useProductDetailsContext();

  if (isLoading) {
    return (
      <main className="main">
        <Loader />
      </main>
    );
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
      </main>
    );
  }

  return <HeaderH2 header2="Something bad happened" />;
};
