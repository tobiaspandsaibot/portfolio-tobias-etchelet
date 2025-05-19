import React, { useEffect, useRef } from "react";
import "./Sidebar.css";
import profileImage from "../assets/tobias-etchelet-4.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBriefcase } from "react-icons/fa";
import {
  FiActivity,
  FiBriefcase,
  FiCode,
  FiZap,
} from "react-icons/fi";
import { useLanguage } from "../contexts/LanguageContext";



// Registrar el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Sidebar = () => {
  const sidebarRef = useRef(null);
  const { getTranslation } = useLanguage();

  useEffect(() => {
    const sidebar = sidebarRef.current;
    const isMobile = window.innerWidth <= 1200;
    let sidebarTrigger = null;

    if (!isMobile) {
      sidebarTrigger = ScrollTrigger.create({
        trigger: sidebar,
        start: "top 12px",
        endTrigger: ".dashboard-container",
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
        id: "sidebarPin",
      });
    }

    // Limpieza al desmontar el componente
    return () => {
      if (sidebarTrigger) {
        sidebarTrigger.kill();
      }
    };
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
          <p>Web Developer & UX/UI Designer</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li>
            <a href="#skills">
              <FiActivity /> {getTranslation('skills')}
            </a>
          </li>
          <li>
            <a href="#software">
              <FiCode /> {getTranslation('software')}
            </a>
          </li>
          <div className="nav-links">
            <a href="#about-me" className="nav-link">
              <FiActivity className="nav-icon" />
              <span> {getTranslation('about_me')}</span>
            </a>
            <a href="#experience" className="nav-link">
              <FiBriefcase className="nav-icon" />
              <span> {getTranslation('experience')}</span>
            </a>
            <a href="#education" className="nav-link">
              <FiCode className="nav-icon" />
              <span> {getTranslation('education')}</span>
            </a>
            <a href="#ai-tools" className="nav-link">
              <FiZap className="nav-icon" />
              <span> {getTranslation('ai_tools')}</span>
            </a>
          </div>
          <li>
            <a href="#projects">
              <FiCode /> {getTranslation('projects')}
            </a>
          </li>
          <li>
            <a href="#uxui">
              <FaBriefcase /> {getTranslation('ux_ui_designs')}
            </a>
          </li>
        </ul>
      </nav>
      
    </div>
  );
};

export default Sidebar;
