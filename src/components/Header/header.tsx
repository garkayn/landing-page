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
      className={`fixed top-0 left-0 w-full z-20 flex items-center justify-center px-8 py-4
      bg-black/30 backdrop-blur-sm transition-opacity duration-500 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <img src="/favicon.ico" alt="Logo" className="h-10 w-10 mr-4" />
      <nav className="flex items-center gap-4">
        <a
          href="#kickstarter"
          className="bg-[#028858] hover:bg-[#026b46] text-white font-semibold py-1 px-4 rounded-full transition focus:ring-2 focus:ring-[#028858]"
        >
          Apóyanos en Kickstarter
        </a>
        <a
          href="#waitlist"
          className="border border-white text-white font-semibold py-1 px-4 rounded-full hover:bg-white hover:text-black transition focus:ring-2 focus:ring-white"
        >
          Suscribite al newsletter
        </a>
      </nav>
    </header>
  );
};

export default Header;
