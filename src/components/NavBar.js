import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './NavBar.css';

const heroPages = [
  { id: 'motion', label: 'Motion', path: '/motion' },
  { id: 'alchemy', label: 'Alchemy', path: '/alchemy' },
  { id: 'balance', label: 'Balance', path: '/balance' },
  { id: 'unseen', label: 'Unseen', path: '/unseen' },
  { id: 'configuring', label: 'Configuring', path: '/configuring' },
  { id: 'isometric', label: 'Isometric', path: '/isometric' },
];

const navBtnStyle = {
  width: 120,
  height: 72,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.1em',
  padding: 0,
  boxShadow: 'none',
  border: 'none',
};

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [isWide, setIsWide] = useState(true);

  useEffect(() => {
    const handleScroll = () => setAtTop(window.scrollY === 0);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsWide(window.innerWidth >= 600);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const HoverButton = ({ children, style = {}, ...props }) => {
    const [hover, setHover] = useState(false);
    const baseOpacity = style.opacity != null ? style.opacity : 1;
    return (
      <Button
        {...props}
        style={{
          ...style,
          opacity: hover ? 1 : baseOpacity,
          backgroundColor: hover ? '#7cfc00' : (style.backgroundColor || 'transparent'),
          transition: 'opacity 150ms ease, background-color 150ms ease',
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {children}
      </Button>
    );
  };

  return (
    <nav
      className={`tdf-navbar${atTop ? ' tdf-navbar-top' : ''}`}
      style={{ backgroundColor: 'rgb(2, 21, 44)' }}
    >
      <div className="tdf-navbar-left">
        <Link to="/" className="tdf-logo">
          <img src="assets/Techdataflow logo good_Techdataflow green.png" alt="Logo" style={{ height: 40 }} />
        </Link>
      </div>
      <div className="tdf-navbar-right">
        {isWide && (
          <div className="tdf-accordion">
            <Button style={navBtnStyle} onClick={() => setOpen((o) => !o)}>
              Pages
            </Button>
            {open && (
              <div className="tdf-accordion-menu">
                {heroPages.map(page => (
                  <Link
                    key={page.id}
                    to={page.path}
                    className="tdf-accordion-link"
                    onClick={() => setOpen(false)}
                  >
                    <HoverButton style={{ ...navBtnStyle, height: '60px', margin: 0, opacity: 0.9, backgroundColor: 'white' }}>
                      {page.label}
                    </HoverButton>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
        <Link to="/about">
          <Button style={navBtnStyle}>About Us</Button>
        </Link>
      </div>
    </nav>
  );
}