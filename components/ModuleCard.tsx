
import React from 'react';
import { Module } from '../types';

interface ModuleCardProps {
  module: Module;
  onClick: () => void;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({ module, onClick }) => {
  const isQuiz = module.isQuiz;

  const cardClasses = `
    p-6 rounded-xl border transition-all duration-300 ease-in-out cursor-pointer flex flex-col h-full
    ${isQuiz 
      ? 'bg-blue-700 text-white border-blue-700 hover:bg-blue-800 shadow-lg hover:shadow-xl' 
      : 'bg-white border-gray-200 hover:border-blue-400 hover:shadow-lg hover:-translate-y-1 shadow-md'
    }
  `;

  const titleClasses = `
    text-xl font-semibold mb-2
    ${isQuiz ? 'text-white' : 'text-blue-700'}
  `;

  const descriptionClasses = `
    flex-grow
    ${isQuiz ? 'text-blue-100' : 'text-gray-600'}
  `;

  return (
    <div className={cardClasses} onClick={onClick}>
      <h3 className={titleClasses}>{module.title}</h3>
      <p className={descriptionClasses}>{module.description}</p>
    </div>
  );
};
