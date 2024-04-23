import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme';

const Header = () => {
  const [{ themeName }] = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);
  const headerCSS = themeName === 'dark' ? `flex items-center sticky p-6 text-2xl text-white top-0 z-10 shadow-lg bg-gray-900 ${scrolled? 'shadow-lg' : ''}` :
                                           `flex items-center sticky p-6 text-2xl text-gray-900 top-0 bg-white z-10 ${scrolled ? 'shadow-lg' : ''}`;

  useEffect(() => {
    const handleScroll = () =>
      window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={headerCSS}>
      <Navbar />
    </header>
  );
};

export default Header;
