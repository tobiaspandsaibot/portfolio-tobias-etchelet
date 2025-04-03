import React, { useEffect, useRef } from 'react';
import './Sidebar.css';
import profileImage from '../assets/tobias-etchelet.jpg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Sidebar = () => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    
    const sidebarTrigger = ScrollTrigger.create({
      trigger: sidebar,
      start: 'top 12px',
      endTrigger: '.dashboard-container',
      end: 'bottom bottom',
      pin: true,
      pinSpacing: false,
      anticipatePin: 1,
      id: 'sidebarPin'
    });

    // Limpieza al desmontar el componente
    return () => {
      sidebarTrigger.kill();
    };
  }, []);

  return (
    <div className="sidebar glass-card" ref={sidebarRef}>
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