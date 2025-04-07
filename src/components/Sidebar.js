import React, { useEffect, useRef } from "react";
import "./Sidebar.css";
import profileImage from "../assets/tobias-etchelet.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBriefcase } from "react-icons/fa";
import {
  FiActivity,
  FiBriefcase,
  FiCode,
} from "react-icons/fi";



// Registrar el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Sidebar = () => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    const isMobile = window.innerWidth <= 1200;

    if (!isMobile) {
      const sidebarTrigger = ScrollTrigger.create({
        trigger: sidebar,
        start: "top 12px",
        endTrigger: ".dashboard-container",
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
        id: "sidebarPin",
      });

      // Limpieza al desmontar el componente
      return () => {
        sidebarTrigger.kill();
      };
    }
  }, []);

  return (
    <div className="sidebar glass-card" ref={sidebarRef}>
      <div className="profile">
        <div className="avatar">
          <a href="#dashboard-container">
            <img src={profileImage} alt="Tobias Etchelet" />
          </a>
        </div>
        <div className="name">
          <h2>Tobias Etchelet</h2>
          <p>Diseñador Web & UX/UI</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li>
            <a href="#skills">
              <FiActivity /> Habilidades
            </a>
          </li>
          <li>
            <a href="#software">
              <FiCode /> Software
            </a>
          </li>
          <li>
            <a href="#projects">
              <FiCode /> Proyectos
            </a>
          </li>
          <li>
            <a href="#uxui">
              <FaBriefcase /> Diseños UX/UI
            </a>
          </li>
          <li>
            <a href="#education">
              <FiBriefcase /> Educación
            </a>
          </li>
          <li>
            <a href="#experience">
              <FiActivity /> Experiencia
            </a>
          </li>
        </ul>
      </nav>
      
    </div>
  );
};

export default Sidebar;
