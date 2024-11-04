// src/app/page.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Carousel /> {/* Fondo del carrusel */}
      <Navbar />
      <main className="relative flex flex-col items-center justify-center h-screen z-10">
        <h1 className="text-5xl font-bold text-spotify-green">Bienvenido a EGS</h1>
        <p className="mt-4 text-xl text-gray-300">Soluciones Electrónicas a tu Alcance</p>
      </main>
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Filtro de oscurecimiento */}
    </div>
  );
};

export default Home;
