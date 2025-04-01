import React, { useEffect, useState } from 'react';
import './VRExperience.css';

// Importaciones dinámicas de A-Frame
const loadAFrame = () => {
  // Cargar A-Frame solo cuando se necesite
  if (document.querySelector('script[src="https://aframe.io/releases/1.4.0/aframe.min.js"]')) {
    return Promise.resolve();
  }
  
  const aframeScript = document.createElement('script');
  aframeScript.src = 'https://aframe.io/releases/1.4.0/aframe.min.js';
  aframeScript.async = true;
  document.head.appendChild(aframeScript);

  return new Promise((resolve) => {
    aframeScript.onload = () => {
      resolve();
    };
  });
};

const VRExperience = ({ isActive }) => {
  const [vrExperienceLoaded, setVrExperienceLoaded] = useState(false);
  const [vrContent, setVrContent] = useState('');
  const [visible, setVisible] = useState(false);

  // Cargar el contenido de la experiencia VR
  useEffect(() => {
    const loadVRContent = async () => {
      try {
        // Si ya tienes tu archivo HTML de experiencia VR, puedes cargarlo así:
        const response = await fetch('/vr-experience.html');
        const html = await response.text();
        
        // Extraer solo la parte del a-scene
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const scene = doc.querySelector('a-scene');
        
        if (scene) {
          setVrContent(scene.outerHTML);
          setVrExperienceLoaded(true);
        } else {
          // Si no se encuentra una escena, usa el contenido predeterminado
          setVrContent(getDefaultVRContent());
          setVrExperienceLoaded(true);
        }
      } catch (error) {
        console.error('Error al cargar la experiencia VR:', error);
        // En caso de error, usar el contenido predeterminado
        setVrContent(getDefaultVRContent());
        setVrExperienceLoaded(true);
      }
    };

    if (isActive && !vrExperienceLoaded) {
      loadAFrame().then(() => {
        loadVRContent();
      });
    }
  }, [isActive, vrExperienceLoaded]);

  // Efecto para animar la entrada y salida
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 100); // Pequeño retraso para asegurar que la transición Matrix esté avanzada
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [isActive]);

  useEffect(() => {
    // Cuando el componente se activa, desactivar el scroll
    if (isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isActive]);

  const getDefaultVRContent = () => {
    return `
      <a-scene embedded>
        <a-sky color="#1A1A2E"></a-sky>
        <a-entity light="type: ambient; color: #BBB; intensity: 0.5"></a-entity>
        <a-entity light="type: directional; color: #FFF; intensity: 1" position="-1 1 2"></a-entity>
        
        <a-plane position="0 0 0" rotation="-90 0 0" width="20" height="20" color="#2A2A4A"></a-plane>
        
        <a-entity position="0 1.6 -3">
          <a-text value="Portfolio de Tobías Etchelet" color="#FFF" align="center" width="6" position="0 1.5 0"></a-text>
          <a-text value="Diseñador Web & UX/UI" color="#5D54C7" align="center" width="4" position="0 1.2 0"></a-text>
        </a-entity>
        
        <a-entity camera look-controls wasd-controls position="0 1.6 0"></a-entity>
      </a-scene>
    `;
  };

  // Si no está activo o el contenido no está cargado, no renderizar nada
  if (!isActive) return null;

  return (
    <div className={`vr-experience-container ${visible ? 'visible' : ''}`}>
      <div className="vr-content" dangerouslySetInnerHTML={{ __html: vrContent }} />
    </div>
  );
};

export default VRExperience; 