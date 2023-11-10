// eslint-disable-next-line import/no-extraneous-dependencies
import Carousel from 'react-multi-carousel';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-multi-carousel/lib/styles.css';
import Banner from './images/Banner.png';
import './BannerSlider.scss';

export const BannerSlider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1440 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1200 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1199, min: 640 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 639, min: 0 },
      items: 1,
    },
  };

  const ButtonGroup = ({
    next,
    previous,
    goToSlide,
    ...rest // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }: any) => {
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      carouselState: { currentSlide },
    } = rest;

    return (
      <div className="banner_carousel-button-group">
        <button
          className="banner_carousel-button-group-left"
          onClick={() => previous()}
          aria-label="button"
          type="button"
        />
        <button
          className="banner_carousel-button-group-right"
          onClick={() => next()}
          type="button"
          aria-label="button"
        />
      </div>
    );
  };

  return (
    <div className="banner">
      <div className="banner_newModelsSlider">
        <Carousel
          showDots
          renderDotsOutside
          renderButtonGroupOutside
          customButtonGroup={<ButtonGroup />}
          arrows={false}
          swipeable
          draggable
          responsive={responsive}
          ssr
          infinite
          autoPlaySpeed={1000}
          keyBoardControl
          transitionDuration={500}
          containerClass="banner_carousel-container"
          dotListClass="banner_custom-dot-list-style"
          itemClass="banner_carousel-item"
        >
          <img
            // eslint-disable-next-line import/no-dynamic-require, global-require
            src={Banner}
            alt="Banner is loading..."
            className="banner_image"
          />
          <img
            // eslint-disable-next-line import/no-dynamic-require, global-require
            src={Banner}
            alt="Banner is loading..."
            className="banner_image"
          />
          <img
            // eslint-disable-next-line import/no-dynamic-require, global-require
            src={Banner}
            alt="Banner is loading..."
            className="banner_image"
          />
        </Carousel>
      </div>
    </div>
  );
};
