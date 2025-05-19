import React from 'react';
import './AboutSection.css';
import { useLanguage } from '../contexts/LanguageContext';

const AboutSection = () => {
  const { getTranslation } = useLanguage();

  return (
    <div className="about-section glass-card">
      <h2 className="section-title">{getTranslation('aboutMe')}</h2>
      
      <div className="about-content">
        
        <ul className="skills-list">
          <li>{getTranslation('graphicDesign')}</li>
          <li>{getTranslation('webDesign')}</li>
          <li>{getTranslation('uiUxDesign')}</li>
          <li>{getTranslation('webDevelopment')}</li>
        </ul>
        
        <p>
          {getTranslation('aboutMeDescription')}
        </p>
        
        <p>
          {getTranslation('aboutMeMission')}
        </p>
        
      </div>
    </div>
  );
};

export default AboutSection;