import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Motion from './pages/Motion';
import Alchemy from './pages/Alchemy';
import Balance from './pages/Balance';
import Unseen from './pages/Unseen';
import Configuring from './pages/Configuring';
import Isometric from './pages/Isometric';
import NavBar from './components/NavBar';
import Button from './components/Button';
import Footer from './components/Footer'; // <-- Import Footer
import About  from './pages/About';
import './HeroSection.css';
import './App.css';

const heroPages = [
  {
    id: 'motion',
    headline: 'Everything begins with motion',
    subtitle: 'Techadaflow, where creativity starts — in the mechanics of meaning',
    image: '/montaggio1ok.jpg',

    video: 'assets/motion/everything-start-with-motion-inside.mp4',
    path: '/motion',
  },
  {
    id: 'alchemy',
    headline: 'The alchemy of animation',
    subtitle: 'What happens when waste becomes wonder?',
    video: 'assets/alchemy/the-alchemy-of-animation-intro.mp4',
    path: '/alchemy',
  },
  {
    id: 'balance',
    headline: 'The art of balance',
    subtitle: 'Can performance be poetic?',
    video: 'assets/balance/the-art-of-balance-short.mp4',
    path: '/balance',
  },
  {
    id: 'unseen',
    headline: 'See the unseen',
    subtitle: 'How do you prove a claim without saying a word?',
    video: 'assets/unseen/see-the-unseen-animation-1.mp4',
    path: '/unseen',
  },
  {
    id: 'configuring',
    headline: 'Configuring innovation',
    subtitle: 'What if technical clarity could feel intuitive?',
    image: '/abcd.png',
    path: '/configuring',
  },
  {
    id: 'isometric',
    headline: 'Isometric ingenuity',
    subtitle: 'What if simplicity could tell your whole story?',
    video: 'assets/isometric/isometric-ingenuity-animation-1.mp4',
    path: '/isometric',
  },
];

function LandingPage() {
  return (
    <div className="App" style={{ padding: 0, margin: 0, fontFamily: 'Roboto, Arial, sans-serif', width: '100vw', minHeight: '100vh' }}>
      {heroPages.map((hero) => (
        <section
          key={hero.id}
          className="hero-section"
          style={
            hero.video
              ? { background: 'none' }
              : { backgroundImage: hero.image ? `url(${hero.image})` : undefined }
          }
        >
          {hero.video && (
            <video
              src={hero.video}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100vw',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                left: 0,
                top: 0,
                zIndex: 0,
              }}
            />
          )}
          <div
            className="hero-content"
            style={{
              position: hero.video ? 'relative' : 'static',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start', // keep stacked and left-aligned
            }}
          >
            <h2
              style={{
                display: 'inline-block', // shrink-wrap to text width
                padding: 16,
                backgroundColor: 'rgba(2, 21, 44, 0.5)',
                margin: 0,
              }}
              className="hero-headline"
            >
              {hero.headline}
            </h2>
            <p
              style={{
                display: 'inline-block', // shrink-wrap to text width
                marginTop: '16px',
                padding: 8,
                paddingLeft: 16,
                backgroundColor: 'rgba(2, 21, 44, 0.5)',
              }}
              className="hero-subtitle"
            >
              {hero.subtitle}
            </p>
            <Link to={hero.path}>
              <Button style={{ marginTop: '-16px' }}>Go to {hero.headline}</Button>
            </Link>
          </div>
        </section>
      ))} 
    </div>
  );
}

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/motion" element={<Motion />} />
        <Route path="/alchemy" element={<Alchemy />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/unseen" element={<Unseen />} />
        <Route path="/configuring" element={<Configuring />} />
        <Route path="/isometric" element={<Isometric />} />
        <Route path="/about" element={<About />} />
        {/* About Us page can be added here in the future */}
      </Routes>
      <Footer /> {/* Footer appears on all pages */}
    </Router>
  );
}

export default App;