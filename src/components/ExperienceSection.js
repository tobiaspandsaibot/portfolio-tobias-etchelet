import React from 'react';
import './ExperienceSection.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Head of Product Design',
      company: 'Babz LLC',
      period: 'Mayo 2024 – Mayo 2025',
      location: 'Argentina · En remoto',
      description: 'Jornada completa',
      responsibilities: [
        'Brand Design and Identity',
        'UI Kit Design',
        'Graphic Design',
        'App UX Design',
        'Website UX Design',
        'Website Development',
        'Website Optimization',
        'Video Animations',
        'Google Firebase/Analytics'
      ]
    },
    {
      title: 'CoFundador / CEO',
      company: 'Spandsaibot',
      period: 'Noviembre 2020 – Presente',
      location: 'Argentina',
      description: 'Servicios web y marketing digital para clientes nacionales e internacionales (empresas, negocios, pymes y profesionales independientes).',
      responsibilities: [
        'Liderazgo de un equipo de 5 personas, gestionando deadlines y supervisando el cumplimiento de objetivos.'
      ]
    },
    {
      title: 'CEO',
      company: 'Saibotdg',
      period: 'Septiembre 2016 – Octubre 2020 (4 años)',
      location: 'Argentina',
      description: 'Gestión de más de 100 proyectos de clientes de forma independiente (freelance).',
      responsibilities: [
        'Enfoque en diseño gráfico, rediseño de imagen, GIF animados, banners animados, diseño y creación de webs, y mejora de la estructura digital.'
      ]
    },
    {
      title: 'Productor / Jefe de Depósito',
      company: 'BAM EVENT PLANNERS',
      period: 'Septiembre 2015 – Septiembre 2016 (1 año 1 mes)',
      location: 'Argentina',
      description: 'Organización de eventos corporativos y sociales (coordinación, producción, logística y montajes).',
      responsibilities: [
        'Pre-organización y logística de ambientaciones y estructuras.',
        'Realización de presentaciones en PowerPoint para clientes.',
        'Asistencia en producción durante eventos.',
        'Coordinación con actores y artistas.',
        'Supervisión de seguridad en depósito y eventos.',
        'Logística de montajes y desmontajes.',
        'Realización de seguros RSA para eventos y promociones en vía pública.'
      ]
    },
    {
      title: 'Asistente Administrativo Sénior',
      company: 'Shimano Latin America Representación Comercial Ltda.',
      period: '2013 – Octubre 2014 (1 año 6 meses)',
      location: 'Argentina',
      description: '',
      responsibilities: [
        'Control de stock de muestras de mercadería.',
        'Gestión de pagos a proveedores, cobranzas y tareas bancarias.',
        'Elaboración de presupuestos y presentaciones.',
        'Manejo de caja chica para distintos departamentos.',
        'Control de gastos post eventos.'
      ]
    }
  ];

  const education = [
    {
      title: 'Técnico Superior en Diseño de Interfaces Digitales',
      institution: 'ORT Argentina',
      period: '2018 – 2024',
      description: 'Actualmente completando las últimas materias, próximo a recibirse.'
    },
    {
      title: 'Diseñador Gráfico',
      institution: 'ORT Argentina',
      period: '2018 – 2024',
      description: 'Especialización en creación de logotipos, isotipos y branding, incluyendo la creación de manual de identidad corporativo.'
    },
    {
      title: 'Diseñador Web',
      institution: 'ORT Argentina',
      period: '2018 – 2024',
      description: 'Especialización en diseño y desarrollo de sitios web, abarcando desde la maquetación hasta el diseño final, ofreciendo soluciones de calidad profesional.'
    },
    {
      title: 'Ilustrador Digital',
      institution: 'Puerta 18',
      period: '2015 – 2016',
      description: 'Espacio gratuito para jóvenes de 13 a 24 años, donde se fomentan habilidades y vocaciones a través del uso de herramientas tecnológicas.'
    }
  ];

  return (
    <div className="experience-section glass-card">
      <h2 className="section-title">Experiencia</h2>

      <div className="timeline">
        <div className="timeline-section">
          <div className="timeline-header">
            <div className="timeline-icon work">
              <FaBriefcase />
            </div>
            <h3>Experiencia Laboral</h3>
          </div>

          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-title-row">
                  <h4>{exp.title}</h4>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <div className="timeline-company">{exp.company} - {exp.location}</div>
                {exp.description && <p className="timeline-description">{exp.description}</p>}
                {exp.responsibilities.length > 0 && (
                  <ul className="timeline-responsibilities">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="timeline-section">
          <div className="timeline-header">
            <div className="timeline-icon education">
              <FaGraduationCap />
            </div>
            <h3>Educación</h3>
          </div>

          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-title-row">
                  <h4>{edu.title}</h4>
                  <span className="timeline-period">{edu.period}</span>
                </div>
                <div className="timeline-company">{edu.institution}</div>
                {edu.description && <p className="timeline-description">{edu.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection; 