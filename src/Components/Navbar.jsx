import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', padding: '1rem', background: '#111', color: '#fff', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '2rem' }}>
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00FFB3', marginRight: '0.5rem' }}>Syncros</span>
        <img
          src="/Assets/Syncros logo.png"
          alt="Syncros Logo"
          style={{ height: '30px', width: '30px', objectFit: 'contain' }}
        />
      </div>
      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined} style={{ marginRight: '1rem', color: '#fff' }}>Home</NavLink>
      <NavLink to="/log-meal" className={({ isActive }) => isActive ? 'active' : undefined} style={{ marginRight: '1rem', color: '#fff' }}>Log Meal</NavLink>
      <NavLink to="/log-workout" className={({ isActive }) => isActive ? 'active' : undefined} style={{ marginRight: '1rem', color: '#fff' }}>Log Workout</NavLink>
      <NavLink to="/journal" className={({ isActive }) => isActive ? 'active' : undefined} style={{ marginRight: '1rem', color: '#fff' }}>Journal</NavLink>
      <NavLink to="/progress" className={({ isActive }) => isActive ? 'active' : undefined} style={{ marginRight: '1rem', color: '#fff' }}>Progress</NavLink>
      <NavLink to="/community" className={({ isActive }) => isActive ? 'active' : undefined} style={{ marginRight: '1rem', color: '#fff' }}>Community</NavLink>
      <NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : undefined} style={{ marginRight: '1rem', color: '#fff' }}>Profile</NavLink>
     
    </nav>
  );
};

export default Navbar;
