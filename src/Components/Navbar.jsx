import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style= {{ padding: '1rem', background: '#111', color: '#fff'}}>
            <Link to="/" style={{ marginRight: '1rem', color: '#fff'}}>Home</Link>
            <Link to="/log-meal" style={{ marginRight: '1rem', color: '#fff'}}>Log Meal</Link>
            <Link to="/log-workout" style={{ marginRight: '1rem', color: '#fff'}}>Log Workout</Link>
            <Link to="/journal" style={{ marginRight: '1rem', color: '#fff'}}>Journal</Link>
            <Link to="/progress" style={{ marginRight: '1rem', color: '#fff'}}>Progress</Link>
            <Link to="/community" style={{ marginRight: '1rem', color: '#fff'}}>Community</Link>
            <Link to="/profile" style={{ marginRight: '1rem', color: '#fff'}}>Profile</Link>
            <Link to="/settings" style={{ marginRight: '1rem', color: '#fff'}}>Settings</Link>
        </nav>
    );
};

export default Navbar;