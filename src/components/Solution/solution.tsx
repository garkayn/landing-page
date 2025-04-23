import React from "react";
import {solutions} from "../../data/solutionItems";

const Solution = () => {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white text-center" id="solution">
      <h2 className="text-3xl md:text-5xl font-bold mb-10">
        Nuestra Solución
      </h2>
      <p className="mb-12 text-slate-300 max-w-3xl mx-auto">
        Democratizamos el acceso al espacio a través de tres pilares: comunidad, cripto y juego. ¡Únete a la revolución espacial!
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {solutions.map((item, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/50 transition">
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
