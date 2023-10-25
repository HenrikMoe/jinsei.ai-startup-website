// Popup.js
import React, { useState, useEffect, useRef } from 'react';
import './Popup.css';
import { useDarkMode } from './DarkModeContext';
import XLSXFileHandler from './XLSXFileHandler';
import CSVFileHandler from './CSVFileHandler'
import JSONfileHandler from './JSONfileHandler'


const Project = ({ onFileUpload }) => {
  const { isDarkMode } = useDarkMode();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dropdownRef = useRef(null);


  // Function to close the dropdown.
const closeDropdown = () => {
  setIsDropdownOpen(false);
};

    useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`popup-container ${isDarkMode ? 'dark-mode' : ''}`}>
    <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        Project &or;
      </button>
      <div className="dropdown-content">
        <XLSXFileHandler  />
        <CSVFileHandler />
        <JSONfileHandler />
        {/* Add other dropdown items here */}
      </div>
    </div>
    </div>
  );
};

export default Project;
