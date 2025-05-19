import React from 'react';
import './SoftwareSkills.css';
import { useLanguage } from '../contexts/LanguageContext';

const SoftwareSkills = () => {
  const { getTranslation } = useLanguage();

  const softwareCategories = [
    {
      level: getTranslation('softwareLevelIntermediate'),
      software: [
        'Adobe Lightroom',
        'Visual Studio Code',
        'Stable Diffusion GUI',
        'Adobe Premiere Pro',
        'Adobe After Effects',
        'Slack',
        'GDevelop 5',
        'OBS Studio'
      ]
    },
    {
      level: getTranslation('softwareLevelAdvanced'),
      software: [
        'Figma',
        'WebFlow',
        'Adobe InDesign',
        'Adobe Firefly',
        'ChatGPT',
        'Bing',
        'Sketch',
        'Spark AR',
        'cPanel',
        'Facebook Business Manager',
        'Google Ads Manager',
        'Google Suite'
      ]
    },
    {
      level: getTranslation('softwareLevelProfessional'),
      software: [
        'Adobe XD',
        'Adobe Photoshop',
        'Adobe Illustrator',
        'WordPress',
        'Elementor',
        'Divi',
        'WooCommerce',
        'Mobirise',
        'Sitepad Website Builder',
        'Wix'
      ]
    }
  ];

  return (
    <div className="education-section">
      <h2 className="section-title ">{getTranslation('softwareTitle')}</h2>
      
      {softwareCategories.map((category, index) => (
        <div key={index} className="software-category">
          <h3 className="category-title">{category.level}</h3>
          <div className="software-tags">
            {category.software.map((software, idx) => (
              <span key={idx} className={`software-tag ${index === 0 ? 'intermediate' : index === 1 ? 'advanced' : 'professional'}`}>
                {software}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SoftwareSkills;