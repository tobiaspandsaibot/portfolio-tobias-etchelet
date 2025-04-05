import React from 'react';
import './Dashboard.css';
import ProjectsSection from './ProjectsSection';
import UxUiSection from './UxUiSection';
import SkillsSection from './SkillsSection';
import SoftwareSkills from './SoftwareSkills';
import ContactSection from './ContactSection';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import AboutSection from './AboutSection';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header id="about" className="header glass-card">
        <div className="header-content">
          <h1>Tobias Etchelet</h1>
          <p className="subtitle">
            Diseñador Web y UX/UI con más de 12 años de experiencia creando interfaces
            funcionales y atractivas.   Especializado en diseño centrado en el usuario y desarrollo frontend.
          </p>
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