import React from 'react';
import './LanguageSelector.css';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  // Evitar múltiples renders innecesarios
  const handleLanguageChange = React.useCallback((lang) => {
    setLanguage(lang);
  }, [setLanguage]);

  return (
    <div className="language-selector">
      <button 
        onClick={() => handleLanguageChange('es')}
        className={`language-button ${language === 'es' ? 'active' : ''}`}
        title="Cambiar a Español"
      >
        🇪🇸
      </button>
      <button 
        onClick={() => handleLanguageChange('en')}
        className={`language-button ${language === 'en' ? 'active' : ''}`}
        title="Switch to English"
      >
        🇺🇸
      </button>
    </div>
  );
};

export default LanguageSelector;
