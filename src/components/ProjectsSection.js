import React from 'react';
import './ProjectsSection.css';
import { FaExternalLinkAlt } from 'react-icons/fa';
import project1Image from '../assets/project1.jpg';
import project2Image from '../assets/project2.jpg';
import project3Image from '../assets/Logo-Neorelax-2048x695-1.png';
import babzImage from '../assets/babz-website.png';
import snsImage from '../assets/snswebsite.png';
import clazzicalImage from '../assets/clazzical.png';
import { useLanguage } from '../contexts/LanguageContext';

const ProjectsSection = () => {
  const { getTranslation } = useLanguage();
  const projects = [
    {
      id: 1,
      title: getTranslation('project1Title'),
      description: getTranslation('project1Description'),
      tech: getTranslation('project1Tech').split(','),
      link: 'https://www.linkedin.com/company/babz-llc/',
      year: '2024',
      image: babzImage,
      className: 'babz-image'
    },
    {
      id: 2,
      title: getTranslation('project2Title'),
      description: getTranslation('project2Description'),
      tech: getTranslation('project2Tech').split(','),
      link: 'https://www.linkedin.com/company/sp-saibot',
      year: '2024',
      image: snsImage,
      className: 'sns-image'
    },
    {
      id: 3,
      title: getTranslation('project3Title'),
      description: getTranslation('project3Description'),
      tech: getTranslation('project3Tech').split(','),
      link: 'https://www.neorelax.com.ar/',
      year: '2024',
      image: project3Image,
      className: 'neorelax-image'
    },
    {
      id: 4,
      title: getTranslation('project4Title'),
      description: getTranslation('project4Description'),
      tech: getTranslation('project4Tech').split(','),
      link: 'https://sgastronomicas.com.ar/',
      year: '2024',
      image: project2Image,
      className: 'sns-image'
    },
    {
      id: 5,
      title: getTranslation('project5Title'),
      description: getTranslation('project5Description'),
      tech: getTranslation('project5Tech').split(','),
      link: 'https://eljardindelaplaza.edu.ar//',
      year: '2024',
      image: project1Image,
      className: 'babz-image'
    },
    {
      id: 6,
      title: getTranslation('project6Title'),
      description: getTranslation('project6Description'),
      tech: getTranslation('project6Tech').split(','),
      link: 'https://clazzicalskateboarding.empretienda.com.ar/',
      year: '2024',
      image: clazzicalImage,
      className: 'babz-image'
    }
  ];

  return (
    <div className="education-section rounded-borders">
      <h2>{getTranslation('projectsTitle')}</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card glass-card">
            <div className="project-image">
              <img 
                src={project.image} 
                alt={project.title} 
                className={project.className}
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-year">{project.year}</div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            <div className="project-footer">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                {getTranslation('viewProject')} <FaExternalLinkAlt className="link-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection; 