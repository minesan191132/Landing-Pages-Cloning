// src/pages/LandingPage.jsx
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import RegulatedEnvironments from './RegulatedEnvironments';

// Nhớ import file CSS toàn cục nếu bạn chưa import ở index.js
import '../styles/globals.scss'; 

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Hero />
      <Features />
      <Benefits />
      <RegulatedEnvironments />
    </div>
  );
};

export default LandingPage;