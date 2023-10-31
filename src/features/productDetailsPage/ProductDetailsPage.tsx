import { PhotoPreview } from './PhotoPreview';
import './ProductDetaisPage.scss';
import { HeaderH2 } from './components/HeaderH2';
import { HeaderH3 } from './components/HeaderH3';
import { HeaderH4 } from './components/HeaderH4';

export const ProductDetailsPage: React.FC = () => (
  <main className="main">
    <HeaderH2 header2="Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)" />
    <section>
      <PhotoPreview />
    </section>
    <section>opcje</section>
    <section>
      <HeaderH3 header3="About" />
      <div>
        <HeaderH4 header4="And then there was Pro" />
        <p>
          And then there was Pro A transformative triple‑camera system that adds
          tons of capability without complexity.
        </p>
        <p>
          An unprecedented leap in battery life. And a mind‑blowing chip that
          doubles down on machine learning and pushes the boundaries of what a
          smartphone can do. Welcome to the first iPhone powerful enough to be
          called Pro.
        </p>
      </div>
    </section>
    <section>
      <HeaderH3 header3="Tech specs" />
      <div>
        <HeaderH4 header4="And then there was Pro" />
        <p>
          And then there was Pro A transformative triple‑camera system that adds
          tons of capability without complexity.
        </p>
        <p>
          An unprecedented leap in battery life. And a mind‑blowing chip that
          doubles down on machine learning and pushes the boundaries of what a
          smartphone can do. Welcome to the first iPhone powerful enough to be
          called Pro.
        </p>
      </div>
    </section>
    <section>
      <HeaderH2 header2="You may also like" />
    </section>
  </main>
);
