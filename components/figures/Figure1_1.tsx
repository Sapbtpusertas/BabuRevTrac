import React from 'react';

export const Figure1_1: React.FC = () => {
  return (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" aria-labelledby="fig1-1-title">
      <title id="fig1-1-title">Rev-Trac Architecture Diagram</title>
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#6b7280" />
        </marker>
        <style>{`
          .fig-text { font-family: sans-serif; font-size: 10px; fill: #1f2937; }
          .fig-label { font-family: sans-serif; font-size: 8px; fill: #4b5563; }
        `}</style>
      </defs>

      {/* Corporate Network */}
      <rect x="5" y="5" width="160" height="190" fill="#eff6ff" stroke="#dbeafe" rx="5" />
      <text x="85" y="20" textAnchor="middle" className="fig-text" fontWeight="bold">Corporate Network</text>
      
      {/* Rev-Trac Master */}
      <rect x="30" y="70" width="120" height="60" fill="#dbeafe" stroke="#93c5fd" rx="5" />
      <text x="90" y="95" textAnchor="middle" className="fig-text">Rev-Trac Master</text>
      <text x="90" y="110" textAnchor="middle" className="fig-label">(ABAP Core)</text>
      
      {/* WebCore VM */}
      <rect x="250" y="70" width="120" height="60" fill="#e0e7ff" stroke="#a5b4fc" rx="5" />
      <text x="310" y="100" textAnchor="middle" className="fig-text">WebCore VM</text>

      {/* Connection between Master and WebCore */}
      <line x1="150" y1="100" x2="250" y2="100" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrow)" markerStart="url(#arrow)" />

      {/* External Tools */}
      <path d="M370,50 a20,20 0 0,0 -40,0 a20,20 0 0,0 40,0" fill="#d1fae5" stroke="#6ee7b7" />
      <text x="350" y="54" textAnchor="middle" className="fig-text">Jira</text>
      <line x1="310" y1="70" x2="330" y2="55" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <text x="310" y="60" textAnchor="middle" className="fig-label">REST API</text>

      <path d="M370,150 a20,20 0 0,0 -40,0 a20,20 0 0,0 40,0" fill="#d1fae5" stroke="#6ee7b7" />
      <text x="350" y="154" textAnchor="middle" className="fig-text">ServiceNow</text>
      <line x1="310" y1="130" x2="330" y2="145" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <text x="310" y="142" textAnchor="middle" className="fig-label">REST API</text>
    </svg>
  );
};