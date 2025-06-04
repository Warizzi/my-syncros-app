import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import { AppProvider } from './Context/AppContext';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import LogMeal from './Pages/LogMeal';
import LogWorkout from './Pages/LogWorkout';
import Journal from './Pages/Journal';
import Progress from './Pages/Progress';
import Community from './Pages/Community';
import Profile from './Pages/Profile';
import Footer from './Components/Footer';

function App() {
  return (
    <AppProvider>
      <div classname="app-container">
        <Router>
          <Navbar />
          <div className="content">

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/log-meal" element={<LogMeal />} />
              <Route path="/log-workout" element={<LogWorkout />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/community" element={<Community />} />
              <Route path="/profile" element={<Profile />} />
              
            </Routes>
          </div>

          {/* other components */}
          <Footer />
        </Router>

      </div>


    </AppProvider>

  );
}

export default App;