import React, { useContext } from 'react';
import uniqid from 'uniqid';
import Hyphenated from 'react-hyphen';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { about } from '../data/portfolio';
import { ThemeContext } from '../contexts/theme'; 

const About = () => {
  const { name, role, company, description, resume, social, greetingEmoji } = about;
  const [{ themeName }] = useContext(ThemeContext); 
  const firstName = name ? name.split(' ')[0] : null;

  const textColor = themeName === 'dark' ? 'text-white' : 'text-gray-900';

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen text-center gap-y-6`}>
      <div className='flex-1 min-h-[calc(3rem-2.4rem)] md:min-h-[calc(5rem-2.4rem)]' />

      {(firstName || role) && (
        <div>
          {firstName && (
            <h1 className={`text-3xl ${textColor}`}>
              Hey, I&apos;m <span className='font-bold'>{firstName}</span>
              {greetingEmoji && <span> {greetingEmoji}</span>}
            </h1>
          )}

          {role && (
            <h1 className={`text-3xl ${textColor}`}>
              I&apos;m a {role}
              {company && (
                <span>
                  {' '}
                  at <span className='font-bold'>{company}</span>
                </span>
              )}
              .
            </h1>
          )}
        </div>
      )}

      {description && (
        <div className={`text-left text-lg ${textColor}`}>
          <Hyphenated>
            {description.map((item) => (
              <p key={uniqid()}>{item}</p>
            ))}
            {/* fragments added to prevent react-hyphen error when description length < 2 */}
            <></>
            <></>
          </Hyphenated>
        </div>
      )}

      {(resume || social) && (
        <div className={`flex justify-center gap-x-4 ${textColor}`}>
          {resume && (
            <a href={resume} target='_blank' rel='noreferrer'>
              <span className='btn btn--outline'>
                Resume
              </span>
            </a>
          )}

          {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='github'
                  className='link link--icon'
                >
                  <GitHubIcon />
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='linkedin'
                  className='link link--icon'
                >
                  <LinkedInIcon />
                </a>
              )}
            </>
          )}
        </div>
      )}

      <div className='flex-1' />
    </div>
  );
};

export default About;
