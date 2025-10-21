
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { AudioPlayer } from './components/AudioPlayer';
import { ModuleGrid } from './components/ModuleGrid';
import { Modal } from './components/Modal';
import { modulesData } from './constants/modules';
import { Module } from './types';

const App: React.FC = () => {
  const [activeModule, setActiveModule] = useState<Module | null>(null);

  const openModal = useCallback((moduleId: string) => {
    const module = modulesData.find(m => m.id === moduleId);
    if (module) {
      setActiveModule(module);
    }
  }, []);

  const closeModal = useCallback(() => {
    setActiveModule(null);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <AudioPlayer />
        <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6 border-b-2 border-blue-700 pb-2 inline-block">
          Learning Modules
        </h2>
        <ModuleGrid modules={modulesData} onModuleClick={openModal} />
      </main>
      <Modal module={activeModule} onClose={closeModal} />
    </div>
  );
};

export default App;
