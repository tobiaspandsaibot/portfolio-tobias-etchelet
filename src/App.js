import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import VRExperience from "./components/VRExperience";
import { FiMessageSquare, FiGlobe } from "react-icons/fi";
import { lockScroll, unlockScroll } from "./components/scrollControl";

function App() {
  const [isVRActive, setIsVRActive] = useState(false);

  useEffect(() => {
    if (isVRActive) {
      lockScroll();
    } else {
      unlockScroll();
    }

    // Cleanup si se desmonta el componente mientras VR está activo
    return () => {
      unlockScroll();
    };
  }, [isVRActive]);

  const toggleVR = () => {
    setIsVRActive((prev) => !prev);
  };

  return (
    <div className={`app ${isVRActive ? "vr-mode" : ""}`}>
      <div className="gradient-bg top-left"></div>
      <div className="gradient-bg bottom-right"></div>

      <div className="dashboard-container" id="dashboard-container">
        <Sidebar />

        <div className="contacticonfixed">
          <a href="#contact">
            <FiMessageSquare size={60} />
          </a>
        </div>
        <Dashboard />
      </div>

      <button className="vr-toggle-button" onClick={toggleVR}>
        <FiGlobe size={60} />
        <span>{isVRActive ? "Salir de VR" : "Entrar a VR"}</span>
      </button>

      {isVRActive && (
        <VRExperience isActive={isVRActive} onExit={() => setIsVRActive(false)} />
      )}
    </div>
  );
}

export default App;
