import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/theme';

const Footer = () => {
  // Use the ThemeContext to access the current theme
  const [{ themeName }] = useContext(ThemeContext);

  // Determine classes based on the theme
  const textColor = themeName === 'dark' ? 'text-gray-300' : 'text-gray-800';

  return (
    <footer className={`mt-12 p-8 text-center ${textColor}`}>
      <a
        href='https://github.com/magic-ike/leanfolio'
        target='_blank'
        rel='noreferrer'
        className={`text-sm font-semibold ${textColor}`}
      >
        Personal Portfolio by Palveen Makkar
      </a>
    </footer>
  );
};

export default Footer;