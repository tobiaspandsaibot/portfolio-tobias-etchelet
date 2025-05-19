import React, { useState } from 'react';
import {
  FaPaintBrush,
  FaLanguage,
  FaVideo,
  FaCode,
  FaRobot,
  FaChevronDown,
  FaPalette,
  FaCamera,
  FaSearch,
  FaMusic
} from 'react-icons/fa';
import './AiTools.css';
import { useLanguage } from '../contexts/LanguageContext';

const AiTools = () => {
  const { getTranslation } = useLanguage();
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = {
    [getTranslation('imageGeneration')]: {
      icon: <FaPaintBrush className="category-icon" />,
      items: [
        'Midjourney',
        'DALL-E',
        'Leonardo.ai',
        'BlueWillow AI',
        'Befake',
        'Hotpot.ai',
        'Kaedim',
        'Immersity AI',
        'Backflip AI',
        'Faceless'
      ]
    },
    [getTranslation('videoAnimation')]: {
      icon: <FaVideo className="category-icon" />,
      items: [
        'Runway',
        'Vidu AI',
        'RenderNet AI',
        'HeyGen',
        'Minimax AI',
        'Animated Drawings',
        'Creatify',
        'Uthana',
        'AnimateDiff'
      ]
    },
    [getTranslation('languageModels')]: {
      icon: <FaLanguage className="category-icon" />,
      items: [
        'GPT-4',
        'Claude',
        'Bard',
        'Gemini',
        'Perplexity AI',
        'Character.ai',
        'Humanize AI'
      ]
    },
    [getTranslation('codeGeneration')]: {
      icon: <FaCode className="category-icon" />,
      items: [
        'GitHub Copilot',
        'Replit',
        'Flowise',
        'Langflow',
        'KLing AI',
        'Noisee',
        'Suno'
      ]
    },
    [getTranslation('designTools')]: {
      icon: <FaPalette className="category-icon" />,
      items: [
        'Autodesigner',
        'Galileo AI',
        'Locofy.ai',
        '10Web AI Website Builder'
      ]
    },
    [getTranslation('audioTools')]: {
      icon: <FaMusic className="category-icon" />,
      items: [
        'ElevenLabs',
        'Musicfy',
        'Krisp',
        'Resemble AI',
        'Lalal.ai',
        'Beatoven'
      ]
    },
    [getTranslation('researchTools')]: {
      icon: <FaSearch className="category-icon" />,
      items: [
        'Scispace',
        'Glasp',
        'Perplexity AI',
        'Google Scholar',
        'Semantic Scholar'
      ]
    },
    [getTranslation('socialMedia')]: {
      icon: <FaCamera className="category-icon" />,
      items: [
        'PromptPal',
        'GoCharlie',
        'Pictory AI',
        'Opus Clip'
      ]
    },
    [getTranslation('communicationTools')]: {
      icon: <FaChevronDown className="category-icon" />,
      items: [
        'Monica',
        'Compose AI',
        'Remail',
        'Jasper',
        'Notion',
        'Trello'
      ]
    }
  };

  return (
    <div className="education-section rounded-borders">
      <h2>{getTranslation('aiToolsTitle')}</h2>
      <div className="categories">
        {Object.entries(categories).map(([category, { icon, items }]) => (
          <div
            key={category}
            className="category"
            onMouseEnter={() => setHoveredCategory(category)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <div className="category-header">
              {icon}
              <span>{category}</span>
              <FaChevronDown className="arrow" />
            </div>
            {hoveredCategory === category && (
              <div className="category-items">
                {items.map((item, index) => (
                  <span key={index} className="item-tag">
                    {item}
                  </span>
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
