import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner from './images/Banner.png';
import './BannerSlider.scss';

export const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <img className="banner-img" src={Banner} alt="banner" />
      </div>
      <div>
        <img className="banner-img" src={Banner} alt="banner" />
      </div>
      <div>
        <img className="banner-img" src={Banner} alt="banner" />
      </div>
    </Slider>
  );
};
