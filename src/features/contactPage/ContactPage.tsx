/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/no-array-index-key */
import './ContactPage.scss';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { TeamCarousel } from './components/TeamCarousel/TeamCarousel';

export const ContactPage = () => {
  return (
    <div className="ContactPage">
      {/* HEADER */}
      <header className="ContactPage__header">
        <h1 className="title ContactPage__title">
          Meet the
          {' '}
          <span className="accent-text">CodeCrusaders</span>
        </h1>
      </header>
      <article className="ContactPage__article">
        <p className="text ContactPage__text">
          We come from different cities, different backgrounds, but we have one
          {' '}
          <span className="accent-text">passion</span>
          in common - creating
          {' '}
          <span className="accent-text">
            modern full-stack web applications
          </span>
          {' '}
          to
          {' '}
          <span className="accent-text">
            world standards
          </span>
          .
        </p>
        <p className="text ContactPage__text">
          We are characterized by
          {' '}
         <span className="accent-text">
          passion, enthusiasm, artistic flair
         </span>  and love for
         <span className="accent-text">
          modern technologies.
         </span> 
        </p>  
        <p className="text ContactPage__text">
          For us, code is both a means of expression and the fulfillment of our <span className='accent-text'>engineering nature.</span> 
        </p>
        <p className="text ContactPage__text">
          {' '}
         <span className="accent-text">
          Get to know us closer!
         </span>
        </p>
        </article>
        {/* SLIDER */}
        <div className="ContactPage__slider">
            <TeamCarousel />
        </div>
        {/* BUTTONS */}
        <div className="ContactPage__button-group">
          <Link
           to="/"
           className="goBack"
          >
            <BsArrowLeft className="arrow-left"/>
            {' '}
            back to shopping
          </Link>
          <Link
           to="/"
          >
            <button className="buyCoffee">Buy Us a Coffee</button>
          </Link>
        </div>
    </div>
  )
}

