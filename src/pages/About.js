import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Abuot() {
  return (
    <div className="App" style={{ minHeight: '100vh', background: '#02152c' }}>
ßß

      <div style={{ padding: '48px 5vw', maxWidth: '90vw', width: '100%' }}>
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
          Turning Complexity into Connection
        </h1>

        <p
          style={{
            fontFamily: 'Futura, "Futura-Medium", Arial, sans-serif',
            fontWeight: 500,
            color: '#7cfc00',
            fontSize: '2em',
            margin: '16px 0 32px 0',
            lineHeight: 1.2,
            width: '100%',
            textAlign: 'left',
          }}
        >
        We specialize in transforming the highly technical world of engineering into powerful, accessible content. For 25+ years, we've collaborated with industry leaders to take concepts—from advanced sustainable materials to detailed schematics—and bring them vibrantly to life.
        </p>

        <div
          style={{
            fontFamily: 'Futura, Arial, sans-serif',
            fontWeight: 400,
            color: '#7cfc00',
            fontSize: '1.25em',
            marginBottom: '2rem',
            textAlign: 'left',
            width: '100%',
          }}
        >
        The fight for attention has never been tougher. When audiences are constantly bombarded by generic content, they instinctively swipe right past. They demand personalization, clarity, and instant relevance. If your complex subject matter feels stale, you've lost the opportunity to connect.
        </div>

        <div
          style={{
            fontFamily: 'Futura, "Futura-Medium", Arial, sans-serif',
            fontWeight: 400,
            color: '#7cfc00',
            fontSize: '2em',
            margin: '40px 0 16px 0',
            lineHeight: 1.1,
            textAlign: 'left',
          }}
        >
          Let’s build stories worth seeing
        </div>

        <div
          style={{
            fontFamily: 'Futura, "Futura-Medium", Arial, sans-serif',
            fontWeight: 500,
            color: '#7cfc00',
            fontSize: '1.6em',
            margin: '0 0 32px 0',
            textAlign: 'left',
          }}
        >
          <a href="mailto:salvatore.ciancio@thepoint.fi" style={{ color: '#7cfc00', textDecoration: 'underline' }}>
            salvatore.ciancio@thepoint.fi
          </a>
        </div>

        <Link to="/">
          <Button>Back to Landing Page</Button>
        </Link>
      </div>
    </div>
  );
};