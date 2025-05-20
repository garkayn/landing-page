'use client';

import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          setOpacity(Math.max(0, opacity - 0.05));
        } else {
          setOpacity(Math.min(1, opacity + 0.1));
        }
      } else {
        setOpacity(1);
      }

      setLastScrollY(currentScrollY);
    };

    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener("scroll", throttledScroll, { passive: true });

    return () => window.removeEventListener("scroll", throttledScroll);
  }, [lastScrollY, opacity]);

  return (
    <header
      className="fixed top-0 w-full z-50 transition-opacity duration-300 border-b border-gray-800/50"
      style={{
        opacity: opacity,
        background: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)'
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
          <button
            onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
            className="relative text-white text-xl hover:text-gray-300"
          >
            <TbWorld />
          </button>

          {languageMenuOpen && (
            <div className="absolute right-0 top-10 mt-2 bg-black bg-opacity-80 backdrop-blur-md rounded-md shadow-lg text-sm text-white z-50">
              <button
                onClick={() => i18n.changeLanguage('en')}
                className="block w-full text-left px-4 py-2 hover:bg-gray-700"
              >
                English
              </button>
              <button
                onClick={() => i18n.changeLanguage('es')}
                className="block w-full text-left px-4 py-2 hover:bg-gray-700"
              >
                Español
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

function throttle(fn: (...args: any[]) => void, wait: number) {
  let lastTime = 0;
  return (...args: any[]) => {
    const now = Date.now();
    if (now - lastTime >= wait) {
      fn(...args);
      lastTime = now;
    }
  };
}

export default Header;
