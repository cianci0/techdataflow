import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#02152c',
        color: '#7cfc00',
        fontFamily: 'Futura, Arial, sans-serif',
        padding: '48px 0', // more vertical padding
        boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
          padding: '1vw 4vw 0 5vw', // more horizontal padding
        }}
      >
        {/* Desktop 3-column layout, mobile stacked */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '32px',
          }}
        >
          {/* Left column: Logo, address, contact */}
          <div style={{ flex: 1, minWidth: 220, textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.3em', marginBottom: '18px' }}>
              TECHDATAFLOW | <span style={{ color: '#fff' }}></span>THE POINT
            </div>
            <div style={{ fontSize: '1.4em', opacity: 0.8, marginBottom: '12px' }}>
              Albertinkatu 29<br />
              00180 Helsinki
            </div>
            <div style={{ fontSize: '1.4em' }}>
              <a href="mailto:salvatore.ciancio@thepoint.fi" style={{ color: '#7cfc00', textDecoration: 'underline', fontSize: '1.1em' }}>
                salvatore.ciancio@thepoint.fi
              </a>
            </div>
          </div>
          {/* Center column: Quick links horizontal */}
          <div style={{
            flex: 1,
            minWidth: 220,
            textAlign: 'left',
            alignSelf: 'flex-start',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            gap: '32px',
            paddingTop: '0',
          }}>
          </div>
          {/* Right column: Social icons */}
          <div style={{
            flex: 0,
            minWidth: 220,
            textAlign: 'right',
            alignSelf: 'flex-start',
            display: '',
            flexDirection: 'row',
            gap: '24px',
            paddingTop: '0',
          }}>
            <a href="https://www.linkedin.com/showcase/tech-data-flow/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              style={{
                display: 'inline-block',
                transition: 'transform 0.2s',
                verticalAlign: 'middle',
                marginRight: '12px',
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.15)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <svg width="42" height="42" fill="none" stroke="#7cfc00" strokeWidth="2.5" viewBox="0 0 24 24"
                style={{ verticalAlign: 'middle', display: 'inline-block' }}>
                <rect x="2" y="2" width="20" height="20" rx="6" stroke="#7cfc00" fill="none" />
                <path d="M7 10v6M7 7v.01M12 10v6m0-6c0-1.1.9-2 2-2s2 .9 2 2v6"
                  stroke="#7cfc00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </a>
            <a href="https://instagram.com/techdataflow" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              style={{
                display: 'inline-block',
                transition: 'transform 0.2s',
                verticalAlign: 'middle',
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.15)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <svg width="42" height="42" fill="none" stroke="#7cfc00" strokeWidth="2.5" viewBox="0 0 24 24"
                style={{ verticalAlign: 'middle', display: 'inline-block' }}>
                <rect x="2" y="2" width="20" height="20" rx="6" stroke="#7cfc00" fill="none" />
                <circle cx="12" cy="12" r="5" stroke="#7cfc00" />
                <circle cx="17" cy="7" r="1.5" stroke="#7cfc00" />
              </svg>
            </a>
          </div>
        </div>
        {/* Copyright */}
        <div style={{
          marginTop: '32px',
          fontSize: '1.3em',
          letterSpacing: '0.04em',
          textAlign: 'right',
          opacity: 0.8,
        }}>
          &copy; {new Date().getFullYear()} TECHDATAFLOW | THE POINT | All rights reserved
        </div>
      </div>
    </footer>
  );
}