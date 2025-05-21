'use client';

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import { TbWorld } from "react-icons/tb";

const Header = () => {
  const [opacity, setOpacity] = useState(1);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguageMenuOpen(false);
  };

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
    
    // Solo comienza a desvanecer después de 100px de scroll
    if (currentScrollY > 100) {
      if (scrollDirection === 'down') {
        // Desvanecer al bajar (más rápido)
        setOpacity(prev => Math.max(0, prev - 0.1));
      } else {
        // Aparecer al subir (un poco más lento para mejor UX)
        setOpacity(prev => Math.min(1, prev + 0.08));
      }
    } else {
      // Mostrar completamente cuando está cerca del top
      setOpacity(1);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    // Usamos requestAnimationFrame para mejor rendimiento
    let animationFrameId: number;
    
    const throttledScroll = () => {
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(() => {
          handleScroll();
          animationFrameId = 0;
        });
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className="fixed top-0 w-full z-50 transition-opacity duration-300 border-b border-gray-800/50"
      style={{
        opacity: opacity,
        background: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        transition: 'opacity 0.3s ease-in-out' // Transición más suave
      }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center py-3">
        <img
          src="/favicon.ico"
          alt="Logo"
          className="h-8 w-8 transition-transform"
        />

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#solution" className="hover:text-white transition-colors font-bold">
            {t('header.solution')}
          </Link>
          <Link href="#roadmap" className="hover:text-white transition-colors font-bold">
            {t('header.roadmap')}
          </Link>
          <Link href="#footer" className="hover:text-white transition-colors font-bold">
            {t('header.contact')}
          </Link>
        </nav>

        <div className="relative flex items-center space-x-3">
          <Link
            href="#kickstarter"
            className="font-bold px-4 py-2 rounded-full text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform opacity-80 hover:opacity-100 text-sm"
          >
            {t('header.support')}
          </Link>
          <Link
            href="#waitlist"
            className="font-bold border border-gray-400 hover:border-white text-gray-300 hover:text-white text-sm px-4 py-2 rounded-full transition-colors"
          >
            {t('header.newsletter')}
          </Link>

          {/* Language Selector */}
          <div 
            className="relative group"
            onMouseEnter={() => setLanguageMenuOpen(true)}
            onMouseLeave={() => setLanguageMenuOpen(false)}
          >
            <button
              onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-700 transition-colors text-white text-xl flex items-center"
            >
              <TbWorld />
            </button>
            {languageMenuOpen && (
              <div 
                className="absolute left-0 mt-0 w-13 bg-gray-800 bg-opacity-90 backdrop-blur-md text-white rounded-lg shadow-lg z-50"
              >
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center space-x-2" onClick={() => changeLanguage('en')}>            
                    <span><img src="/en.svg" alt="en" className="w-5 h-5" /></span>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center space-x-2" onClick={() => changeLanguage('es')}>
                    <span><img src="/es.svg" alt="es" className="w-5 h-5" /></span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;