import React, { useEffect, useState } from 'react';
import './BackgroundSlider.css';

const images = [
  '/Assets/Wellness1.jpeg',
  '/Assets/Wellness2.jpg',
  '/Assets/Wellness4.jpeg',
];

const BackgroundSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background-slider-container">
      {images.map((image, i) => (
        <div
          key={i}
          className={`background-slide ${i === index ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
};

export default BackgroundSlider;

