import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Isometric() {
  const [isNarrow, setIsNarrow] = React.useState(typeof window !== 'undefined' ? window.innerWidth < 900 : false);
  
  React.useEffect(() => {
    function handleResize() {
    setIsNarrow(window.innerWidth < 900);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
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
      src="assets/isometric/isometric-ingenuity-animation-2.mp4"
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
      fontSize: '3em',
      margin: 0,
      lineHeight: 1.1,
      textAlign: 'left',
      letterSpacing: '0.1em',
      }}
    >
      Isometric ingenuity
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
     Goodbye gearbox. Hello simplicity
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
      We stripped it back to the essentials. Through crisp isometric animation, we contrasted solid rotor technology with traditional motors. No gearbox. No ambiguity. Just a bold visual statement that makes engineering clarity feel effortless.
     </div>  
    <section
      style={{
      display: 'flex',
      gap: 0,
      margin: '72px 0 72px 0',
      alignItems: 'stretch',
      flexWrap: 'wrap',
      }}
    >
      <div
      style={{
        flexBasis: isNarrow ? '50%' : '25%',
        flexGrow: 1,
        flexShrink: 1,
        minWidth: 0,
        aspectRatio: '1 / 1',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      }}
      >
      <video
        src="assets/isometric/isometric-ingenuity-animation-1.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Studio motion loop 1"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', border: 'none', margin: 0, padding: 0 }}
      />
      </div>

      <div
      style={{
        flexBasis: isNarrow ? '50%' : '25%',
        flexGrow: 1,
        flexShrink: 1,
        minWidth: 0,
        aspectRatio: '1 / 1',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      }}
      >
      <img
        src="assets/isometric/isometric-ingenuity-5.png"
        alt="Compressor assembly still"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', border: 'none', margin: 0, padding: 0 }}
      />
      </div>

      <div
      style={{
        flexBasis: isNarrow ? '50%' : '25%',
        flexGrow: 1,
        flexShrink: 1,
        minWidth: 0,
        aspectRatio: '1 / 1',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      }}
      >
      <video
        src="/assets/isometric/Isometric-5.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Studio motion loop 3"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', border: 'none', margin: 0, padding: 0 }}
      />
      </div>

      <div
      style={{
        flexBasis: isNarrow ? '50%' : '25%',
        flexGrow: 1,
        flexShrink: 1,
        minWidth: 0,
        aspectRatio: '1 / 1',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      }}
      >
      <img
        src="assets/isometric/Isometric-unseen-2.png"
        alt="Turntable still"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', border: 'none', margin: 0, padding: 0 }}
      />
      </div>
    </section>
    <div
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
    Let's simplify your whole story
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
