import React from 'react';
import './ExperienceSection.css';
import { FaBriefcase} from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const ExperienceSection = () => {
  const { getTranslation } = useLanguage();
  const experiences = [
    {
      title: getTranslation('experience1Title'),
      company: 'Babz LLC',
      period: getTranslation('experience1Period'),
      location: getTranslation('experience1Location'),
      description: getTranslation('experience1Description'),
      companyUrl: 'https://www.linkedin.com/company/babz-llc/',
      responsibilities: getTranslation('experience1Responsibilities').split(',')
    },
    {
      title: getTranslation('experience2Title'),
      company: 'SNS SPandsaiboT',
      period: getTranslation('experience2Period'),
      location: getTranslation('experience2Location'),
      description: getTranslation('experience2Description'),
      companyUrl: 'https://www.linkedin.com/company/sp-saibot',
      responsibilities: getTranslation('experience2Responsibilities').split(',')
    },
    {
      title: getTranslation('experience3Title'),
      company: 'SaiboT DG',
      period: getTranslation('experience3Period'),
      location: getTranslation('experience3Location'),
      description: getTranslation('experience3Description'),
      responsibilities: getTranslation('experience3Responsibilities').split(',')
    },
    {
      title: getTranslation('experience4Title'),
      company: 'BAM EVENT PLANNERS',
      period: getTranslation('experience4Period'),
      location: getTranslation('experience4Location'),
      description: getTranslation('experience4Description'),
      responsibilities: getTranslation('experience4Responsibilities').split(',\n')
    },
    {
      title: getTranslation('experience5Title'),
      company: 'Shimano Latin America Representación Comercial Ltda.',
      period: getTranslation('experience5Period'),
      location: getTranslation('experience5Location'),
      description: getTranslation('experience5Description'),
      responsibilities: getTranslation('experience5Responsibilities').split(',\n')
    }
  ];

  const handleCompanyClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <>
      <h2 className="section-title">Experiencia</h2>
      <div className="experience-section glass-card">
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
    </>
  );
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