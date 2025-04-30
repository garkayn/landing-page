// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { FaReddit, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6" id="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1: Logo y descripción */}
          <div>
            <img src="/favicon.ico" alt="Logo" className="h-10 w-10 mr-4" />
            <div className="flex mt-4 space-x-4">
              <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
          <FaReddit size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
          <FaXTwitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
          <Link href="#hero" className="text-gray-400 hover:text-white transition">
            Hero
          </Link>
              </li>
              <li>
          <Link href="#solution" className="text-gray-400 hover:text-white transition">
            Solución
          </Link>
              </li>
              <li>
          <Link href="#roadmap" className="text-gray-400 hover:text-white transition">
            Hoja de ruta
          </Link>
              </li>
            </ul>
          </div>
          
          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>contacto@tumarca.com</li>
              <li>Calle Falsa 123, Ciudad</li>
            </ul>
          </div>
          
          {/* Columna 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-800">Newsletter</h3>
            <form className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input 
          type="email" 
          placeholder="Tu email" 
          className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
          required
              />
              <button 
          type="submit" 
          className="font-bold px-4 py-2 rounded-full text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform opacity-80 hover:opacity-100 text-sm"
              >
          Suscribirse
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Orión</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;