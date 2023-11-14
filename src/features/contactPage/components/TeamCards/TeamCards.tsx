import React from 'react';
import './TeamCards.scss';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FaInstagramSquare } from 'react-icons/fa';
// IMAGES
import nassalska from './images/nassalska.png';
import dzialo from './images/dzialo.png';
import pachucki from './images/pachucki.png';
import slezak from './images/slezak.png';
import slobinski from './images/slobinski.png';



interface TeamCardsProps {
  //propsy
}

export const TeamCards: React.FC<TeamCardsProps> = () => {
  return (
  <>
    {/* HANNA NASSALSKA */}
      <div className='TeamCard'>
        {/* TEAMCARD HEADER */}
        <header className='TeamCard__header'>
          <div className='TeamCard__header-imageBox'>
            <img src={nassalska} alt='Hanna Nassalska' />
          </div>
          <h4 className='title TeamCard__title'>Hanna Nassalska</h4>
        </header>
        {/* TEAMCARD BODY */}
        <div className='TeamCard__body'>
          <div className='TeamCard__details'>
            <p className='text TeamCard__details-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptate culpa sunt tempore aspernatur,
              distinctio at. Veritatis ipsum itaque ut!
            </p>
            <p className='text TeamCard__details-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore.</p>
          </div>
          <div className='TeamCard__socials'>
            <a href='#' className='TeamCard__socials-icon' title='LinkedIn'>
              <BsLinkedin className='icon' />
            </a>
            <a href='#' className='TeamCard__socials-icon' title='GitHub'>
              <FaGithubSquare className='icon' />
            </a>
            <a href='#' className='TeamCard__socials-icon' title='My website'>
              <CgWebsite className='icon' />
            </a>
            <a href='#' className='TeamCard__socials-icon' title='Facebook'>
              <FaSquareFacebook className='icon' />
            </a>
            <a href='#' className='TeamCard__socials-icon' title='Instagram'>
              <FaInstagramSquare className='icon' />
            </a>
          </div>
        </div>
      </div>
    {/* PIOTR DZIALO */}
    <div className='TeamCard'>
        {/* TEAMCARD HEADER */}
        <header className='TeamCard__header'>
          <div className='TeamCard__header-imageBox'>
            <img src={dzialo} alt='Piotr Działo' />
          </div>
          <h4 className='title TeamCard__title'>Piotr Działo</h4>
        </header>
        {/* TEAMCARD BODY */}
        <div className='TeamCard__body'>
          <div className='TeamCard__details'>
            <p className='text TeamCard__details-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptate culpa sunt tempore aspernatur,
              distinctio at. Veritatis ipsum itaque ut!
            </p>
            <p className='text TeamCard__details-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore.</p>
          </div>
          <div className='TeamCard__socials'>
            <a href='#' className='TeamCard__socials-icon' title='LinkedIn'>
              <BsLinkedin className='icon' />
            </a>
            <a href='#' className='TeamCard__socials-icon' title='GitHub'>
              <FaGithubSquare className='icon' />
            </a>
            <a href='#' className='TeamCard__socials-icon' title='My website'>
              <CgWebsite className='icon' />
            </a>
            <a href='#' className='TeamCard__socials-icon' title='Facebook'>
              <FaSquareFacebook className='icon' />
            </a>
            <a href='#' className='TeamCard__socials-icon' title='Instagram'>
              <FaInstagramSquare className='icon' />
            </a>
          </div>
        </div>
      </div>    
    {/* MATEUSZ SLEZAK */}
    <div className='TeamCard'>
        {/* TEAMCARD HEADER */}
        <header className='TeamCard__header'>
          <div className='TeamCard__header-imageBox'>
            <img src={slezak} alt='Mateusz Ślęzak' />
          </div>
          <h4 className='title TeamCard__title'>Mateusz Ślęzak</h4>
        </header>
        {/* TEAMCARD BODY */}
        <div className='TeamCard__body'>
          <div className='TeamCard__details'>
            <p className='text TeamCard__details-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptate culpa sunt tempore aspernatur,
              distinctio at. Veritatis ipsum itaque ut!
            </p>
            <p className='text TeamCard__details-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore.</p>
          </div>
          <div className='TeamCard__socials'>
            <a href='#' className='TeamCard__socials-icon' title='LinkedIn'>
              <BsLinkedin className='icon' />
            </a>
            <a href='#' className='TeamCard__socials-icon' title='GitHub'>
              <FaGithubSquare className='icon' />
            </a>
            <a href='#' className='TeamCard__socials-icon' title='My website'>
              <CgWebsite className='icon' />
            </a>
            <a href='#' className='TeamCard__socials-icon' title='Facebook'>
              <FaSquareFacebook className='icon' />
            </a>
            <a href='#' className='TeamCard__socials-icon' title='Instagram'>
              <FaInstagramSquare className='icon' />
            </a>
          </div>
        </div>
      </div>    
    {/* PIOTR SLOBINSKI */}
    <div className='TeamCard'>
        {/* TEAMCARD HEADER */}
        <header className='TeamCard__header'>
          <div className='TeamCard__header-imageBox'>
            <img src={slobinski} alt='Piotr Słobiński' />
          </div>
          <h4 className='title TeamCard__title'>Piotr Słobiński</h4>
        </header>
        {/* TEAMCARD BODY */}
        <div className='TeamCard__body'>
          <div className='TeamCard__details'>
            <p className='text TeamCard__details-text'>
              He started his programming adventure at a flight training course, where he decided to create a flight planning and management application. 
              He swallowed the bug and went from being an aviation enthusiast to a code enthusiast.
              He combines the qualities of an aesthete and a keen eye for engineering with a commitment to detail.
              Privately, he is a pilot,  a skydiver, also an art enthusiast and a father.
            </p>
          </div>
          <div className='TeamCard__socials'>
            <a href='#' className='TeamCard__socials-icon' title='LinkedIn'>
              <BsLinkedin className='icon' />
            </a>
            <a href='#' className='TeamCard__socials-icon' title='GitHub'>
              <FaGithubSquare className='icon' />
            </a>
            <a href='#' className='TeamCard__socials-icon' title='My website'>
              <CgWebsite className='icon' />
            </a>
            <a href='#' className='TeamCard__socials-icon' title='Facebook'>
              <FaSquareFacebook className='icon' />
            </a>
            <a href='#' className='TeamCard__socials-icon' title='Instagram'>
              <FaInstagramSquare className='icon' />
            </a>
          </div>
        </div>
      </div>    
    {/* SZYMON PACHUCKI */}
    <div className='TeamCard'>
        {/* TEAMCARD HEADER */}
        <header className='TeamCard__header'>
          <div className='TeamCard__header-imageBox'>
            <img src={pachucki} alt='Szymon Pachucki' />
          </div>
          <h4 className='title TeamCard__title'>Szymon Pachucki</h4>
        </header>
        {/* TEAMCARD BODY */}
        <div className='TeamCard__body'>
          <div className='TeamCard__details'>
            <p className='text TeamCard__details-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptate culpa sunt tempore aspernatur,
              distinctio at. Veritatis ipsum itaque ut!
            </p>
            <p className='text TeamCard__details-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore.</p>
          </div>
          <div className='TeamCard__socials'>
            <a href='#' className='TeamCard__socials-icon' title='LinkedIn'>
              <BsLinkedin className='icon' />
            </a>
            <a href='#' className='TeamCard__socials-icon' title='GitHub'>
              <FaGithubSquare className='icon' />
            </a>
            <a href='#' className='TeamCard__socials-icon' title='My website'>
              <CgWebsite className='icon' />
            </a>
            <a href='#' className='TeamCard__socials-icon' title='Facebook'>
              <FaSquareFacebook className='icon' />
            </a>
            <a href='#' className='TeamCard__socials-icon' title='Instagram'>
              <FaInstagramSquare className='icon' />
            </a>
          </div>
        </div>
      </div>    
  </>
  );
};
