import React from 'react';
import './ProjectsSection.css';
import { FaExternalLinkAlt } from 'react-icons/fa';
import project1Image from '../assets/project1.jpg';
import project2Image from '../assets/project2.jpg';
import project3Image from '../assets/Logo-Neorelax-2048x695-1.png';
import babzImage from '../assets/babz-website.png';
import snsImage from '../assets/snswebsite.png';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Babz App',
      description: 'Plataforma de mensajería con reacciones de video únicas. Diseño de producto completo incluyendo sistema de identidad de marca, UI Kit y experiencia de usuario.',
      tech: ['UI Kit', 'Brand Design', 'UX Design', 'Firebase', 'Analytics'],
      link: 'https://www.linkedin.com/company/babz-llc/',
      year: '2024',
      image: babzImage,
      className: 'babz-image'
    },
    {
      id: 2,
      title: 'SNS Web Services',
      description: 'Plataforma integral de servicios web para más de 50 clientes, incluyendo hosting SSD, diseño UX/UI, desarrollo web y marketing digital.',
      tech: ['UX/UI Design', 'Web Development', 'Hosting', 'Digital Marketing'],
      link: 'https://www.linkedin.com/company/sp-saibot',
      year: '2020-2024',
      image: snsImage,
      className: 'sns-image'
    },
    {
      id: 3,
      title: 'El Jardín de la Plaza',
      description: 'Diseño y desarrollo de sitio web para escuela de jardín de infantes',
      tech: ['WordPress', 'Elementor', 'CSS', 'Responsive Design'],
      link: 'https://eljardindelaplaza.edu.ar/',
      year: '2020-2024',
      image: project1Image,
      className: 'jardin-image'
    },
    {
      id: 4,
      title: 'Soluciones Gastronómicas',
      description: 'E-commerce para venta de productos gastronómicos',
      tech: ['WordPress', 'WooCommerce', 'JavaScript', 'UI/UX Design'],
      link: 'https://sgastronomicas.com.ar/',
      year: '2020-2024',
      image: project2Image,
      className: 'soluciones-image'
    },
    {
      id: 5,
      title: 'Neorelax',
      description: 'Tienda online de productos de relajación y bienestar',
      tech: ['WordPress', 'WooCommerce', 'CSS', 'Payment Gateway'],
      link: 'https://neorelax.com.ar/',
      year: '2020-2024',
      image: project3Image,
      className: 'neorelax-image'
    }
  ];

  return (
    <section className="projects-section">
      <h2>Proyectos</h2>
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
                Ver proyecto <FaExternalLinkAlt className="link-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection; 