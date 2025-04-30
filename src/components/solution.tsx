// components/SolutionSection.tsx
import { FaUsers, FaCoins, FaGamepad } from 'react-icons/fa';

const SolutionSection = () => {
  return (
    <section id="solution" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            Revolucionando el Acceso al Espacio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Combinamos tecnología blockchain, gamificación y comunidad para crear el primer ecosistema espacial descentralizado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tarjeta 1 */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 transition-all">
            <div className="text-blue-400 mb-4">
              <FaUsers size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Comunidad Global</h3>
            <p className="text-gray-300 mb-4">
              Conecta con astronautas, ingenieros aeroespaciales y entusiastas en nuestra plataforma social dedicada al espacio.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">✓</span> Foros técnicos especializados
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">✓</span> Eventos en vivo con expertos
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">✓</span> Red de colaboración
              </li>
            </ul>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 transition-all">
            <div className="text-green-400 mb-4">
              <FaGamepad size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Experiencia Inmersiva</h3>
            <p className="text-gray-300 mb-4">
              Explora el universo en nuestro metaverso espacial. Construye bases, participa en misiones y gana recompensas reales.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span> Simulaciones realistas
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span> Economía play-to-earn
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span> Eventos exclusivos
              </li>
            </ul>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 transition-all">
            <div className="text-purple-400 mb-4">
              <FaCoins size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Moneda propia</h3>
            <p className="text-gray-300 mb-4">
              Tokenización de proyectos espaciales mediante blockchain. Invierte, participa y benefíciate del nuevo mercado espacial.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">✓</span> NFT de espacios en planetas del juego
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">✓</span> Staking de recompensas
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">✓</span> Apoyar proyectos
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;