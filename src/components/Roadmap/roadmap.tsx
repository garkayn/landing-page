import React from "react";
import { phases } from "../../data/roadmapItems";
import { FaCheckCircle, FaRocket, FaRegCircle } from "react-icons/fa";

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">hoja de ruta</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            El camino que nos llevará a revolucionar el acceso al espacio mediante tecnología descentralizada          </p>
        </div>

        <div className="relative">
          {/* Línea de tiempo */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-purple-500 transform -translate-x-1/2"></div>
          
          <div className="space-y-16 md:space-y-0">
            {phases.map((phase, index) => (
              <div 
                key={index}
                className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start justify-center gap-8`}
              >
                {/* Punto en la línea */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-8 h-8 rounded-full bg-gray-900 z-10">
                  {phase.status === "completed" ? (
                    <FaCheckCircle className="text-green-400 text-xl" />
                  ) : phase.status === "current" ? (
                    <div className="relative">
                      <FaRocket className="text-blue-400 text-xl animate-pulse" />
                      <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75"></div>
                    </div>
                  ) : (
                    <FaRegCircle className="text-purple-400 text-xl" />
                  )}
                </div>
                
                {/* Tarjeta */}
                <div className={`w-full md:w-1/2 p-8 rounded-xl border ${phase.status === 'current' ? 'border-blue-400 bg-gray-900 shadow-lg shadow-blue-900/30' : 'border-gray-800 bg-gray-900/50'} ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${phase.status === 'completed' ? 'bg-green-900 text-green-300' : phase.status === 'current' ? 'bg-blue-900 text-blue-300' : 'bg-purple-900 text-purple-300'}`}>
                      {phase.duration}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 italic">{phase.objective}</p>
                  
                  <ul className="space-y-3">
                    {phase.keyActions.map((action, i) => (
                      <li key={i} className="flex items-start">
                        <span className={`mt-1 mr-2 ${phase.status === "completed" ? "text-green-400" : "text-blue-400"}`}>
                          •
                        </span>
                        <span className={phase.status === "completed" ? "text-gray-400" : "text-gray-300"}>
                          {action}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {phase.status === 'current' && (
                    <div className="mt-4 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse mr-2"></div>
                      <span className="text-blue-400 text-sm font-medium">EN PROGRESO</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;