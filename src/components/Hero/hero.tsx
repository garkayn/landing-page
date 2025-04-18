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
        aria-label="Lanzamiento de cohete espacial" //
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

      <div className="relative z-10 text-center text-white p-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          ¡Prepárate para viajar más allá!
        </h1>
        <p className="text-lg md:text-2xl mb-6">
            Hoy viajar al espacio es complicado y exclusivo. Queremos democratizarlo
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#kickstarter"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full transition focus:ring-2 focus:ring-indigo-400" // 👈 Estilo para focus (accesibilidad)
          >
            Apóyanos en Kickstarter
          </a>
          <a
            href="#waitlist"
            className="border border-white text-white font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-black transition focus:ring-2 focus:ring-white"
          >
            Suscribite a nuestro newsletter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;