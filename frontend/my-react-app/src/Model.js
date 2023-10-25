import React, { useState, useEffect, useRef } from 'react';
import './Upload.css';
import { useDarkMode } from './DarkModeContext';
import XLSXFileHandler from './XLSXFileHandler';
import CSVFileHandler from './CSVFileHandler';
import JSONfileHandler from './JSONfileHandler';

const Model = ({ updateForm }) => {
  const { isDarkMode } = useDarkMode();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModel, setSelectedModel] = useState(''); // State to store the selected model

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleModelSelect = (model) => {
    setSelectedModel(model); // Set the selected model when an item is clicked
    closeDropdown(); // Close the dropdown
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
      <div ref={dropdownRef} className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
        <button className="dropdown-button" onClick={toggleDropdown}>
          Model: {selectedModel || ''} &or;  {/* Display the selected model or 'Model' */}
        </button>
        <div className="dropdown-content">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="dropdown-item" onClick={() => handleModelSelect('Platinum XBRL NAIC')}>
            Platinum XBRL NAIC
          </div>
          <div className="dropdown-item" onClick={() => handleModelSelect('Asset NAIC Standard')}>
            Asset NAIC Standard
          </div>
          <div className="dropdown-item" onClick={() => handleModelSelect('Liability NAIC Standard')}>
            Liability NAIC Standard
          </div>
          {/* Add other dropdown items here */}
        </div>
      </div>
    </div>
  );
};

export default Model;