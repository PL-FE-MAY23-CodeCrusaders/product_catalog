import './ProductDetaisPageContent.scss';

import {
  useProductDetailsPageContext,
} from '../context/ProductDetailsPageContext';
import { HeaderH2 } from './components/HeaderH2';
import { PhotoPreview } from './components/PhotoPreview';
import { HeaderH3 } from './components/HeaderH3';
import { HeaderH4 } from './components/HeaderH4';
import { Paragraph } from './components/Paragraph';
import { TechSepc } from './components/TechSpec';
import { Loader } from './Loader';
import { AvailableColors } from './components/AvailableColors';
import { SelectCapacity } from './components/SelectCapacity';
import { SmallTechSepc } from './components/SmallTechSpecs';

export const ProductDetailsPageConetnt = () => {
  const { isLoading, error, phoneData } = useProductDetailsPageContext();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <HeaderH2 header2="Something bad happened" />;
  }

  if (phoneData) {
    return (
      <main className="main">
        <HeaderH2 header2={phoneData.name} />
        <section>
          <PhotoPreview />
        </section>
        <section className="main__section-option">
          <AvailableColors />
          <div className="main__line main__line--small" />
          <SelectCapacity />
          <div className="main__line main__line--small" />
          <p>price</p>
          <p>button add</p>
          <SmallTechSepc />
        </section>
        <section>
          <HeaderH3 header3="About" />
          <div className="main__line " />
          <div>
            <HeaderH4 header4={phoneData.description[0].title} />
            <Paragraph text={phoneData.description[0].text} />
          </div>
          <div>
            <HeaderH4 header4={phoneData.description[1].title} />
            <Paragraph text={phoneData.description[1].text} />
          </div>
          <div>
            <HeaderH4 header4={phoneData.description[2].title} />
            <Paragraph text={phoneData.description[2].text} />
          </div>
        </section>
        <section>
          <HeaderH3 header3="Tech specs" />
          <div className="main__line" />
          <div>
            <TechSepc />
          </div>
        </section>
        <section>
          <HeaderH2 header2="You may also like" />
        </section>
      </main>
    );
  }

  return <HeaderH2 header2="Something bad happened" />;
};
