import React from 'react';

export const Figure5_2: React.FC = () => {
  return (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" aria-labelledby="fig5-2-title">
      <title id="fig5-2-title">Dependency Definition UI Wireframe</title>
      <defs>
        <style>{`
          .fig-text { font-family: sans-serif; font-size: 12px; fill: #1f2937; }
          .fig-label { font-family: sans-serif; font-size: 10px; fill: #4b5563; }
        `}</style>
      </defs>

      {/* Main Window */}
      <rect x="1" y="1" width="398" height="198" fill="#ffffff" stroke="#d1d5db" rx="5" />
      <rect x="1" y="1" width="398" height="30" fill="#f9fafb" stroke="#d1d5db" />
      <text x="15" y="21" className="fig-text" fontWeight="bold">Define Dependencies</text>
      
      {/* Current Request */}
      <text x="20" y="55" className="fig-label">Current Request:</text>
      <rect x="20" y="65" width="360" height="30" fill="#eff6ff" stroke="#93c5fd" rx="3" />
      <text x="30" y="84" className="fig-text">RTR-12346: ABAP program to read from new table</text>

      {/* Pre-requisites Section */}
      <text x="20" y="120" className="fig-label" fontWeight="bold">Pre-requisite Requests:</text>
      <rect x="20" y="130" width="360" height="50" fill="#f3f4f6" stroke="#d1d5db" rx="3" />
      <rect x="30" y="140" width="340" height="30" fill="#fef9c3" stroke="#fcd34d" rx="2" />
      <text x="40" y="159" className="fig-text">RTR-12345: Create new database table</text>

      {/* Connection line */}
      <path d="M 200 95 L 200 130" stroke="#fb923c" strokeWidth="2" strokeDasharray="3 3" markerEnd="url(#arrow52)" />
      <defs>
        <marker id="arrow52" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#fb923c" />
        </marker>
      </defs>

    </svg>
  );
};