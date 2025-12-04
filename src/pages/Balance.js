import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Balance() {
  return (
    <div className="App" style={{ minHeight: '100vh', background: '#02152c' }}>
      <div
        style={{
          width: '100vw',
          height: '420px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <video
          src="assets/balance/the-art-of-balance-full-EN.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100vw',
            height: '420px',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>
      <div
        style={{
          padding: '48px 5vw',
          maxWidth: '90vw',
          width: '100%',
        }}
      >
        <h1
          style={{
            fontFamily: 'Futura, "Futura-Bold", Arial, sans-serif',
            fontWeight: 'bold',
            color: '#7cfc00',
            fontSize: '4em',
            margin: 0,
            lineHeight: 1.1,
            textAlign: 'left',
            letterSpacing: '0.1em',
          }}
        >
          The Art of Balance
        </h1>
        <p
          style={{
            fontFamily: 'Futura, "Futura-Medium", Arial, sans-serif',
            fontWeight: 500,
            color: '#7cfc00',
            fontSize: '2em',
            margin: '16px 0 32px 0',
            lineHeight: 1.2,
            maxWidth: '700px',
            textAlign: 'left',
            letterSpacing: '0.1em',
          }}
        >
          The legacy of Power
        </p>
        <div
          style={{
            fontFamily: 'Futura, Arial, sans-serif',
            fontWeight: 400,
            color: '#7cfc00',
            fontSize: '1.25em',
            marginBottom: '2rem',
            textAlign: 'left',
            maxWidth: 700,
          }}
        >
          Precision isn't always loud. It can be meditative, minimal, almost invisible. This piece bridges tradition and technology — showing that true mastery, in art or engineering, lies in balance.
        </div>  <div
          style={{
            fontFamily: 'Futura, "Futura-Medium", Arial, sans-serif',
            fontWeight: 400,
            color: '#7cfc00',
            fontSize: '2em', // Match "From Lignin to Woodmer"
            margin: '40px 0 16px 0',
            lineHeight: 1.1,
            textAlign: 'left',
            letterSpacing: '0.1em',
          }}
        >
         Let's make your performance poetic
        </div>
        <div
          style={{
            fontFamily: 'Futura, "Futura-Medium", Arial, sans-serif',
            fontWeight: 500,
            color: '#7cfc00',
            fontSize: '1em',
            margin: '0 0 32px 0',
            textAlign: 'left',
            letterSpacing: '0.1em',
          }}
        >
          <a href="mailto:savatore.ciancio@thepoint.fi" style={{ color: '#7cfc00', textDecoration: 'underline' }}>
            savatore.ciancio@thepoint.fi
          </a>
        </div>
        <Link to="/">
          <Button>Back to Landing Page</Button>
        </Link>
          </div>
    </div>
  );
}