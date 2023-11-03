import React, { useEffect, useRef, useState } from 'react';
import './HomePage.scss';

export const Home = () => {
  const sectionHotPrice = useRef<HTMLDivElement | null>(null);
  const sectionNewModels = useRef<HTMLDivElement | null>(null);

  const x = 4;

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
    <main className="Home_main">
      <section className="Home_sectionWelcome" />
      <section className="Home_sectionNewModels">

        <div className="Home__sectionNewModels-bar">
          <h2 className="Home__sectionNewModels-title">Brand new models</h2>
          <div className="Home__sectionNewModels__buttons">

            <button
              type="button"
              className="Home__sectionNewModels__buttons-L"
              onMouseDown={() => startScrolling(sectionNewModels, -1)}
              onMouseUp={stopScrolling}
              onMouseLeave={stopScrolling}
            >
              <div className="sectionNewModels__buttonLeftIcon" />
            </button>

            <button
              type="button"
              className="Home__sectionNewModels__buttons-R"
              onMouseDown={() => startScrolling(sectionNewModels, 1)}
              onMouseUp={stopScrolling}
              onMouseLeave={stopScrolling}
            >
              <div className="sectionNewModels__buttonRightIcon" />
            </button>

          </div>
        </div>

        <div className="sectionHotprice__gridContainer" ref={sectionNewModels}>
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
        </div>

      </section>
      <section className="Home_sectionCategories">
        <h2 className="Home__categories-title">Shop by category</h2>

        <div className="Home__categories_container">

          <div className="Home__categories__mobilePhones">
            <div className="categories__mobilePhones-picture" />

            <h3 className="categories__mobilePhones-title">Mobile phones</h3>
            <p className="categories__mobilePhones-modelsCount">99 models</p>
          </div>

          <div className="Home__categories__tablets">
            <div className="categories__tablets-picture" />

            <h3 className="categories__tablets-title">Tablets</h3>
            <p className="categories__tablets-modelsCount">99 models</p>
          </div>

          <div className="Home__categories__accessories">
            <div className="categories__accessories-picture" />

            <h3 className="categories__accessories-title">Accessories</h3>
            <p className="categories__accessories-modelsCount">99 models</p>
          </div>

        </div>
      </section>

      <section className="Home_sectionHotPrice">

        <div className="Home__sectionHotPrice-bar">
          <h2 className="Home__sectionHotPrice-title">Hot Price</h2>
          <div className="Home__sectionHotPrice__buttons">

            <button
              type="button"
              className="Home__sectionHotPrice__buttons-L"
              onMouseDown={() => startScrolling(sectionHotPrice, -1)}
              onMouseUp={stopScrolling}
              onMouseLeave={stopScrolling}
            >
              <div className="sectionHotPrice__buttonLeftIcon" />
            </button>

            <button
              type="button"
              className="Home__sectionHotPrice__buttons-R"
              onMouseDown={() => startScrolling(sectionHotPrice, 1)}
              onMouseUp={stopScrolling}
              onMouseLeave={stopScrolling}
            >
              <div className="sectionHotPrice__buttonRightIcon" />
            </button>

          </div>
        </div>

        <div
          className="sectionHotprice__gridContainer"
          ref={sectionHotPrice}
          id="12"
        >
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
          <div className="hotPricesItem" />
        </div>

      </section>
    </main>
  );
};
