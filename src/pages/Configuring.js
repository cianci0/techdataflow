import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Configuring() {
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
          backgroundImage: `url(/abcd.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
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
          Configuring innovation
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
          Solutions at a glance
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
          Complex systems don’t have to feel complex. We created a visual language that speaks possibility — a clear, structured view into a world of precision-engineered options.
        </div>  <div
          style={{
            fontFamily: 'Futura, "Futura-Medium", Arial, sans-serif',
            fontWeight: 400,
            color: '#7cfc00',
            fontSize: '2em', // Match "Configuring innovation"
            margin: '40px 0 16px 0',
            lineHeight: 1.1,
            textAlign: 'left',
            letterSpacing: '0.1em',
          }}
        >

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
              src="assets/configuring/table-4.png"
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
              src="assets/configuring/table-9.png"
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
              src="assets/configuring/table-7.png"
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
              src="assets/configuring/table-5.png"
              alt="Studio motion image 4"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', border: 'none', margin: 0, padding: 0 }}
            />
          </div>
        </section>

        Let's make your complexity feel intuitive
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
          <a href="mailto:info@creativeflow.com" style={{ color: '#7cfc00', textDecoration: 'underline' }}>
            info@creativeflow.com
          </a>
        </div>
        <Link to="/">
          <Button>Back to Landing Page</Button>
        </Link>
      </div>
    </div>
  );
}