'use client';

import React from "react";
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, ready } = useTranslation();

  if (!ready) return <div>Loading translations...</div>;

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden" id="hero">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Lanzamiento de cohete espacial"
        poster="/lanzamiento-poster.webp"
      >
        <source src="/lanzamiento.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="relative h-full flex flex-col justify-end pb-20 md:pb-28 lg:pb-36 px-8 md:px-12 lg:px-16 text-left">
        <div className="mb-8 max-w-2xl">
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            {t('hero.Intro')}
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {t('hero.Title')}
          </h1>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce flex flex-col items-center">
            <svg width="30px" height="20px" aria-label="more content below">
              <path stroke="#ffffff" stroke-width="2px" d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
