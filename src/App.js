import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="app">
      <div className="gradient-bg top-left"></div>
      <div className="gradient-bg bottom-right"></div>

      <div className="dashboard-container">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App; 