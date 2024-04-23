import uniqid from 'uniqid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import { useContext} from 'react';
import { ThemeContext } from '../contexts/theme';


const ProjectCard = ({ project }) => {
  const [{ themeName }] = useContext(ThemeContext);
  const descriptionCSS = themeName === 'dark' ? 'text-gray-300' : 'text-gray-900';
  const titleCSS = themeName === 'dark' ? 'text-white text-2xl font-bold mb-6' : 'text-gray-900 text-2xl font-bold mb-6';
  const stackCSS = themeName === 'dark' ? 'text-gray-400 hover:bg-indigo-600 hover:text-white focus:outline-none text-sm rounded mx-2 px-4 py-2 transition-colors duration-300' :
                                    'text-gray-500 hover:bg-indigo-400 hover:text-white focus:outline-none text-sm rounded mx-2 px-4 py-2 transition-colors duration-300'
  const IconCSS = themeName === 'dark' ? 'text-white' : 'text-gray-900';
  const backgroundCSS = themeName === 'dark' ? 'bg-gray-900 p-8 text-center shadow-lg transition-transform transform hover:-translate-y-2 grid grid-cols-1 gap-4 shadow-slate-700' 
                                              : 'bg-white p-8 text-center shadow-lg transition-transform transform hover:-translate-y-2 grid grid-cols-1 gap-4';

  return (
  <div className={backgroundCSS}>
    {project.thumbnail && (
      <img
        className='w-full aspect-w-402 aspect-h-223 rounded-lg object-cover'
        src={project.thumbnail}
        alt='thumbnail'
      />
    )}

    <div className='flex flex-col gap-4'>
      {project.name && <h3 className={titleCSS}>{project.name}</h3>}

      {project.description && (
        <div className={descriptionCSS}>
          {project.description.map((item) => (
            <p key={uniqid()}>{item}</p>
          ))}
        </div>
      )}

      {project.stack && (
        <ul className='flex flex-wrap justify-center'>
          {project.stack.map((item) => (
            <li key={uniqid()} className={stackCSS}>
              {item}
            </li>
          ))}
        </ul>
      )}

      <div className='flex justify-center gap-4'>
        {project.sourceCode && (
          <a
            href={project.sourceCode}
            target='_blank'
            rel='noreferrer'
            aria-label='source code'
            className='link link--icon'
          >
            <GitHubIcon className={IconCSS}/>
          </a>
        )}

        {project.livePreview && (
          <a
            href={project.livePreview}
            target='_blank'
            rel='noreferrer'
            aria-label='live preview'
            className='link link--icon'
          >
            <LaunchIcon className={IconCSS}/>
          </a>
        )}
      </div>
    </div>
  </div>
)};

export default ProjectCard;
