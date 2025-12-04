import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Alchemy() {
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
          src="assets/alchemy/the-alchemy-of-animation-1-high.mp4"
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
          The Alchemy of Animation
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
          From Lignin to Woodmer
        </p>
        // ...existing code...
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
          Innovation doesn’t always start in a lab — sometimes it starts in the forest. We turned raw, overlooked material into a narrative of transformation. A story not just of sustainability, but of reinvention.
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
            <img
              src="assets/alchemy/the-alchemy-of-animation-1.png"
              alt="Studio motion image 1"
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
              src="assets/alchemy/the-alchemy-of-animation-2.png"
              alt="Studio motion image 2"
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
              src="assets/alchemy/the-alchemy-of-animation-3.png"
              alt="Studio motion image 3"
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
              src="assets/alchemy/the-alchemy-of-animation-4.png"
              alt="Studio motion image 4"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', border: 'none', margin: 0, padding: 0 }}
            />
          </div>
        </section>

        {/* Call to Action Section */}
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
          Let's turn your raw idea into a powerful story
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
