import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Roadmap.css';

const Roadmap = () => {
  const { getTranslation } = useLanguage();

  const roadmap = {
    shortTerm: [
      {
        title: getTranslation('optimizePerformance'),
        description: getTranslation('optimizePerformanceDescription'),
        status: 'inProgress'
      },
      {
        title: getTranslation('fixNodeVersion'),
        description: getTranslation('fixNodeVersionDescription'),
        status: 'inProgress'
      },
      {
        title: getTranslation('updateDependencies'),
        description: getTranslation('updateDependenciesDescription'),
        status: 'inProgress'
      }
    ],
    mediumTerm: [
      {
        title: getTranslation('addDarkMode'),
        description: getTranslation('addDarkModeDescription'),
        status: 'planned'
      },
      {
        title: getTranslation('implementAnalytics'),
        description: getTranslation('implementAnalyticsDescription'),
        status: 'planned'
      },
      {
        title: getTranslation('addPortfolioProjects'),
        description: getTranslation('addPortfolioProjectsDescription'),
        status: 'planned'
      }
    ],
    longTerm: [
      {
        title: getTranslation('createBlogSection'),
        description: getTranslation('createBlogSectionDescription'),
        status: 'planned'
      },
      {
        title: getTranslation('implementAIAssistant'),
        description: getTranslation('implementAIAssistantDescription'),
        status: 'planned'
      },
      {
        title: getTranslation('addMobileApp'),
        description: getTranslation('addMobileAppDescription'),
        status: 'planned'
      }
    ]
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return '#4CAF50';
      case 'inProgress':
        return '#2196F3';
      case 'planned':
        return '#FF9800';
      default:
        return '#9E9E9E';
    }
  };

  return (
    <div className="roadmap-container">
      <h1>{getTranslation('roadmapTitle')}</h1>
      
      <div className="roadmap-timeline">
        {/* Short Term Goals */}
        <div className="roadmap-section">
          <h2>{getTranslation('shortTermGoals')}</h2>
          {roadmap.shortTerm.map((goal, index) => (
            <div key={index} className="roadmap-item">
              <div className="roadmap-status" style={{ backgroundColor: getStatusColor(goal.status) }}>
                {goal.status.charAt(0).toUpperCase() + goal.status.slice(1)}
              </div>
              <div className="roadmap-content">
                <h3>{goal.title}</h3>
                <p>{goal.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Medium Term Goals */}
        <div className="roadmap-section">
          <h2>{getTranslation('mediumTermGoals')}</h2>
          {roadmap.mediumTerm.map((goal, index) => (
            <div key={index} className="roadmap-item">
              <div className="roadmap-status" style={{ backgroundColor: getStatusColor(goal.status) }}>
                {goal.status.charAt(0).toUpperCase() + goal.status.slice(1)}
              </div>
              <div className="roadmap-content">
                <h3>{goal.title}</h3>
                <p>{goal.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Long Term Goals */}
        <div className="roadmap-section">
          <h2>{getTranslation('longTermGoals')}</h2>
          {roadmap.longTerm.map((goal, index) => (
            <div key={index} className="roadmap-item">
              <div className="roadmap-status" style={{ backgroundColor: getStatusColor(goal.status) }}>
                {goal.status.charAt(0).toUpperCase() + goal.status.slice(1)}
              </div>
              <div className="roadmap-content">
                <h3>{goal.title}</h3>
                <p>{goal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
