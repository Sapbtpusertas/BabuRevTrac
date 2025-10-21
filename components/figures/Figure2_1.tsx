import React from 'react';

export const Figure2_1: React.FC = () => {
  return (
    <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" aria-labelledby="fig2-1-title">
      <title id="fig2-1-title">Network Communication Paths Diagram</title>
      <defs>
        <marker id="arrow2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626" />
        </marker>
        <style>{`
          .fig-text { font-family: sans-serif; font-size: 10px; fill: #1f2937; }
          .fig-label { font-family: sans-serif; font-size: 8px; fill: #4b5563; }
          .fig-conn { font-family: sans-serif; font-size: 9px; fill: #be123c; font-weight: bold; }
        `}</style>
      </defs>

      {/* DMZ/External Zone */}
      <rect x="5" y="5" width="160" height="100" fill="#fefce8" stroke="#facc15" rx="5" />
      <text x="85" y="20" textAnchor="middle" className="fig-text" fontWeight="bold">DMZ / Cloud</text>
      
      {/* WebCore VM */}
      <rect x="30" y="30" width="120" height="60" fill="#e0e7ff" stroke="#a5b4fc" rx="5" />
      <text x="90" y="60" textAnchor="middle" className="fig-text">WebCore VM</text>

      {/* DevOps Tools */}
      <path d="M30,150 a20,20 0 0,0 -40,0 a20,20 0 0,0 40,0" transform="translate(45,0)" fill="#d1fae5" stroke="#6ee7b7" />
      <text x="50" y="154" textAnchor="middle" className="fig-text">DevOps Tools</text>

      {/* Internal Network */}
      <rect x="180" y="5" width="215" height="210" fill="#eff6ff" stroke="#dbeafe" rx="5" />
      <text x="287.5" y="20" textAnchor="middle" className="fig-text" fontWeight="bold">Internal Network</text>

      {/* Rev-Trac Master */}
      <rect x="200" y="30" width="120" height="60" fill="#dbeafe" stroke="#93c5fd" rx="5" />
      <text x="260" y="55" textAnchor="middle" className="fig-text">Rev-Trac Master</text>
      <text x="260" y="70" textAnchor="middle" className="fig-label">(SAP System)</text>
      
      {/* Managed Systems */}
      <rect x="200" y="130" width="100" height="40" fill="#e5e7eb" stroke="#9ca3af" rx="5" />
      <text x="250" y="150" textAnchor="middle" className="fig-text">Managed SAP</text>
      <rect x="305" y="130" width="20" height="40" fill="#e5e7eb" stroke="#9ca3af" rx="5" />
      <text x="315" y="150" textAnchor="middle" className="fig-text">...</text>

      {/* Connections */}
      <line x1="90" y1="90" x2="50" y2="135" stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#arrow2)" />
      <text x="50" y="115" textAnchor="middle" className="fig-conn">HTTPS</text>
      
      <line x1="150" y1="60" x2="200" y2="60" stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#arrow2)" />
      <text x="175" y="55" textAnchor="middle" className="fig-conn">TCP/IP</text>
      
      <line x1="260" y1="90" x2="260" y2="130" stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#arrow2)" />
      <text x="275" y="110" textAnchor="middle" className="fig-conn">RFC</text>
    </svg>
  );
};