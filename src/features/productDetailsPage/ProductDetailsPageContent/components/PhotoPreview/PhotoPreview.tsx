import './PhotoPreview.scss';
import { BigPhoto } from './BigPhoto/BigPhoto';
import { Gallery } from './Gallery';

export const PhotoPreview = () => (
  <div className="photosPreview">
    <Gallery />
    <BigPhoto />
  </div>
);
