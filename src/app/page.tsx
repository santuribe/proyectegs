// src/app/page.tsx
"use client";

import React from 'react';
import Carousel from '../components/Carousel'; // Si necesitas subir un nivel de carpeta
import Navbar from '../components/Navbar';
import '../styles/welcome.css'; // Importar el archivo CSS

const Home: React.FC = () => {
  return (
    <main className="home-container">
      <Navbar />
      <Carousel />
      <div className="welcome-message">
        <h1>Bienvenido a EGS</h1>
        <p>Soluciones electrónicas para tus necesidades</p>
      </div>
    </main>
  );
};

export default Home;
