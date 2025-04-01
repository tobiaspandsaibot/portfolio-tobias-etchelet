import React from 'react';
import './VRToggle.css';
import { FaVrCardboard } from 'react-icons/fa';

const VRToggle = ({ toggleVR, isVRActive }) => {
  return (
    <button 
      className={`vr-toggle-button ${isVRActive ? 'vr-active' : ''}`} 
      onClick={toggleVR}
      aria-label={isVRActive ? "Salir de VR" : "Entrar a VR"}
    >
      <FaVrCardboard className="vr-icon" />
      <span>{isVRActive ? "Salir de VR" : "Go VR"}</span>
    </button>
  );
};

export default VRToggle; 