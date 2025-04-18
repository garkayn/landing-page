import React from "react";

const solutions = [
  {
    title: "Plataforma Social",
    description: "Conecta con astronautas, ingenieros y entusiastas del espacio. Comparte ideas, eventos y misiones en tiempo real.",
    icon: "🚀",
  },
  {
    title: "Criptoeconomía",
    description: "Apoya misiones y proyectos espaciales usando tecnología blockchain. Gana recompensas y participa en la economía espacial.",
    icon: "🪙",
  },
  {
    title: "Juego de Exploración",
    description: "Explora el espacio, construye estaciones y colonias virtuales mientras aprendes sobre el universo y compites con otros usuarios.",
    icon: "🎮",
  },
];

const Solution = () => {
  return (
    <section className="py-16 px-6  text-white text-center" id="solution">
      <h2 className="text-3xl md:text-5xl font-bold mb-10">
        Nuestra Solución
      </h2>
      <p className="mb-12 text-slate-300 max-w-3xl mx-auto">
        Democratizamos el acceso al espacio a través de tres pilares: comunidad, cripto y juego. ¡Únete a la revolución espacial!
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {solutions.map((item, index) => (
          <div key={index} className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/50 transition">
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-slate-400">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solution;
