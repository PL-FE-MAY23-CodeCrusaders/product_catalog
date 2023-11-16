/* eslint-disable */
import { useState } from 'react';
import './CarouselSlider.scss';

// import img1Desktop from './images/img1Desktop.png';



export const Carousel = () => {
    const [slideIndex, setSlideIndex] = useState(1)

    const imagePath = 'images/img1Desktop.png';

  const isMobile = window.innerWidth < 640;

  const slidesDesktop = [
    {url: './images/img1-desktop.png'},
    {url: './images/img4.webp'},
    {url: './images/img3-desktop.jpg'},
  ]

  const goPreviousSlide = () => {
    const isFirstSlide = slideIndex === 0;
    const newIndex = isFirstSlide ? slidesDesktop.length - 1 : slideIndex - 1
    setSlideIndex(newIndex)
  }

  const divStyle = {
    backgroundImage: `url(${require(`${slidesDesktop[slideIndex].url}`)})`,
    backgroundSize: 'cover', // dostosuj do własnych preferencji
    backgroundRepeat: 'no-repeat', // dostosuj do własnych preferencji
    /* inne style tła */
  };

  return (
    <div className='Carousel__container'>
      <div className='Carousel__slider'>
        
        <button
          className="Carousel__slider-leftButton"
          
          aria-label="button"
          type="button"
        />

          
        <div 
          className='Carousel__slider-image'
          
          >
            <img className='asd' src={require(`${slidesDesktop[slideIndex].url}`)} />
          </div>

        <button
          className="Carousel__slider-rightButton"
          type="button"
          aria-label="button"
          onClick={goPreviousSlide}
        />


        </div>

        


        <div className='Carousel__container-controls'>
          
          <div className='Carousel__container-control'>
            <div className='Carousel__container-controlImg'></div>
          </div>

          <div className='Carousel__container-control'>
            <div className='Carousel__container-controlImg'></div>
          </div>

          <div className='Carousel__container-control'>
            <div className='Carousel__container-controlImg'></div>
          </div>
          
          
      </div>
        
    </div>
  );
};
