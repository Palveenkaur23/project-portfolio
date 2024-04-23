import { useEffect, useState } from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme';

const ScrollToTop = () => {
  const [{ themeName }] = useContext(ThemeContext);
  const IconCSS = themeName === 'dark' ? 'text-white' : 'text-gray-900';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return isVisible ? (
    <div className='fixed bottom-8 right-8 hidden md:block'>
      <a href='#top'>
        <ArrowUpwardIcon fontSize='large' className={IconCSS}/>
      </a>
    </div>
  ) : null;
};

export default ScrollToTop;
