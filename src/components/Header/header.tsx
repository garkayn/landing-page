'use client';

import React, { useEffect, useState } from "react";

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
        className={`fixed top-0 left-0 w-full z-20 flex items-center justify-between px-8 py-4
        bg-black/30 backdrop-blur-sm transition-opacity duration-500 ${
          show ? "opacity-100" : "opacity-0"
        }`}
    >
        <img src="/favicon.ico" alt="Logo" className="h-8 w-8" />
        <nav className="flex gap-6">
        <a href="#contact" className="text-white hover:underline">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
