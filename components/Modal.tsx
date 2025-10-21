
import React, { useEffect } from 'react';
import { Module } from '../types';
import { Quiz } from './Quiz';

interface ModalProps {
  module: Module | null;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ module, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!module) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col transform transition-transform duration-300 scale-95 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-blue-700">{module.title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 transition-colors text-3xl leading-none">&times;</button>
        </header>
        <div className="p-6 overflow-y-auto">
          {module.isQuiz ? <Quiz /> : module.content}
        </div>
      </div>
      <style>{`
        @keyframes scale-in {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in { animation: scale-in 0.2s ease-out forwards; }
      `}</style>
    </div>
  );
};
