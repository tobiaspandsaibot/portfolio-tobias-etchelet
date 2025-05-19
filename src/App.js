import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import VRExperience from "./components/VRExperience";
import LanguageSelector from "./components/LanguageSelector";
import InteractiveBackground from "./components/InteractiveBackground";
import "./components/InteractiveBackground.css";
import { FiMessageSquare, FiGlobe } from "react-icons/fi";
import { lockScroll, unlockScroll } from "./components/scrollControl";
import { useLanguage } from "./contexts/LanguageContext";

function App() {
  const [isVRActive, setIsVRActive] = useState(false);
  const [isInteractiveBackgroundMounted, setIsInteractiveBackgroundMounted] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);
  const { language, getTranslation } = useLanguage();

  useEffect(() => {
    if (isVRActive) {
      lockScroll();
      setIsInteractiveBackgroundMounted(false);
    } else {
      unlockScroll();
      setIsInteractiveBackgroundMounted(true);
    }

    return () => {
      unlockScroll();
    };
  }, [isVRActive]);

  useEffect(() => {
    setIsInitialized(true);
    return () => {
      setIsInitialized(false);
    };
  }, []);

  const toggleVR = () => {
    setIsVRActive((prev) => !prev);
  };

  return (
    <div className={`app ${isVRActive ? "vr-mode" : ""}`} data-language={language}>
      {isInitialized ? (
        <>
          <LanguageSelector />
          
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
        <FiGlobe size={30} />
        <span>{getTranslation(isVRActive ? "exitVR" : "enterVR")}</span>
      </button>

      {isVRActive && (
        <VRExperience isActive={isVRActive} onExit={() => setIsVRActive(false)} />
      )}
        </>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
}

export default App;
