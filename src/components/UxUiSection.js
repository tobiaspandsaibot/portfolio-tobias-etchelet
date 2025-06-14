import React from 'react';
import './UxUiSection.css';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

// Importar imágenes (asegúrate de que existan en la carpeta assets)
import bulgariImage from '../assets/bulgari.png';
import burgerBotsImage  from '../assets/burger-bot.png'; 
import codepenImage  from '../assets/codepen-image.png';



const UxUiSection = () => {
  const { getTranslation } = useLanguage();
  const projects = [
    {
      id: 1,
      title: getTranslation('uxuiProject1Title'),
      description: getTranslation('uxuiProject1Description'),
      tech: getTranslation('uxuiProject1Tech').split(','),
      link: 'https://www.figma.com/proto/trUqjo2lR2L4imHRq2zdxg/BULGARI?type=design&node-id=2-104&t=Njlt4884jBwx21Vo-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=4%3A2',
      year: '2023',
      image: bulgariImage,
      className: 'bulgari-image'
    },
    {
      id: 2,
      title: getTranslation('uxuiProject2Title'),
      description: getTranslation('uxuiProject2Description'),
      tech: getTranslation('uxuiProject2Tech').split(','),
      link: 'https://xd.adobe.com/view/5f9f6f8d-9cda-47aa-89fb-b1e02c8d84dd-0acc/?fullscreen&hints=off',
      year: '2022',
      image: burgerBotsImage,
      className: 'burger-bots-image'
    }
    ,
    {
      id: 3,
      title: getTranslation('uxuiProject3Title'),
      description: getTranslation('uxuiProject3Description'),
      tech: getTranslation('uxuiProject3Tech').split(','),
      link: 'https://codepen.io/tobias-spandsaibot/pens/popular',
      year: '2024',
      image: codepenImage,
      className: 'codepen-image'
    }  


  ];

  return (
    <div className="education-section rounded-borders">
      <h2>{getTranslation('uxuiTitle')}</h2>
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

export default UxUiSection;