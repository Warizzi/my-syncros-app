import React, { useEffect, useState } from 'react';
import './BackgroundSlider.css';

const images = [
  '/Assets/Wellness1.jpeg',
  '/Assets/Wellness2.jpg',
  '/Assets/Wellness3.jpeg',
  
]; // put your image paths here (you can use public folder)

const BackgroundSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 5000); // change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="background-slider"
      style={{ backgroundImage: `url(${images[index]})` }}
    ></div>

  );
};

export default BackgroundSlider;
