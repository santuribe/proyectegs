// src/components/Carousel.tsx
"use client";

// src/components/Carousel.tsx
import React, { useState, useEffect } from 'react';

const images = [
  '/images/slide1.jpg',  // Cambia estas rutas a tus imágenes
  '/images/slide2.jpg',
  '/images/slide3.jpg',
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    />
  );
};

export default Carousel;
