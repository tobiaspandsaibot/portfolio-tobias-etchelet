import React from 'react';
import { FaHome, FaCode, FaUser, FaPaintBrush, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar glass-card">
      <div className="profile">
        <div className="avatar">
          <span>TE</span>
        </div>
        <h2>Tobías Etchelet</h2>
        <p className="text-secondary">Diseñador Web</p>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li className="active">
            <a href="#home">
              <FaHome className="icon" />
              <span>Inicio</span>
            </a>
          </li>
          <li>
            <a href="#about">
              <FaUser className="icon" />
              <span>Sobre Mí</span>
            </a>
          </li>
          <li>
            <a href="#skills">
              <FaCode className="icon" />
              <span>Habilidades</span>
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <FaPaintBrush className="icon" />
              <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a href="#experience">
              <FaBriefcase className="icon" />
              <span>Experiencia</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <FaEnvelope className="icon" />
              <span>Contacto</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <a href="https://www.linkedin.com/in/tob%C3%ADas-etchelet-66350575/" target="_blank" rel="noopener noreferrer" className="contact-btn">
          LinkedIn
        </a>
        <p className="copyright text-secondary">© 2025 Tobías Etchelet</p>
      </div>
    </div>
  );
};

export default Sidebar; 