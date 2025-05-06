'use client';

import React from "react";
import { FaRocket, FaRegCircle } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Roadmap = () => {
  const { t } = useTranslation();

  return (
    <section id="roadmap" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t('roadmap.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {t('roadmap.highlight')}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('roadmap.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-purple-400 to-transparent transform -translate-x-1/2 rounded-full"></div>
          
          <div className="space-y-16 md:space-y-0">
            {/* Phase 1 */}
            <div className="relative md:flex md:flex-row items-start justify-center gap-8">
              {/* Timeline point */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-8 h-8 rounded-full bg-gray-900 z-10">
                <div className="relative">
                  <FaRocket className="text-blue-400 text-xl animate-pulse" />
                  <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75"></div>
                </div>
              </div>
              
              {/* Phase card */}
              <div className="w-full md:w-1/2 p-8 rounded-xl border border-blue-400 bg-gray-900 shadow-lg shadow-blue-900/30 md:mr-auto">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-white">
                    {t('roadmap.phases.phase1.title')}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-sm bg-blue-900 text-blue-300">
                    {t('roadmap.phases.phase1.duration')}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4 italic">
                  {t('roadmap.phases.phase1.objective')}
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mt-1 mr-2 text-blue-400">•</span>
                    <span className="text-gray-400">
                      {t('roadmap.phases.phase1.actions.0')}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mt-1 mr-2 text-blue-400">•</span>
                    <span className="text-gray-400">
                      {t('roadmap.phases.phase1.actions.1')}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mt-1 mr-2 text-blue-400">•</span>
                    <span className="text-gray-400">
                      {t('roadmap.phases.phase1.actions.2')}
                    </span>
                  </li>
                </ul>
                
                <div className="mt-4 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse mr-2"></div>
                  <span className="text-blue-400 text-sm font-medium">
                    {t('roadmap.inProgress')}
                  </span>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative md:flex md:flex-row-reverse items-start justify-center gap-8">
              {/* Timeline point */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-8 h-8 rounded-full bg-gray-900 z-10">
                <FaRegCircle className="text-purple-400 text-xl" />
              </div>

              {/* Phase card */}
              <div className="w-full md:w-1/2 p-8 rounded-xl bg-gray-900/50 md:ml-auto">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-white">
                    {t('roadmap.phases.phase2.title')}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-sm bg-green-900 text-green-300">
                    {t('roadmap.phases.phase2.duration')}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4 italic">
                  {t('roadmap.phases.phase2.objective')}
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mt-1 mr-2 text-green-400">•</span>
                    <span className="text-gray-300">
                      {t('roadmap.phases.phase2.actions.0')}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mt-1 mr-2 text-green-400">•</span>
                    <span className="text-gray-300">
                      {t('roadmap.phases.phase2.actions.1')}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mt-1 mr-2 text-green-400">•</span>
                    <span className="text-gray-300">
                      {t('roadmap.phases.phase2.actions.2')}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative md:flex md:flex-row items-start justify-center gap-8">
              {/* Timeline point */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-8 h-8 rounded-full bg-gray-900 z-10">
                <FaRegCircle className="text-purple-400 text-xl" />
              </div>
              
              {/* Phase card */}
              <div className="w-full md:w-1/2 p-8 rounded-xl bg-gray-900/50 md:mr-auto">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-white">
                    {t('roadmap.phases.phase3.title')}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-sm bg-purple-900 text-purple-300">
                    {t('roadmap.phases.phase3.duration')}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4 italic">
                  {t('roadmap.phases.phase3.objective')}
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mt-1 mr-2 text-purple-400">•</span>
                    <span className="text-gray-300">
                      {t('roadmap.phases.phase3.actions.0')}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mt-1 mr-2 text-purple-400">•</span>
                    <span className="text-gray-300">
                      {t('roadmap.phases.phase3.actions.1')}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mt-1 mr-2 text-purple-400">•</span>
                    <span className="text-gray-300">
                      {t('roadmap.phases.phase3.actions.2')}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
