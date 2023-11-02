import './ProductDetaisPageContent.scss';

import {
  useProductDetailsPageContext,
} from '../context/ProductDetailsPageContext';
import { HeaderH2 } from './components/HeaderH2';
import { PhotoPreview } from './components/PhotoPreview';
import { TechSpec } from './components/TechSpec';
import { Loader } from './components/Loader';
import { About } from './components/About';
import { OptionSection } from './components/OptionSection';

export const ProductDetailsPageContent = () => {
  const { isLoading, error, phoneData } = useProductDetailsPageContext();

  if (isLoading) {
    return (
      <main className="main">
        <Loader />
      </main>
    );
  }

  if (error) {
    return <HeaderH2 header2="Something bad happened" />;
  }

  return (
    <main className="main">
      <HeaderH2 header2={phoneData?.name || ''} />
      <PhotoPreview />
      <OptionSection />
      <About />
      <TechSpec />
      <section>
        <HeaderH2 header2="You may also like" />
      </section>
    </main>
  );
};
