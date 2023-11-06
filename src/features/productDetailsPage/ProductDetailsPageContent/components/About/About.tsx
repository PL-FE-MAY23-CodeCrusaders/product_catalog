import { useProductDetailsPageContext } from '../../../context/ProductDetailsPageContext';
import { HeaderH3 } from '../HeaderH3';
import { HeaderH4 } from '../HeaderH4';
import { Paragraph } from '../Paragraph';
import './About.scss';

export const About = () => {
  const { phoneData } = useProductDetailsPageContext();

  return (
    <section>
      <HeaderH3 header3="About" />
      <div className="about__line " />
      <div>
        <HeaderH4 header4={phoneData?.description[0].title || ''} />
        <Paragraph text={phoneData?.description[0].text || ['']} />
      </div>
      <div>
        <HeaderH4 header4={phoneData?.description[1].title || ''} />
        <Paragraph text={phoneData?.description[1].text || ['']} />
      </div>
      <div>
        <HeaderH4 header4={phoneData?.description[2].title || ''} />
        <Paragraph text={phoneData?.description[2].text || ['']} />
      </div>
    </section>
  );
};
