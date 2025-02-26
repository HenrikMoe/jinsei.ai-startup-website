import React, { useState, useEffect } from 'react';
import './Header.css'; // Import the CSS file that contains your styles
import { Link } from 'react-router-dom';
import { useDarkMode } from './DarkModeContext';
import axios from 'axios';


const Header = ({ currentRoute, userInfo }) => {
  const [title] = useState('My Header');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const pdfUrl = `${process.env.PUBLIC_URL}/PTBO TECH's CryptoCount AI APP - TRANSACTION TO ACCOUNTING ENTRIES.pdf`;
  const pdfFileName = 'Jinsei-ai-Applied-Engine.pdf';

  const DownloadButton = ({ pdfUrl, pdfFileName }) => {
    const handleDownload = async () => {
      try {
        // Fetch the PDF file
        const response = await axios.get(pdfUrl, {
          responseType: 'blob',
        });

        // Create a Blob from the response data
        const blob = new Blob([response.data], { type: 'application/pdf' });

        // Create a download link
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', pdfFileName);

        // Append the link to the document
        document.body.appendChild(link);

        // Trigger the click event on the link
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);
      } catch (error) {
        console.error('Error downloading PDF:', error);
      }
    };

    return (
      <div onClick={handleDownload} className="button">
        Architecture White-Paper
      </div>
    );
  };

  const sourceButtons = [
    { label: 'About Jinsei.ai', url: '/about' },
    // { label: 'Consulting Timeline', url: 'https://jinsei.ai/timeline' },
    // { label: 'White-Paper', url: 'https://docs.google.com/document/d/1m_ZNJheDIbt9JHsljOIoZ6awDcaWswWgvlRDGKK3vSE/edit?usp=sharing' },
    // { label: 'Deck', url: 'https://drive.google.com/file/d/1JrjXCzGImy7K36S9duByjM5D7a4xpgCq/view?usp=sharing' },
    // { label: 'Architecture White-Paper', pdfUrl: pdfUrl, pdfFileName: pdfFileName }, // Pass PDF URL and file name as props
    { label: 'GitHub', url: 'https://github.com/HenrikMoe' },
    { label: 'Privacy', url: 'https://jinsei.ai/privacy' },
    { label: 'Service', url: 'https://jinsei.ai/tos' },
  ];

 //  <button className="button" onClick={toggleDarkMode}>
 //   {isDarkMode ? 'Light' : 'Dark'}
 // </button>

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };



  // Add an event listener to the entire document
  document.addEventListener("click", function (event) {
    const menuContainer = document.querySelector(".menu-container");
    const menuButton = document.querySelector(".menu-button");

    // Check if the click target is not inside the menu or menu button
    if (!menuContainer.contains(event.target) && event.target !== menuButton) {
      closeMenu();
    }
  });

  const handleScroll = () => {
    setScrollY(window.scrollY);
    if (window.scrollY > 30) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }
  };

  useEffect(() => {
    const handleNavigation = () => {
      closeMenu();
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handleNavigation);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  return (
    <div className={`header ${currentRoute === '/' ? 'homepage-header' : 'header'} ${isHeaderVisible ? '' : 'hidden'} ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className={` ${currentRoute === '/' ? 'homepage-header' : 'header'} ${isHeaderVisible ? '' : 'hidden'} ${isDarkMode ? 'dark-mode' : ''}`}>
        <div className={`title ${isDarkMode ? 'dark-mode-text' : ''}`}>
          <Link to="/" className={`title ${isDarkMode ? 'dark-mode-text' : ''}`}>
            <h1>jinsei.ai</h1>
          </Link>
          <div className={`menu-button ${isHeaderVisible ? '' : 'hidden'} ${isDarkMode ? 'dark-mode' : ''}`} onClick={toggleMenu}>
            ☰
          </div>
        </div>

        <div className={`menu-button2 ${isHeaderVisible ? '' : 'hidden'} ${isDarkMode ? 'dark-mode' : ''}`} onClick={toggleMenu} >
        <div className='cornerWrap'>
          {userInfo ? <div className={`title ${isHeaderVisible ? '' : 'hidden'} ${isDarkMode ? 'dark-mode' : ''}`}>
          <a target="_blank" lassName={`title5 ${isHeaderVisible ? '' : 'hidden'} ${isDarkMode ? 'dark-mode' : ''}`} href='https://www.youtube.com/@Jinsei-AI'><img className='socials' src={`${process.env.PUBLIC_URL}/youtube.png`} alt="f Image" /></a>
          <a target="_blank" lassName={`title5 ${isHeaderVisible ? '' : 'hidden'} ${isDarkMode ? 'dark-mode' : ''}`} href='https://www.linkedin.com/company/jinseiai'><img className='socials' src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="Your Image" /></a>
          <a target="_blank" lassName={`title5 ${isHeaderVisible ? '' : 'hidden'} ${isDarkMode ? 'dark-mode' : ''}`} href='https://twitter.com/jinseicorp'><img className='socials' src={`${process.env.PUBLIC_URL}/twitter-x.png`} alt="a Image" /></a>
          <a target="_blank" lassName={`title5 ${isHeaderVisible ? '' : 'hidden'} ${isDarkMode ? 'dark-mode' : ''}`} href='https://github.com/henrikmoe'><img className='socials' src={`${process.env.PUBLIC_URL}/github.png`} alt="f Image" /></a>


            <a target="_blank" className={`title16 ${isHeaderVisible ? '' : 'hidden'} ${isDarkMode ? 'dark-mode' : ''}`} >{userInfo.given_name} {userInfo.family_name}</a>
          </div>
          : <div className={`title5 ${isHeaderVisible ? '' : 'hidden'} ${isDarkMode ? 'dark-mode' : ''}`}>
            <a target="_blank" lassName={`title5 ${isHeaderVisible ? '' : 'hidden'} ${isDarkMode ? 'dark-mode' : ''}`} href='https://www.youtube.com/@Jinsei-AI'><img className='socials' src={`${process.env.PUBLIC_URL}/youtube.png`} alt="f Image" /></a>
            <a target="_blank" lassName={`title5 ${isHeaderVisible ? '' : 'hidden'} ${isDarkMode ? 'dark-mode' : ''}`} href='https://www.linkedin.com/company/jinseiai'><img className='socials' src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="Your Image" /></a>
            <a target="_blank" lassName={`title5 ${isHeaderVisible ? '' : 'hidden'} ${isDarkMode ? 'dark-mode' : ''}`} href='https://twitter.com/jinseicorp'><img className='socials' src={`${process.env.PUBLIC_URL}/twitter-x.png`} alt="a Image" /></a>
            <a target="_blank" lassName={`title5 ${isHeaderVisible ? '' : 'hidden'} ${isDarkMode ? 'dark-mode' : ''}`} href='https://github.com/henrikmoe'><img className='socials' src={`${process.env.PUBLIC_URL}/github.png`} alt="f Image" /></a>

          </div>}

          </div>
        </div>
      </div>
      <div className={`menu-container ${isMenuOpen ? 'open' : ''}`}>
        <span className="close-button" onClick={closeMenu}>
          ✕
        </span>
        {sourceButtons.map((button) => (
            <React.Fragment key={button.label}>
              {button.pdfUrl ? ( // If PDF URL is provided, render DownloadButton
                <DownloadButton pdfUrl={button.pdfUrl} pdfFileName={button.pdfFileName} />
              ) : (
                <Link
                  to={button.url}
                  onClick={closeMenu}
                  className="button"
                >
                  {button.label}
                </Link>
              )}
            </React.Fragment>
          ))}
      </div>
    </div>

  );
};

export default Header;
