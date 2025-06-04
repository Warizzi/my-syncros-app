import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#111', color: '#fff' }}>
      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined} style={{ marginRight: '1rem', color: '#fff' }}>Home</NavLink>
      <NavLink to="/log-meal" className={({ isActive }) => isActive ? 'active' : undefined} style={{ marginRight: '1rem', color: '#fff' }}>Log Meal</NavLink>
      <NavLink to="/log-workout" className={({ isActive }) => isActive ? 'active' : undefined} style={{ marginRight: '1rem', color: '#fff' }}>Log Workout</NavLink>
      <NavLink to="/journal" className={({ isActive }) => isActive ? 'active' : undefined} style={{ marginRight: '1rem', color: '#fff' }}>Journal</NavLink>
      <NavLink to="/progress" className={({ isActive }) => isActive ? 'active' : undefined} style={{ marginRight: '1rem', color: '#fff' }}>Progress</NavLink>
      <NavLink to="/community" className={({ isActive }) => isActive ? 'active' : undefined} style={{ marginRight: '1rem', color: '#fff' }}>Community</NavLink>
      <NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : undefined} style={{ marginRight: '1rem', color: '#fff' }}>Profile</NavLink>
      <NavLink to="/settings" className={({ isActive }) => isActive ? 'active' : undefined} style={{ marginRight: '1rem', color: '#fff' }}>Settings</NavLink>
    </nav>
  );
};

export default Navbar;
