import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Unseen() {
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
          src="assets/unseen/see-the-unseen-animation-1.mp4"
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
          See the unseen
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
          Infrared insight 
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
          Some advantages are hard to explain — until you feel them. In this immersive journey, we didn’t describe the difference. We made you experience it. Suddenly, what’s invisible becomes unforgettable.
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
         Let's prove your claim with a story
        </div>
        <div
          style={{
            fontFamily: 'Futura, "Futura-Medium", Arial, sans-serif',
            fontWeight: 500,
            color: '#7cfc00',
            fontSize: '2em',
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