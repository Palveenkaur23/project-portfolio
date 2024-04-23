import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../contexts/theme';
import { about, projects, skills, contact } from '../data/portfolio';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import Brightness2Icon from '@material-ui/icons/Brightness2';

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);
  const { name } = about;

  const toggleNavListOverlay = () => {
    showNavList
      ? document.body.classList.remove('disable-scroll')
      : document.body.classList.add('disable-scroll');
    setShowNavList(!showNavList);
  };

  const textColor = themeName === 'dark' ? 'text-white' : 'text-gray-900';
  const backgroundColor = themeName === 'dark' ? 'bg-gray-900' : 'bg-white';

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setShowNavList(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`flex justify-between items-center p-1 gap-6 w-full ${backgroundColor}`}>
      <div className='flex items-center'>
        <button
          type='button'
          onClick={toggleNavListOverlay}
          aria-label='toggle navigation'
          className='btn btn--icon nav__hamburger md:hidden z-20'
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>

        <a href='#top' className={`text-xl font-medium md:mr-auto ${textColor}`}>
          {name || 'Brand Name'}
        </a>
      </div>

      <ul className={`hidden md:flex gap-4 ${textColor}`}>
        {projects.length > 0 && (
          <li className='text-xl font-medium'>
            <a href='#projects'>Projects</a>
          </li>
        )}
        {skills.length > 0 && (
          <li className='text-xl font-medium'>
            <a href='#skills'>Skills</a>
          </li>
        )}
        {contact.email && (
          <li className='text-xl font-medium'>
            <a href='#contact'>Contact</a>
          </li>
        )}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        aria-label='toggle theme'
        className='btn btn--icon nav__theme z-20'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      {showNavList && (
        <ul
          className={`absolute inset-0 z-10 flex flex-col items-center justify-center ${backgroundColor} ${textColor} md:hidden`}
          style={{ paddingTop: '4rem' }} // Pushes the content down from the top
        >
          {projects.length > 0 && (
            <li className='my-2'>
              <a href='#projects' onClick={() => setShowNavList(false)} className='text-xl font-medium'>
                Projects
              </a>
            </li>
          )}
          {skills.length > 0 && (
            <li className='my-2'>
              <a href='#skills' onClick={() => setShowNavList(false)} className='text-xl font-medium'>
                Skills
              </a>
            </li>
          )}
          {contact.email && (
            <li className='my-2'>
              <a href='#contact' onClick={() => setShowNavList(false)} className='text-xl font-medium'>
                Contact
              </a>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
