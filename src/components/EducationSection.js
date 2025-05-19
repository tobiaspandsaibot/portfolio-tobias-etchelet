import React from 'react';
import './EducationSection.css';
import { useLanguage } from '../contexts/LanguageContext';

const EducationSection = () => {
  const { getTranslation } = useLanguage();
  return (
    <section className="education-section">
      <h2>{getTranslation('education')}</h2>
      
      <div className="education-item glass-card">
        <div className="education-header">
          <h3>{getTranslation('education1Title')}</h3>
          <span className="education-date">2018 – 2024</span>
        </div>
        <div className="education-details">
          <p><strong>{getTranslation('institution')}:</strong> ORT Argentina</p>
          <p>{getTranslation('education1Description')}</p>
        </div>
      </div>

      <div className="education-item glass-card">
        <div className="education-header">
          <h3>{getTranslation('education2Title')}</h3>
          <span className="education-date">2018 – 2024</span>
        </div>
        <div className="education-details">
          <p><strong>{getTranslation('institution')}:</strong> ORT Argentina</p>
          <p>{getTranslation('education2Description')}</p>
        </div>
      </div>

      <div className="education-item glass-card">
        <div className="education-header">
          <h3>{getTranslation('education3Title')}</h3>
          <span className="education-date">2016 – 2018</span>
        </div>
        <div className="education-details">
          <p><strong>{getTranslation('institution')}:</strong> University of Buenos Aires (FADU)</p>
          <p>{getTranslation('education3Description')}</p>
        </div>
      </div>

      <div className="education-item glass-card">
        <div className="education-header">
          <h3>{getTranslation('education4Title')}</h3>
          <span className="education-date">2018 – 2024</span>
        </div>
        <div className="education-details">
          <p><strong>{getTranslation('institution')}:</strong> ORT Argentina</p>
          <p>{getTranslation('education4Description')}</p>
        </div>
      </div>

      <div className="education-item glass-card">
        <div className="education-header">
          <h3>{getTranslation('education5Title')}</h3>
          <span className="education-date">2015 – 2016</span>
        </div>
        <div className="education-details">
          <p>{getTranslation('education5Description')}</p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;