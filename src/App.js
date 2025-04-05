import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import {
  FiMessageSquare,
} from "react-icons/fi";

function App() {
  return (
    <div className="app">
      <div className="gradient-bg top-left"></div>
      <div className="gradient-bg bottom-right"></div>

      <div className="dashboard-container">
        <Sidebar />

        <div className="contacticonfixed">
          <a href="#contact">
            <FiMessageSquare size={60} />
          </a>
        </div>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
