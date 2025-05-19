import React from 'react';
import './Dashboard.css';
import InteractiveBackground from './InteractiveBackground';
// Removed InteractiveBackground as it's already rendered in App.js
import ProjectsSection from './ProjectsSection';
import UxUiSection from './UxUiSection';
import SkillsSection from './SkillsSection';
import SoftwareSkills from './SoftwareSkills';
import AiTools from './AiTools';
import ContactSection from './ContactSection';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import AboutSection from './AboutSection';
import { useLanguage } from '../contexts/LanguageContext';

const Dashboard = () => {
  const { getTranslation } = useLanguage();

  return (
    <div className="dashboard" id="dashboard">
      <InteractiveBackground />
      <header id="about" className="header glass-card">
        <div className="header-content">
          <h1>{getTranslation('name')}</h1>
        </div>
      </header>

      <div className="content-grid">
        <div className="main-content">
          {/* Sección Sobre Mí */}
          <section id="about-me">
            <AboutSection />
          </section>

          {/* Sección de Experiencia */}
          <section id="experience">
            <ExperienceSection />
          </section>

          {/* Sección de Educación */}
          <section id="education">
            <EducationSection />
          </section>

          {/* Sección de Habilidades */}
          <section id="skills">
            <SkillsSection />
          </section>

          {/* Sección de Software */}
          <section id="software">
            <SoftwareSkills />
          </section>

          {/* Sección de AI Tools */}
          <section id="ai-tools">
            <AiTools />
          </section>

          {/* Sección de Proyectos Web */}
          <section id="projects">
            <ProjectsSection />
          </section>

          {/* Sección de Diseños UX/UI */}
          <section id="uxui" className='uxui-section'>
            <UxUiSection />
          </section>
        </div>

        <div className="right-column" id="contact">
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 