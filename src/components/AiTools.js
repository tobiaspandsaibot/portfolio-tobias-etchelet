import React, { useState } from 'react';
import {
  FaPaintBrush,
  FaVideo,
  FaRegComment,
  FaPalette,
  FaCamera,
  FaSearch,
  FaMusic,
  FaCode,
  FaRobot,
  FaChevronDown,
} from 'react-icons/fa';
import './AiTools.css';
import { useLanguage } from '../contexts/LanguageContext';

const AiTools = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const { getTranslation } = useLanguage();

  const categories = {
    [getTranslation('generativeAI')]: {
      icon: <FaPaintBrush className="category-icon" />,
      items: [
        'BlueWillow AI',
        'DALL-E',
        'Midjourney',
        'Stable Diffusion',
        'Leonardo.ai'
      ]
    },
    [getTranslation('videoAnimation')]: {
      icon: <FaVideo className="category-icon" />,
      items: [
        'Runway ML',
        'Synthesia',
        'D-ID',
        'Deepseek AI',
        'Luma AI'
      ]
    },
    [getTranslation('textChatbots')]: {
      icon: <FaRegComment className="category-icon" />,
      items: [
        'ChatGPT',
        'Claude',
        'Bard',
        'Gemini',
        'Claude 3'
      ]
    },
    [getTranslation('designTools')]: {
      icon: <FaPalette className="category-icon" />,
      items: [
        'Figma',
        'Adobe Creative Cloud',
        'Sketch',
        'Canva',
        'Procreate'
      ]
    },
    [getTranslation('socialMedia')]: {
      icon: <FaCamera className="category-icon" />,
      items: [
        'Threads',
        'Instagram',
        'Twitter',
        'Facebook',
        'LinkedIn'
      ]
    },
    [getTranslation('search')]: {
      icon: <FaSearch className="category-icon" />,
      items: [
        'Google',
        'Bing',
        'DuckDuckGo',
        'Ecosia',
        'Yandex'
      ]
    },
    [getTranslation('audioTools')]: {
      icon: <FaMusic className="category-icon" />,
      items: [
        'Soundtrap',
        'BandLab',
        'Audacity',
        'Adobe Audition',
        'Logic Pro'
      ]
    },
    [getTranslation('codeTools')]: {
      icon: <FaCode className="category-icon" />,
      items: [
        'VS Code',
        'IntelliJ IDEA',
        'PyCharm',
        'WebStorm',
        'Android Studio'
      ]
    },
    [getTranslation('research')]: {
      icon: <FaRobot className="category-icon" />,
      items: [
        'Google Scholar',
        'Microsoft Academic',
        'Semantic Scholar',
        'ResearchGate',
        'Academia.edu'
      ]
    },
    [getTranslation('otherTools')]: {
      icon: <FaChevronDown className="category-icon" />,
      items: [
        'Notion',
        'Trello',
        'Asana',
        'Slack',
        'Zoom'
      ]
    }
  };

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div className="ai-tools">
      <h2>{getTranslation('aiToolsTitle')}</h2>
      <div className="categories">
        {Object.entries(categories).map(([category, { icon, items }]) => (
          <div
            key={category}
            className={`category ${activeCategory === category ? 'active' : ''}`}
            onClick={() => toggleCategory(category)}
          >
            <div className="category-header">
              {icon}
              <span>{category}</span>
            </div>
            {activeCategory === category && (
              <div className="category-items">
                {items.map((item, index) => (
                  <div key={index} className="item">
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiTools;
