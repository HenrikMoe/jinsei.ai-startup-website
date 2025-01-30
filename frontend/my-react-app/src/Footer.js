import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-title">Jinsei Corp:</div>

          <div>Team Implementation</div>
          <div>Cross Industry</div>
          <div>Intuitive Use</div>

          <div>CA, USA</div>
        </div>
        <div className="footer-section">
          <div className="footer-title"></div>
          <a href="https://github.com/HenrikMoe/Service-Infrastructure" style={{textDecoration: 'none', color: 'inherit'}}>
            <div>SaaS Details</div>
          </a>
          <div>outreach@jinsei.ai</div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 Jinsei Corp. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
