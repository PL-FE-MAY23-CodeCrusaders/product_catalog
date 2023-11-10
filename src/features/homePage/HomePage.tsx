import './HomePage.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BannerSlider } from './components/BannerSlider/BannerSlider';
import { Slider } from '../../commonComponents/Slider/Slider';
import { getDiscountPhones, getNewPhones, getPhones } from '../../api';
import { Phone } from '../../types/Phone';
// import { Loader } from '../../commonComponents/LoadingState/Loader';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [phonesData, setPhonesData] = useState<Phone[]>([]);
  const [newPhonesData, setNewPhonesData] = useState<Phone[]>([]);
  const [hotPhonesData, setHotPhonesData] = useState<Phone[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const phones = await getPhones();
        const newPhones = await getNewPhones();
        const hotPhones = await getDiscountPhones();

        setPhonesData(phones);
        setNewPhonesData(newPhones);
        setHotPhonesData(hotPhones);
        setIsLoading(false);
      } catch (e) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <main className="Home_main">
        <section className="Home_sectionWelcome">
          <h1 className="Home_sectionWelcome-title title">
            Welcome to Nice Gadgets store!
          </h1>
          {/* <Loader /> */}
        </section>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="Home_main">
        <section className="Home_sectionWelcome">
          <h1 className="Home_sectionWelcome-title title">
            Welcome to Nice Gadgets store!
          </h1>
          <h2 className="Home__categories-title">
            Something bad happened...
          </h2>
        </section>
      </main>
    );
  }

  return (
    <main className="Home_main">
      <section className="Home_sectionWelcome">
        <h1 className="Home_sectionWelcome-title title">
          Welcome to Nice Gadgets store!
        </h1>
        <BannerSlider />
      </section>

      <section className="slidecontainer2">
        <Slider title="Brand new models" itemList={newPhonesData} />
      </section>
      <section className="Home__categories">
        <h2 className="Home__categories-title">Shop by category</h2>

        <div className="Home__categories_container">
          <div className="Home__categories__mobilePhones">
            <Link to="/phones">
              <div className="categories__mobilePhones-picture" />
            </Link>

            <h3 className="categories__mobilePhones-title">
              Mobile phones
            </h3>
            <p className="categories__mobilePhones-modelsCount">
              {`${phonesData.length} models`}
            </p>
          </div>

          <div className="Home__categories__tablets">
            <Link to="/tablets">
              <div className="categories__tablets-picture" />
            </Link>

            <h3 className="categories__tablets-title">Tablets</h3>
            <p className="categories__tablets-modelsCount">55 models</p>
          </div>

          <div className="Home__categories__accessories">
            <Link to="/accessories">
              <div className="categories__accessories-picture" />
            </Link>

            <h3 className="categories__accessories-title">Accessories</h3>
            <p className="categories__accessories-modelsCount">
              99 models
            </p>
          </div>
        </div>
      </section>

      <section className="slidcontainer">
        <Slider title="Hot prices" itemList={hotPhonesData} />
      </section>
    </main>
  );
};
