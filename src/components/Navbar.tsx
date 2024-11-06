// src/components/Navbar.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import '../styles/navbar.css'; // Importar el archivo CSS

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">EGS</div>
      <div className="navbar-menu">
        <Link href="/" className="navbar-item">Inicio</Link>
        <Link href="/servicios" className="navbar-item">Servicios</Link>
        <Link href="/contacto" className="navbar-item">Contacto</Link>
      </div>
    </nav>
  );
};

export default Navbar;
