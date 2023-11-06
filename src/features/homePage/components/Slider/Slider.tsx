import { useEffect, useRef, useState } from 'react';
import './Slider.scss';

type Props = {
  titl: string,
};

export const Slider: React.FC<Props> = ({ titl }) => {
  const sectionHotPrice = useRef<HTMLDivElement | null>(null);
  const sectionNewModels = useRef<HTMLDivElement | null>(null);

  const x = 4;

  // eslint-disable-next-line no-console
  console.log(titl);

  useEffect(() => {
    if (sectionHotPrice.current) {
      const scrollOffsetHotPrice = sectionHotPrice.current.scrollLeft;

      // eslint-disable-next-line no-console
      console.log('Scroll offset Hot Price:', scrollOffsetHotPrice);
    }

    if (sectionNewModels.current) {
      const scrollOffsetNewModels = sectionNewModels.current.scrollLeft;
      const maxwidth = sectionHotPrice.current?.offsetWidth;

      // eslint-disable-next-line no-console
      console.log('Scroll offset New Models:', scrollOffsetNewModels);
      // eslint-disable-next-line no-console
      console.log(scrollOffsetNewModels === 0);
      // eslint-disable-next-line no-console
      console.log(scrollOffsetNewModels === 0);
      // eslint-disable-next-line no-console
      // console.log(sectionHotPrice.current.getBoundingClientRect());
      // eslint-disable-next-line no-console
      console.log(scrollOffsetNewModels
        === maxwidth);
    }
  }, [sectionHotPrice, sectionNewModels, x]);

  const [scrollInterval, setScrollInterval]
  = useState<NodeJS.Timeout | number>(0);

  const scrollSpeed = 3;

  const handleScroll = (sectionRef: React.RefObject<HTMLDivElement | null>,
    direction: number) => {
    const section = sectionRef.current;

    if (section) {
      section.scrollLeft += direction * scrollSpeed;
    }
  };

  const startScrolling = (sectionRef: React.RefObject<HTMLDivElement | null>,
    direction: number) => {
    const section = sectionRef.current;

    if (section) {
      if (!scrollInterval) {
        const intervalId = setInterval(() => {
          handleScroll(sectionRef, direction);
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
        <h2 className="Slider-title">{titl}</h2>
        <div className="Slider__buttons">

          <button
            type="button"
            className="Slider__buttons-L"
            onMouseDown={() => startScrolling(sectionHotPrice, -1)}
            onMouseUp={stopScrolling}
            onMouseLeave={stopScrolling}
          >
            <div className="Slider__buttonLeftIcon" />
          </button>

          <button
            type="button"
            className="Slider__buttons-R"
            onMouseDown={() => startScrolling(sectionHotPrice, 1)}
            onMouseUp={stopScrolling}
            onMouseLeave={stopScrolling}
          >
            <div className="Slider__buttonRightIcon" />
          </button>

        </div>
      </div>

      <div
        className="Slider__gridContainer"
        ref={sectionHotPrice}
        id="12"
      >
        <div className="SliderItem" />
        <div className="SliderItem" />
        <div className="SliderItem" />
        <div className="SliderItem" />
        <div className="SliderItem" />
        <div className="SliderItem" />
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
