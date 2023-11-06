import './PhotoPreview.scss';
import { BigPhoto } from './BigPhoto/BigPhoto';
import { Gallery } from './Gallery';

export const PhotoPreview = () => (
  <section className="photosPreview">
    <Gallery />
    <BigPhoto />
  </section>
);
