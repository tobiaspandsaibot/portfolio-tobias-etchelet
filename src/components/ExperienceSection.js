import React from 'react';
import './ExperienceSection.css';
import { FaBriefcase} from 'react-icons/fa';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Head of Product Design',
      company: 'Babz LLC',
      period: 'March 2024 – Abril 2025 ( 1 año y 1 mes )',
      location: 'Argentina · En remoto',
      description: 'Jornada completa',
      companyUrl: 'https://www.linkedin.com/company/babz-llc/',
      responsibilities: [
        'Brand Design and Identity System',
        'UI Kit Design',
        'Graphic Design',
        'Application UX Design',
        'Website UX Design',
        'Website Developer',
        'Website Optimization',
        'Video Animations',
        'Digital Marketing Strategy',
        'Google Firebase/Analytics'
      ]
    },
    {
      title: 'CoFundador / CEO',
      company: 'SNS SPandsaiboT',
      period: 'Noviembre 2020 – Mayo 2024 ( 4 años 5 meses )',
      location: 'Argentina',
      description: 'Web Services. Development. UX/UI. Design System. Servicios web y marketing digital para clientes nacionales e internacionales (empresas, negocios, pymes y profesionales independientes).',
      companyUrl: 'https://www.linkedin.com/company/sp-saibot',
      responsibilities: [
        'Servicios activos con más de 50 clientes en proyectos web',
        'Especialización en diseño UX/UI para sitios web',
        'Gestión de desarrollo web, diseño web y mantenimiento',
        'Manejo integral de proyectos desde el diseño hasta el lanzamiento',
        'Liderazgo de un equipo de hasta 5 personas como WebMaster',
        'Servicios de Marketing Digital y estrategia online',
        'Gestión de dominios, Hosting SSD y correos profesionales',
        'Soporte técnico y mantenimiento mensual de sitios web'
      ]
    },
    {
      title: 'Designer & Web Designer',
      company: 'SaiboT DG',
      period: 'Diciembre 2015 – Diciembre 2020 ( 4 años 11 meses )',
      location: 'Argentina',
      description: 'Gestión de más de 100 proyectos de clientes de forma independiente (freelance).',
      responsibilities: [
        'Gestión independiente de más de 40 proyectos para clientes pequeños y medianos como freelancer',
        'Diseño gráfico: Creación de diseños atractivos para diversos medios',
        'Rediseño de identidad: Renovación de identidades de marca para reflejar mejor la visión del cliente',
        'GIFs animados: Diseño de GIFs dinámicos y atractivos',
        'Banners animados: Creación de banners publicitarios llamativos para publicidad online',
        'Diseño y desarrollo web: Diseño y desarrollo de sitios web intuitivos y amigables', 
        'Mejora de estructura digital: Optimización de estructuras digitales basada en la transformación de procesos de negocio'
      ]
    },
    {
      title: 'Productor / Jefe de Depósito',
      company: 'BAM EVENT PLANNERS',
      period: 'Enero 2014 – Octubre 2015 (1 año 10 meses)',
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
      period: 'Mayo 2013 – Octubre 2014 (1 año 6 meses)',
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

  const handleCompanyClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener noreferrer');
    }
  };

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
            <div 
              key={index} 
              className="timeline-item"
              onClick={() => handleCompanyClick(exp.companyUrl)}
              style={{ cursor: exp.companyUrl ? 'pointer' : 'default' }}
            >
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
      </div>
    </div>
  );
};

export default ExperienceSection; 