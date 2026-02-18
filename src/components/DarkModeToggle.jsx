import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';
import '../styles/DarkModeToggle.scss';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(true); // Default to dark

  useEffect(() => {
    document.body.classList.toggle('light-mode', !isDark);
  }, [isDark]);

  const toggleMode = () => {
    setIsDark(!isDark);
  };

  return (
    <motion.button 
      className="dark-mode-toggle"
      onClick={toggleMode}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </motion.button>
  );
};

export default DarkModeToggle;