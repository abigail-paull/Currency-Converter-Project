import React, { useState, useEffect } from 'react';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import "./LightMode.css";

  const LightMode = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  // Toggle between light and dark mode
  const toggleMode = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
    document.body.className = newMode ? 'light-mode' : 'dark-mode';
    localStorage.setItem('theme', newMode ? 'light' : 'dark');
  };

  // Load saved theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const isLight = savedTheme === 'light';
    setIsLightMode(isLight);
    document.body.className = isLight ? 'light-mode' : 'dark-mode';
  }, []);

  return (
    <div className="mode-toggle" onClick={toggleMode}>
      {isLightMode ? (
        <MdLightMode  className='icon sun'/>

      ) : (
        <MdDarkMode className='icon moon' />
      )}
    </div>
  );
};

export default LightMode;
