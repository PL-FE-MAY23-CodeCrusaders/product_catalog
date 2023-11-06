import { useNavigate } from 'react-router-dom';
import {
  ReactComponent as RightArrow,
} from '../../../../../images/phonepage__arrow-left.svg';
import './BackArrow.scss';

export const BackArrow = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button
        type="button"
        aria-label="Go back"
        className="back-button"
        onClick={goBack}
      >
        <RightArrow />
        <p className="back-button__text">Back</p>

      </button>
    </div>

  );
};
