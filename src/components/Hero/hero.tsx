import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Lanzamiento de cohete espacial"
        poster="/lanzamiento-poster.webp"
      >
        <source 
          src="/lanzamiento.mp4"
          type="video/mp4" 
        />
        <p className="text-white">
          Tu navegador no soporta videos HTML5. 
          <a href="/lanzamiento.mp4" className="underline">Descárgalo aquí</a>.
        </p>
      </video>

      <div 
        className="absolute inset-0 bg-black opacity-50" 
        aria-hidden="true"
      />

      <div className="absolute bottom-30 left-50 z-10 text-left text-white p-4 max-w-2xl">
        <p className="text-lg md:text-2xl mb-6">
            Hoy viajar al espacio es complicado y exclusivo. Queremos democratizarlo
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          ¡Prepárate para viajar más allá!
        </h1>
      </div>
    </section>
  );
};

export default Hero;