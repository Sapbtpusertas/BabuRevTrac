
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white text-center py-16 px-4 border-b border-gray-200">
      <h1 className="text-5xl font-bold text-blue-700">Babu RevTrac</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
        The Professional's Cookbook for Rev-Trac SAP Change Management Automation
      </p>
    </header>
  );
};
