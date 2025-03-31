import React from 'react';
import './SkillsSection.css';
import { FaCode, FaPaintBrush, FaLaptop, FaChartLine, FaGlobe } from 'react-icons/fa';

const SkillsSection = () => {
  const skillCategories = [
    {
      id: 'web-dev',
      title: 'Web Developer',
      icon: <FaCode />,
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap 5'],
      level: 'advanced'
    },
    {
      id: 'graphic-design',
      title: 'Diseño Gráfico',
      icon: <FaPaintBrush />,
      skills: ['Teoría del Diseño', 'Teoría del Color', 'Tipografías', 'Producción Gráfica'],
      level: 'expert'
    },
    {
      id: 'web-design',
      title: 'Diseño Web',
      icon: <FaLaptop />,
      skills: ['Diseño de Interfaz', 'Diseño Responsivo', 'Gestión de Contenidos', 'WebMaster'],
      level: 'expert'
    },
    {
      id: 'ux-ui',
      title: 'Diseño UX/UI',
      icon: <FaPaintBrush />,
      skills: [
        'Diseño UI: Enfocado en la parte visual, todo lo visible para el usuario.',
        'Diseño UX: Orientado a la experiencia del usuario en la web o aplicación.'
      ],
      level: 'expert'
    },
    {
      id: 'marketing-fb',
      title: 'Marketing Digital - FB / IG Ads',
      icon: <FaChartLine />,
      skills: [
        'Más de 60 campañas realizadas para 20 empresas de diferentes nichos.',
        'Auditoría interna y externa.',
        'Establecimiento de objetivos para la campaña.',
        'Investigación de mercado.',
        'Definición de estrategias efectivas.',
        'Seguimiento, control y elaboración de informes de campaña.'
      ],
      level: 'expert'
    },
    {
      id: 'marketing-google',
      title: 'Marketing Digital - Google Ads',
      icon: <FaGlobe />,
      skills: [
        'Más de 30 campañas realizadas para 15 empresas de distintos nichos.',
        'Establecimiento de objetivos basados en auditorías, palabras clave, targets y buyers persona.',
        'Investigación de mercado.',
        'Determinación y combinación de estrategias.',
        'Control de resultados y elaboración de informes de seguimiento.'
      ],
      level: 'advanced'
    }
  ];

  return (
    <div className="skills-section glass-card">
      <h2 className="section-title">Habilidades</h2>
      
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div key={category.id} className={`skill-card ${category.level}`}>
            <div className="skill-header">
              <div className="skill-icon">{category.icon}</div>
              <h3>{category.title}</h3>
            </div>
            <ul className="skill-items">
              {category.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="language-skills">
        <h3>Idiomas</h3>
        <div className="language-skill">
          <div className="language-name">
            <span>Inglés</span>
            <span className="language-level">C1 - Avanzado</span>
          </div>
          <div className="language-progress">
            <div className="language-progress-bar" style={{ width: '90%' }}></div>
          </div>
          <p className="language-details">First Certificate in English (FCE) – Bilingüe – Nativo</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection; 