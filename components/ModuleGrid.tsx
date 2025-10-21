
import React from 'react';
import { ModuleCard } from './ModuleCard';
import { Module } from '../types';

interface ModuleGridProps {
  modules: Module[];
  onModuleClick: (id: string) => void;
}

export const ModuleGrid: React.FC<ModuleGridProps> = ({ modules, onModuleClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {modules.map((module) => (
        <ModuleCard key={module.id} module={module} onClick={() => onModuleClick(module.id)} />
      ))}
    </div>
  );
};
