import React from 'react';
import './Dashboard.css';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ExperienceSection from './ExperienceSection';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="header glass-card">
        <div className="header-content">
          <h1>Tobías Etchelet</h1>
          <p className="subtitle">
            Diseñador Web con más de 10 años de experiencia, especializado en
            <span className="highlight"> Diseño UI/UX</span> y
            <span className="accent"> Desarrollo Web</span>
          </p>
        </div>
      </header>

      <section id="about">
        <AboutSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="portfolio">
        <ProjectsSection />
      </section>

      <section id="experience">
        <ExperienceSection />
      </section>

      <section id="contact" className="contact-section glass-card">
        <h2 className="section-title">Contacto</h2>
        <p className="contact-description">
          ¿Interesado en trabajar juntos? Ponete en contacto conmigo a través de los siguientes medios:
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <strong>Email:</strong>
            <a href="mailto:tobiasetchelet@gmail.com">tobiasetchelet@gmail.com</a>
          </div>
          <div className="contact-item">
            <strong>LinkedIn:</strong>
            <a href="https://www.linkedin.com/in/tob%C3%ADas-etchelet-66350575/" target="_blank" rel="noopener noreferrer">
              Tobías Etchelet
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard; 