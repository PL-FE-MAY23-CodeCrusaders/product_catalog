import './HomePage.scss';
import { NavLink } from 'react-router-dom';
import { Slider } from './components/Slider/Slider';
import { BannerSlider } from './components/BannerSlider/BannerSlider';

export const Home = () => {
  return (
    <main className="Home_main">
      <section className="Home_sectionWelcome">
        <h1 className="Home_sectionWelcome-title title">
          Welcome to Nice Gadgets store!
        </h1>
        <BannerSlider />
      </section>

      <section className="slidecontainer2">

        <Slider title="Brand new models" />

      </section>
      <section className="Home__categories">
        <h2 className="Home__categories-title">Shop by category</h2>

        <div className="Home__categories_container">

          <div className="Home__categories__mobilePhones">
            <NavLink to="/phones">
              <div className="categories__mobilePhones-picture" />
            </NavLink>

            <h3 className="categories__mobilePhones-title">Mobile phones</h3>
            <p className="categories__mobilePhones-modelsCount">99 models</p>
          </div>

          <div className="Home__categories__tablets">
            <NavLink to="/tablets">
              <div className="categories__tablets-picture" />
            </NavLink>

            <h3 className="categories__tablets-title">Tablets</h3>
            <p className="categories__tablets-modelsCount">99 models</p>
          </div>

          <div className="Home__categories__accessories">
            <NavLink to="/accessories">
              <div className="categories__accessories-picture" />
            </NavLink>

            <h3 className="categories__accessories-title">Accessories</h3>
            <p className="categories__accessories-modelsCount">99 models</p>
          </div>

        </div>
      </section>

      <section className="slidcontainer">
        <Slider title="Hot prices" />

      </section>
    </main>
  );
};
