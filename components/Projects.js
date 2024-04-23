import uniqid from 'uniqid';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolio';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme';

const Projects = () => {
  const [{ themeName }] = useContext(ThemeContext);
  const headingCSS = themeName === 'dark' ? 'text-white text-2xl font-bold mb-6' : 'text-gray-900 text-2xl font-bold mb-6';
  if (!projects.length) return null;

  return (
    <section className='flex flex-col items-center justify-center min-h-screen py-12' id='projects'>
      <h2 className={headingCSS}>Projects</h2>
      <div className='flex flex-col gap-8 mb-10'>
        {projects.map((project) => (
          <ProjectCard key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
