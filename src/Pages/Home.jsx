import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../Components/LoadingSpinner';
import './Home.css'; 

const Home = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="home">
      {/* Hero section */}
      <section className="hero">
        <h1>Welcome to <span className="syncros-brand">Syncros</span></h1>
        <p>Your personal space to track meals, workouts, and growth.</p>
        <button onClick={() => navigate('/log-meal')} className="cta-btn">Start Logging</button>
      </section>

      {/* Feature Highlights */}
      <section className="features">
        <h2>What You Can Do</h2>
        <div className="feature-grid">
          <div className="feature-card">🍽️ Log Meals</div>
          <div className="feature-card">💪 Track Workouts</div>
          <div className="feature-card">📖 Journal Progress</div>
          <div className="feature-card">🌍 Join the Community</div>
        </div>
      </section>

      {/* Affirmation */}
      <section className="affirmation">
        <blockquote>"At our lowest moments, we are capable of the greatest change!"</blockquote>
      </section>

      {/* Call to Action */}
      <section className="quick-links">
        <h3>Jump Back In</h3>
        <div className="link-buttons">
          <button onClick={() => navigate('/progress')}>Check Progress</button>
          <button onClick={() => navigate('/community')}>Visit Community</button>
          <button onClick={() => navigate('/journal')}>Write in Journal</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
