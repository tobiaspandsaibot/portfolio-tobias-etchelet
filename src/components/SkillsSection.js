import React from 'react';
import './SkillsSection.css';
import { FaCode, FaPaintBrush, FaLaptop, FaChartLine, FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const SkillsSection = () => {
  const { getTranslation } = useLanguage();
  const skillCategories = [
    {
      id: 'web-dev',
      title: getTranslation('webDeveloper'),
      icon: <FaCode />,
      skills: getTranslation('webDevSkills').split(','),
      level: 'advanced'
    },
    {
      id: 'graphic-design',
      title: getTranslation('graphicDesign'),
      icon: <FaPaintBrush />,
      skills: getTranslation('graphicDesignSkills').split(','),
      level: 'expert'
    },
    {
      id: 'web-design',
      title: getTranslation('webDesign'),
      icon: <FaLaptop />,
      skills: getTranslation('webDesignSkills').split(','),
      level: 'expert'
    },
    {
      id: 'ux-ui',
      title: getTranslation('uxUiDesign'),
      icon: <FaPaintBrush />,
      skills: [
        getTranslation('uxUiDesign1'),
        getTranslation('uxUiDesign2')
      ],
      level: 'expert'
    },
    {
      id: 'marketing-fb',
      title: getTranslation('metaAds'),
      icon: <FaChartLine />,
      skills: [
        getTranslation('metaAdsSkill1'),
        getTranslation('metaAdsSkill2'),
        getTranslation('metaAdsSkill3'),
        getTranslation('metaAdsSkill4'),
        getTranslation('metaAdsSkill5'),
        getTranslation('metaAdsSkill6')
      ],
      level: 'expert'
    },
    {
      id: 'marketing-google',
      title: getTranslation('googleAds'),
      icon: <FaGlobe />,
      skills: [
        getTranslation('googleAdsSkill1'),
        getTranslation('googleAdsSkill2'),
        getTranslation('googleAdsSkill3'),
        getTranslation('googleAdsSkill4'),
        getTranslation('googleAdsSkill5')
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