// src/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl bg-[#212529] text-white p-4 rounded-full shadow-lg flex items-center justify-between">
      <div className="flex items-center">
        <div className="text-spotify-green font-bold text-2xl">EGS</div>
      </div>
      <div className="flex space-x-8">
        <Link href="/" className="hover:text-spotify-green">Home</Link>
        <Link href="/about" className="hover:text-spotify-green">About</Link>
        <Link href="/contact" className="hover:text-spotify-green">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
