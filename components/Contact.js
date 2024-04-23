import React, { useContext } from 'react';
import { contact } from '../data/portfolio';
import { ThemeContext } from '../contexts/theme'; 

const Contact = () => {
  const [{ themeName }] = useContext(ThemeContext); 
  if (!contact.email) return null;

  const emailButtonCSS = themeName === 'dark' ? 'btn bg-gray-800 btn-outline hover:bg-gray-700 text-lg font-medium py-2 px-4 rounded text-white' : 'btn btn--outline hover:border-gray-400 bg-gray-200 text-lg font-medium py-2 px-4 rounded text-gray-900';
  const emailHeadingCSS = themeName === 'dark' ? 'text-white text-4xl font-bold mb-6' : 'text-gray-900 text-2xl font-bold mb-6';
  const containerCSS = themeName === 'dark' ? 'flex flex-col items-center justify-center min-h-screen text-center px-8 py-12 text-white' : 'flex flex-col items-center justify-center min-h-screen text-center px-8 py-12 text-gray-900';
  return (
    <section className={containerCSS} id="contact">
      <h2 className={emailHeadingCSS}>Contact</h2>
      <a href={`mailto:${contact.email}`} target='_blank' rel='noreferrer' className={emailButtonCSS}>
        Email Me
      </a>
    </section>
  );
};

export default Contact;
