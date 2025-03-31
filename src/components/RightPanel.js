import React from 'react';
import './RightPanel.css';
import SoftwareSkills from './SoftwareSkills';
import ContactCard from './ContactCard';

const RightPanel = () => {
  return (
    <div className="right-panel">
      <SoftwareSkills />
      <ContactCard />
    </div>
  );
};

export default RightPanel; 