import { useEffect, useRef, useState } from 'react';
import './Slider.scss';

interface Props {
  title: string,
}

export const Slider = ({ title }: Props) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [scrollWidth, setScrollWidth] = useState<number>(0);
  const sliderContainer = useRef<HTMLDivElement | null>(null);
  const scrollSpeed = 3;

  const trackScroll = (): void => {
    if (sliderContainer.current) {
      const position = sliderContainer.current.scrollLeft;

      setScrollPosition(position);
    }
  };

  const calculateScrollWidth = (): void => {
    if (sliderContainer.current) {
      const scrollWidthDifference = sliderContainer.current.scrollWidth
      - sliderContainer.current.offsetWidth;

      setScrollWidth(scrollWidthDifference);
    }
  };

  useEffect(() => {
    calculateScrollWidth();
    if (sliderContainer.current) {
      sliderContainer.current
        .addEventListener('scroll', trackScroll, { passive: true });
      window.addEventListener('resize', calculateScrollWidth);
    }
  }, []);

  const [scrollInterval, setScrollInterval]
  = useState<NodeJS.Timeout | number>(0);

  const handleScroll = (direction: number) => {
    const section = sliderContainer.current;

    if (section) {
      section.scrollLeft += direction * scrollSpeed;
    }
  };

  const startScrolling = (direction: number) => {
    const section = sliderContainer.current;

    if (section) {
      if (!scrollInterval) {
        const intervalId = setInterval(() => {
          handleScroll(direction);
        }, 1000 / 500);

        setScrollInterval(intervalId);
      }
    }
  };

  const stopScrolling = () => {
    if (scrollInterval) {
      clearInterval(scrollInterval);
      setScrollInterval(0);
    }
  };

  return (
    <section className="Slider">

      <div className="Slider__bar">
        <h2 className="Slider-title">{title}</h2>
        <div className="Slider__buttons">

          <button
            type="button"
            className={`Slider__buttons-L ${scrollPosition === 0 ? 'disabled' : ''}`}
            onMouseDown={() => startScrolling(-1)}
            onMouseUp={stopScrolling}
            onMouseLeave={stopScrolling}
          >
            <div className={`Slider__buttonLeftIcon ${scrollPosition === 0 ? 'Slider__buttonLeftIcon-disabled' : ''}`} />
          </button>

          <button
            type="button"
            className={`Slider__buttons-R ${scrollPosition + 1 >= scrollWidth ? 'disabled' : ''}`}
            onMouseDown={() => startScrolling(1)}
            onMouseUp={stopScrolling}
            onMouseLeave={stopScrolling}
          >
            <div className={`Slider__buttonRightIcon ${scrollPosition + 1 >= scrollWidth ? 'Slider__buttonRightIcon-disabled' : ''}`} />
          </button>

        </div>
      </div>

      <div
        className="Slider__gridContainer"
        ref={sliderContainer}
        id="12"
      >
        <div className="SliderItem" />
        <div className="SliderItem" />
        <div className="SliderItem" />
        <div className="SliderItem" />
        <div className="SliderItem" />
        <div className="SliderItem" />

      </div>

    </section>
  );
};
