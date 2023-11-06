import React, { useEffect } from 'react';
import './Footer.scss';
import { Logo } from '../Logo/Logo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Pokaż lub ukryj przycisk "Back to top" na podstawie pozycji przewinięcia
      const scrollButton = document.querySelector('.Footer__navigation');

      if (scrollButton) {
        if (window.scrollY > 100) {
          scrollButton.classList.add('show');
        } else {
          scrollButton.classList.remove('show');
        }
      }
    };

    // Dodaj event listener do scrolla
    window.addEventListener('scroll', handleScroll);

    // Usuń event listener po odmontowaniu komponentu
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="Footer">
      <div className="Footer__content">
        <Logo />
        <div className="Footer__links">
          <a className="Footer__links--link" href="https://github.com">
            Github
          </a>
          <a className="Footer__links--link" href="https://google.com">
            Contact
          </a>
          <a className="Footer__links--link" href="https://google.com">
            Rights
          </a>
        </div>
        <button
          type="button"
          className="Footer__navigation"
          onClick={scrollToTop}
        />
        <button
          type="button"
          className="Footer__navigation"
          onClick={scrollToTop}
        >
          <p className="Footer__navigation--text">Back to top</p>
          <div className="Footer__navigation--icon" />
        </button>
      </div>
    </div>
  );
};
