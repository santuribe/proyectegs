// src/components/Carousel.tsx
// src/components/Carousel.tsx
"use client";

import React, { useState, useEffect } from 'react';
import '../styles/carousel.css'; // Importar el archivo CSS

const images = [
    '/images/slide1.jpg',
    '/images/slide2.jpg',
    '/images/slide3.jpg',
];

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Cambia de imagen cada 5 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel-container">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${image})` }}
                />
            ))}
        </div>
    );
};

export default Carousel;
