import React, { useState } from 'react';
import { TeamCards } from '../TeamCards/TeamCards';
import './TeamCarousel.scss';

export const TeamCarousel: React.FC = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 5);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 5) % 5);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-controls">
        <button
          type="button"
          onClick={handlePrevSlide}
        >
          ←
        </button>
        <button
          type="button"
          onClick={handleNextSlide}
        >
          →
        </button>
      </div>
      <div className="carousel-wrapper">
        <TeamCards />
      </div>
    </div>
  );
};
