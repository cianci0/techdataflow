import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './HeroPage.css';

/**
 * Props:
 * - image: string (image URL) or undefined
 * - video: string (video URL) or undefined
 * - headline: string
 * - subtitle: string
 * - body: string or React node
 */
export default function HeroPage({ image, video, headline, subtitle, body }) {
  return (
    <div className="hero-page-root">
      {video ? (
        <div className="hero-page-image">
          <video
            src={video}
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
      ) : image ? (
        <div
          className="hero-page-image"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ) : null}
      <div className="hero-page-content">
        <h1 className="hero-page-headline">{headline}</h1>
        <p className="hero-page-subtitle">{subtitle}</p>
        <div className="hero-page-body">{body}</div>
        <Link to="/">
          <Button>Back to Landing Page</Button>
        </Link>
      </div>
    </div>
  );
}