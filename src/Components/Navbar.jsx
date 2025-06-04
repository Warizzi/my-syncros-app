import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-text">Syncros</span>
        <img
          src="/Assets/Syncros logo.png"
          alt="Syncros Logo"
          className="brand-logo"
        />
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/log-meal" onClick={closeMenu}>Log Meal</NavLink>
        <NavLink to="/log-workout" onClick={closeMenu}>Log Workout</NavLink>
        <NavLink to="/journal" onClick={closeMenu}>Journal</NavLink>
        <NavLink to="/progress" onClick={closeMenu}>Progress</NavLink>
        <NavLink to="/community" onClick={closeMenu}>Community</NavLink>
        <NavLink to="/profile" onClick={closeMenu}>Profile</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

