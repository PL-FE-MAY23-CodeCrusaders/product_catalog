/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import './CarouselSlider.scss';
import cn from 'classnames';

const slidesDesktop = [
  { url: './images/img1-desktop.png', alt: 'iPhone 14 Pro - desktop' },
  { url: './images/img2-desktop.webp', alt: 'LG Q6 - desktop' },
  { url: './images/img3-desktop.avif', alt: 'LG Q7+ - desktop' },
];

const slidesMobile = [
  { url: './images/img1-mobile.png', alt: 'iPhone 14 Pro - mobile' },
  { url: './images/img2-mobile.avif', alt: 'LG Q6 - mobile' },
  { url: './images/img3-mobile.avif', alt: 'LG Q7+ - mobile' },
];

export const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [onMobile, setOnMobile] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const slides = onMobile
    ? slidesMobile
    : slidesDesktop;

  const changeWidthHandler = (): void => {
    if (window.innerWidth < 640) {
      setOnMobile(true);

      return;
    }

    setOnMobile(false);
  };

  const goPreviousSlide = (): void => {
    const isFirstSlide = slideIndex === 0;
    const newIndex = isFirstSlide ? slidesDesktop.length - 1 : slideIndex - 1;

    setSlideIndex(newIndex);
  };

  const goNextSlide = useCallback(() => {
    const isLastSlide = slideIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : slideIndex + 1;

    setSlideIndex(newIndex);
  }, [slideIndex, slides]);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      goNextSlide();
    }, 4000);

    window.addEventListener('resize', changeWidthHandler);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      window.removeEventListener('resize', changeWidthHandler);
    };
  }, [goNextSlide]);

  const setSlide = (indexOfSlide: number) => {
    setSlideIndex(indexOfSlide);
  };

  return (
    <div className="Carousel">
      <div className="Carousel__slider">
        <button
          className="Carousel__slider-leftButton"
          onClick={goPreviousSlide}
          aria-label="button"
          type="button"
        />

        <div className="Carousel__slider-imageContainer">
          {slides.map((slide, index) => (
            <img
              alt={slide.url}
              key={slide.url}
              className={cn('Carousel__slider-image', {
                'Carousel__slider-image-active': slideIndex === index,
              })}
              // eslint-disable-next-line import/no-dynamic-require, global-require
              src={require(`${slides[index].url}`)}
            />
          ))}
        </div>

        <button
          className="Carousel__slider-rightButton"
          type="button"
          aria-label="button"
          onClick={goNextSlide}
        />
      </div>

      <div className="Carousel__controls">
        <div
          className="Carousel-control"
          onClick={() => setSlide(0)}
        >
          <div className={cn('Carousel-controlImg', {
            'Carousel-controlImg-active': slideIndex === 0,
          })}
          />
        </div>

        <div
          className="Carousel-control"
          onClick={() => setSlide(1)}
        >
          <div className={cn('Carousel-controlImg', {
            'Carousel-controlImg-active': slideIndex === 1,
          })}
          />
        </div>

        <div
          className="Carousel-control"
          onClick={() => setSlide(2)}
        >
          <div className={cn('Carousel-controlImg', {
            'Carousel-controlImg-active': slideIndex === 2,
          })}
          />
        </div>
      </div>
    </div>
  );
};
