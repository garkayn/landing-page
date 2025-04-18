import React from "react";

const Roadmap = () => {
  const phases = [
    {
      title: "Fase 1: Validación",
      duration: "6 meses",
      objective: "Validar interés y recaudar fondos",
      keyActions: [
        "Landing page con React",
        "Campaña en Kickstarter",
        "Prototipo básico del simulador (demo en VR)"
      ],
      status: "active",
      color: "bg-purple-500"
    },
    {
      title: "Fase 2: Plataforma Base",
      duration: "12 meses",
      objective: "MVP de la red social y criptomoneda",
      keyActions: [
        "Desarrollo de la red social (core features)",
        "Lanzamiento de la criptomoneda (ERC-20)",
        "Alianzas con empresas espaciales"
      ],
      status: "upcoming",
      color: "bg-blue-500"
    },
    {
      title: "Fase 3: Escalado",
      duration: "18 meses+",
      objective: "Expansión global y lanzamiento del juego",
      keyActions: [
        "Integración de realidad virtual avanzada",
        "Venta de NFTs de terrenos",
        "Acuerdos con aerolíneas espaciales"
      ],
      status: "upcoming",
      color: "bg-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-300 hover:text-indigo-400">
          Nuestra <span className="text-indigo-400">Ruta Crítica</span>
        </h2>

        <div className="relative">
          {/* Línea de tiempo */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-emerald-500 transform -translate-x-1/2"></div>

          {phases.map((phase, index) => (
            <div 
              key={index}
              className={`mb-16 md:flex ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"} transition-all duration-500 ease-in-out hover:scale-[1.02]`}
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                <div className={`p-8 rounded-xl shadow-lg ${phase.status === "active" ? "border-l-4 border-indigo-400" : ""} bg-gray-800 hover:bg-gray-750 transition-colors duration-300`}>
                  <div className="flex items-center mb-4">
                    <div className={`w-6 h-6 rounded-full ${phase.color} mr-4 animate-pulse`}></div>
                    <h3 className="text-2xl font-bold">{phase.title}</h3>
                  </div>
                  
                  <div className="mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-gray-300">{phase.duration}</span>
                  </div>
                  
                  <p className="text-lg text-gray-300 mb-4">{phase.objective}</p>
                  
                  <ul className="space-y-2">
                    {phase.keyActions.map((action, i) => (
                      <li key={i} className="flex items-start group">
                        <svg className="w-5 h-5 mt-0.5 mr-2 text-indigo-400 flex-shrink-0 transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="group-hover:text-indigo-300 transition-colors duration-200">{action}</span>
                      </li>
                    ))}
                  </ul>

                  {phase.status === "active" && (
                    <div className="mt-4 inline-block px-3 py-1 rounded-full bg-indigo-900 text-indigo-300 text-sm font-medium animate-bounce">
                      En progreso
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Versión móvil */}
        <div className="md:hidden space-y-8">
          {phases.map((phase, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl bg-gray-800 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-gray-750"
            >
              <div className="flex items-center mb-4">
                <div className={`w-5 h-5 rounded-full ${phase.color} mr-3 ${phase.status === "active" ? "animate-pulse" : ""}`}></div>
                <h3 className="text-xl font-bold">{phase.title}</h3>
              </div>
              
              <div className="flex items-center text-sm mb-3">
                <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-gray-300">{phase.duration}</span>
              </div>
              
              <p className="text-gray-300 mb-4">{phase.objective}</p>
              
              <ul className="space-y-2 pl-1">
                {phase.keyActions.map((action, i) => (
                  <li key={i} className="flex items-start text-sm group">
                    <svg className="w-4 h-4 mt-0.5 mr-2 text-indigo-400 flex-shrink-0 transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="group-hover:text-indigo-300 transition-colors duration-200">{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;