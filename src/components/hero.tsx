import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden" id="hero">
      {/* Video de fondo */}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Contenido alineado a la izquierda abajo */}
      <div className="relative h-full flex flex-col justify-end pb-20 md:pb-28 lg:pb-36 px-8 md:px-12 lg:px-16 text-left">
        <div className="mb-8 max-w-2xl">
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            Hoy viajar al espacio es complicado y exclusivo. <span className="text-white font-medium">Queremos democratizarlo</span>
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            ¡Prepárate para viajar más allá!
          </h1>
        </div>

        {/* Flecha*/}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce flex flex-col items-center">
            <svg 
              className="w-6 h-6 text-white opacity-80" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;