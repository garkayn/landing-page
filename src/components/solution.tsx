'use client';

import { FaUsers, FaCoins, FaGamepad } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const SolutionSection = () => {
  const { t } = useTranslation();

  return (
    <section id="solution" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t('solution.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {t('solution.highlight')}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('solution.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tarjeta 1 - Comunidad */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 transition-all">
            <div className="text-blue-400 mb-4">
              <FaUsers size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-3">{t('solution.cards.community.title')}</h3>
            <p className="text-gray-300 mb-4">
              {t('solution.cards.community.description')}
            </p>
            <ul className="space-y-2 text-gray-400">
              {[0, 1, 2].map((index) => (
                <li key={index} className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  {t(`solution.cards.community.features.${index}`)}
                </li>
              ))}
            </ul>
          </div>

          {/* Tarjeta 2 - Experiencia */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 transition-all">
            <div className="text-green-400 mb-4">
              <FaGamepad size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-3">{t('solution.cards.experience.title')}</h3>
            <p className="text-gray-300 mb-4">
              {t('solution.cards.experience.description')}
            </p>
            <ul className="space-y-2 text-gray-400">
              {[0, 1, 2].map((index) => (
                <li key={index} className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  {t(`solution.cards.experience.features.${index}`)}
                </li>
              ))}
            </ul>
          </div>

          {/* Tarjeta 3 - Moneda */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 transition-all">
            <div className="text-purple-400 mb-4">
              <FaCoins size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-3">{t('solution.cards.currency.title')}</h3>
            <p className="text-gray-300 mb-4">
              {t('solution.cards.currency.description')}
            </p>
            <ul className="space-y-2 text-gray-400">
              {[0, 1, 2].map((index) => (
                <li key={index} className="flex items-center">
                  <span className="text-purple-400 mr-2">✓</span>
                  {t(`solution.cards.currency.features.${index}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;