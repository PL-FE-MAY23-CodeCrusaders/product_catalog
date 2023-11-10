import {
  Loader,
} from './Loader';
import './LoadingState.scss';

export const LoadingState = () => {
  return (
    <div className="loading-state">
      <Loader />
    </div>
  );
};
