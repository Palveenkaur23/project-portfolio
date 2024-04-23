import uniqid from 'uniqid';
import { skills } from '../data/portfolio';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme';

const Skills = () => {
  const [{ themeName }] = useContext(ThemeContext);
  if (!skills.length) return null;
  const skillCSS = themeName === 'dark' ? 'text-gray-300 bg-gray-800 hover:bg-indigo-600 focus:outline-none font-medium rounded px-4 py-2 transition-colors duration-300' :
                                           'text-gray-900 bg-gray-100 hover:bg-indigo-400 focus:outline-none font-medium rounded px-4 py-2 transition-colors duration-300';
  const headingCSS = themeName === 'dark' ? 'text-white text-2xl font-bold mb-6' : 'text-gray-900 text-2xl font-bold mb-6';
  return (
    <section className='flex flex-col items-center justify-center min-h-screen py-12' id='skills'>
      <h2 className={headingCSS}>Skills</h2>
      <ul className='flex justify-center flex-wrap'>
        {skills.map((skill) => (
          <li key={uniqid()} className='m-2'>
            <button className={skillCSS}>
              {skill}
            </button>
          </li>
        ))}
      </ul>

    </section>
  );
};

export default Skills;
