import React from 'react';
import './Sidebar.css';
import profileImage from '../assets/tobias-etchelet.jpg';

const Sidebar = () => {
  return (
    <div className="sidebar glass-card">
      <div className="profile">
        <div className="avatar">
          <img src={profileImage} alt="Tobias Etchelet" />
        </div>
        <h2>Tobias Etchelet</h2>
        <p>Diseñador Web & UX/UI</p>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#software">Software</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#uxui">Diseños UX/UI</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar; 