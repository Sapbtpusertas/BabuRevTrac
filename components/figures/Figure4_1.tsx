import React from 'react';

export const Figure4_1: React.FC = () => {
  return (
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" aria-labelledby="fig4-1-title">
      <title id="fig4-1-title">Create Request UI Wireframe</title>
      <defs>
        <style>{`
          .fig-text { font-family: sans-serif; font-size: 12px; fill: #1f2937; }
          .fig-label { font-family: sans-serif; font-size: 10px; fill: #4b5563; }
        `}</style>
      </defs>

      {/* Main Window */}
      <rect x="1" y="1" width="398" height="248" fill="#ffffff" stroke="#d1d5db" rx="5" />
      <rect x="1" y="1" width="398" height="40" fill="#f9fafb" stroke="#d1d5db" />
      <text x="20" y="26" className="fig-text" fontWeight="bold">Create Rev-Trac Request: Details</text>

      {/* Form Fields */}
      <text x="30" y="70" className="fig-label" fontWeight="bold">Title:</text>
      <rect x="130" y="60" width="240" height="20" fill="#f9fafb" stroke="#d1d5db" rx="2" />
      
      <text x="30" y="100" className="fig-label" fontWeight="bold">Project:</text>
      <rect x="130" y="90" width="240" height="20" fill="#f9fafb" stroke="#d1d5db" rx="2" />
      <rect x="130" y="90" width="240" height="20" fill="none" stroke="#dc2626" stroke-width="2" rx="2" />

      <text x="30" y="130" className="fig-label" fontWeight="bold">Request Type:</text>
      <rect x="130" y="120" width="240" height="20" fill="#f9fafb" stroke="#d1d5db" rx="2" />
      <rect x="130" y="120" width="240" height="20" fill="none" stroke="#dc2626" stroke-width="2" rx="2" />

      <text x="30" y="160" className="fig-label">Owner:</text>
      <rect x="130" y="150" width="240" height="20" fill="#f9fafb" stroke="#d1d5db" rx="2" />

      <text x="30" y="190" className="fig-label">Programmer:</text>
      <rect x="130" y="180" width="240" height="20" fill="#f9fafb" stroke="#d1d5db" rx="2" />
      
      {/* Annotations */}
      <path d="M300 110 C 350 100, 360 80, 320 70" stroke="#dc2626" fill="none" stroke-dasharray="2 2" />
      <text x="220" y="50" className="fig-label" fill="#dc2626">Project + Request Type</text>
      <text x="220" y="40" className="fig-label" fill="#dc2626">determines Workflow Path</text>
    </svg>
  );
};