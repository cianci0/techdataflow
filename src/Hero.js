import React from 'react';
import { Link } from 'react-router-dom';

// Data for all hero sections
export const heroSections = [
  {
    id: 'hero1',
    headline: 'Everything begins with motion',
    subtitle: 'Techadaflow, where creativity starts — in the mechanics of meaning',
    image: '/montaggio1ok.jpg',
  },
  {
    id: 'hero2',
    headline: 'The alchemy of animation',
    subtitle: 'What happens when waste becomes wonder?',
    image: '/montaggio1ok.jpg',
  },
  {
    id: 'hero3',
    headline: 'The art of balance',
    subtitle: 'Can performance be poetic?',
    image: '',
  },
  {
    id: 'hero4',
    headline: 'See the unseen',
    subtitle: 'How do you prove a claim without saying a word?',
    image: '/montaggio1ok.jpg',
  },
  {
    id: 'hero5',
    headline: 'Configuring innovation',
    subtitle: 'What if technical clarity could feel intuitive?',
    image: '/montaggio1ok.jpg',
  },
  {
    id: 'hero6',
    headline: 'Isometric ingenuity',
    subtitle: 'What if simplicity could tell your whole story?',
    image: '/montaggio1ok.jpg',
  },
];

// Reusable template for hero pages
export function HeroPageTemplate({ headline, subtitle }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="hero-page-headline">
          {headline}
        </h1>
        <p className="hero-page-subtitle">
          {subtitle}
        </p>
        <Link to="/">
          <button>Back to Landing Page</button>
        </Link>
      </header>
    </div>
  );
}