import React, { useLayoutEffect, useState } from 'react';
import api from './api';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';
import { useTranslation } from 'react-i18next';
import { useDarkMode } from './DarkModeContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  useSpringRef,
  animated,
  useTransition,
  useSpring,
} from '@react-spring/web';
import styles from './styles.module.css';
import SpaceForce from './SpaceForce.png'; // Adjust path if in src/assets/

function Homepage() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const pdfUrl = `${process.env.PUBLIC_URL}/Jinsei-ai.pdf`;
  const pdfFileName = 'Jinsei-ai.pdf';

  const DownloadButton = ({ pdfUrl, pdfFileName }) => {
    const handleDownload = async () => {
      try {
        const response = await axios.get(pdfUrl, {
          responseType: 'blob',
        });
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', pdfFileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error('Error downloading PDF:', error);
      }
    };

    return (
      <button className={`prototype-buttonw ${isDarkMode ? 'dark-mode-button' : ''}`} onClick={handleDownload}>
        Download Use Case
      </button>
    );
  };

  const handleClick = async () => {
    try {
      const response = await fetch(api.someRoute);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error('Error:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLoginSuccess = (credentialResponse) => {
    console.log('Logged in successfully:', credentialResponse);
    const userEmail = credentialResponse.email;
    console.log(userEmail);
    if (userEmail) {
      console.log('User email:', userEmail);
    }
    navigate('/prototype');
  };

  const handlePrototypeClick = () => {
    navigate('/prototype');
  };

  const handleTimelineClick = () => {
    navigate('/timeline');
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log(i18n);
  };

  const youtubeLink = 'https://youtu.be/raVPHTartEc';

  const handlePrototypeClick2 = () => {
    window.open(youtubeLink, '_blank');
  };

  const IMAGES = [
    'https://images.squarespace-cdn.com/content/v1/5c77350965a707ed1710a1bc/1592330659753-70M66LGEPXFTQ8S716MX/Generative+Art+by+Mark+Stock+-+Gyre+35700.jpg',
    'https://images.squarespace-cdn.com/content/v1/5c77350965a707ed1710a1bc/1592330659753-70M66LGEPXFTQ8S716MX/Generative+Art+by+Mark+Stock+-+Gyre+35700.jpg',
  ];

  const App = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const springApi = useSpringRef();

    const transitions = useTransition(activeIndex, {
      from: {
        clipPath: 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)',
      },
      enter: {
        clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
      },
      leave: {
        clipPath: 'polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)',
      },
      onRest: (_springs, _ctrl, item) => {
        if (activeIndex === item) {
          setActiveIndex(activeIndex === IMAGES.length - 1 ? 0 : activeIndex + 1);
        }
      },
      exitBeforeEnter: true,
      config: {
        duration: 15000,
      },
      delay: 1000,
      ref: springApi,
    });

    const springs = useSpring({
      from: {
        strokeDashoffset: 120,
      },
      to: {
        strokeDashoffset: 0,
      },
      config: {
        duration: 11000,
      },
      loop: true,
      ref: springApi,
    });

    useLayoutEffect(() => {
      springApi.start();
    }, [activeIndex]);

    return (
      <div className={styles.container}>
        <div className={styles.container__inner}>
          {transitions((springs, item) => (
            <animated.div className={styles.img__container} style={springs}>
              <img src={IMAGES[item]} />
            </animated.div>
          ))}
          <div className={styles.ticker}>
            <div />
            <animated.svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              style={springs}>
              <path d="M19.9999 38.5001C17.5704 38.5001 15.1648 38.0216 12.9203 37.0919C10.6758 36.1622 8.63633 34.7995 6.91845 33.0816C5.20058 31.3638 3.83788 29.3243 2.90817 27.0798C1.97846 24.8353 1.49995 22.4296 1.49995 20.0002C1.49995 17.5707 1.97846 15.1651 2.90817 12.9206C3.83788 10.6761 5.20058 8.63663 6.91846 6.91875C8.63634 5.20087 10.6758 3.83818 12.9203 2.90847C15.1648 1.97876 17.5705 1.50024 19.9999 1.50024C22.4293 1.50024 24.835 1.97876 27.0795 2.90847C29.324 3.83818 31.3635 5.20088 33.0813 6.91876C34.7992 8.63663 36.1619 10.6761 37.0916 12.9206C38.0213 15.1651 38.4998 17.5707 38.4998 20.0002C38.4998 22.4296 38.0213 24.8353 37.0916 27.0798C36.1619 29.3243 34.7992 31.3638 33.0813 33.0816C31.3635 34.7995 29.324 36.1622 27.0795 37.0919C24.835 38.0216 22.4293 38.5001 19.9999 38.5001L19.9999 38.5001Z" />
            </animated.svg>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`homepage-container ${isDarkMode ? 'dark-mode1' : ''}`}>
    

      {/* Only the new SpaceForce Link with blue outer and white inner background */}
      <>
      {/* Inline CSS for mobile-specific styling */}
      <style>
        {`
          @media (max-width: 768px) {
            .mobile-margin-adjust {
              margin-left: 15px !important;
            }
            .mobile-logo-shrink {
              width: 112px !important;
              height: 112px !important;
            }
          }
        `}
      </style>

      <Link
        to="/SpaceForce"
        style={{
          display: 'block',
          backgroundColor: 'white',
          padding: '90px',
          marginTop: '130px',
          borderRadius: '5px',
          textDecoration: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            padding: '15px 25px',
            fontFamily: 'Arial, sans-serif',
            fontSize: '22px',
            color: '#000080',
            borderRadius: '5px',
          }}
        >
          <img
            src={SpaceForce}
            alt="SpaceForce"
            className="mobile-logo-shrink"
            style={{ width: '160px', height: '160px', marginRight: '15px' }}
          />
          <span style={{ fontSize: '28px' }}>x</span>
          <span
            className="mobile-margin-adjust"
            style={{ marginLeft: '40px', fontSize: '38px', fontWeight: 'bold' }}
          >
            jinsei.ai
          </span>
        </div>
      </Link>
    </>

    <div className={styles.container} style={{ height: '500px' }}>
        <Link
          to="/activedemo"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: 'red',
            color: 'white',
            fontFamily: 'sans-serif',
            textDecoration: 'none',
            border: 'none',
            marginTop: '250px',
            fontSize: '40px',
            borderRadius: 0,
            zIndex: '1',
            cursor: 'pointer',
            position: 'relative',
            transition: 'all 0.2s ease-in-out',
          }}
        >
          Active Demo
          <div style={{
            position: 'absolute',
            bottom: '-100px',
            right: '-15px',
            width: '280px',
            height: '100px',
            backgroundColor: 'rgb(208, 208, 208)',
            clipPath: 'polygon(0 0, 100% 0, 100% 50%)',
            mixBlendMode: 'normal',
          }}/>
          <div style={{
            position: 'absolute',
            bottom: '-15px',
            right: '-40px',
            width: '40px',
            height: '80px',
            backgroundColor: 'rgb(208, 208, 208)',
            clipPath: 'polygon(0 0, 0 100%, 90% 100%)',
            zIndex: '0',
            mixBlendMode: 'normal',
          }}/>
        </Link>
        {/* Only triangles here, tied to Active Demo */}
        
      </div>

      <div style={{ marginTop: '300px', marginBottom: '0px' }}></div>
      <div className={styles.overlayContainer}>
        <div className={`arriving-text ${isDarkMode ? 'dark-mode-text' : ''}`}></div>
      </div>
    </div>
  );
}



const mediaQueries = {
  '@media (max-width: 600px)': {
    bottomRightTriangle: {
      bottom: '-150px',
      right: '10px',
      width: '200px',
      height: '60px',
    },
    rightTriangle: {
      bottom: '-120px',
      right: '5px',
      width: '20px',
      height: '200px',
    },
  },
};

Object.keys(mediaQueries).forEach((media) => {
  const stylesMedia = mediaQueries[media];
  Object.keys(stylesMedia).forEach((key) => {
    styles[key] = { ...styles[key], ...stylesMedia[key] };
  });
});

export default Homepage;