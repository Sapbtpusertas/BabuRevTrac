import React from 'react';

export const Figure5_1: React.FC = () => {
  return (
    <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" aria-labelledby="fig5-1-title">
      <title id="fig5-1-title">OOPS Conflict Scenarios Diagram</title>
      <defs>
        <marker id="arrow51" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#6b7280" />
        </marker>
        <style>{`
          .fig-text { font-family: sans-serif; font-size: 10px; fill: #1f2937; }
          .fig-label { font-family: sans-serif; font-size: 9px; fill: #4b5563; }
        `}</style>
      </defs>
      
      {/* Overwrite Scenario */}
      <text x="100" y="20" textAnchor="middle" className="fig-text" fontWeight="bold">Overwrite (Downgrade)</text>
      <rect x="25" y="40" width="80" height="40" fill="#f3f4f6" stroke="#d1d5db" rx="3" />
      <text x="65" y="60" textAnchor="middle" className="fig-label">Transport B</text>
      <text x="65" y="72" textAnchor="middle" className="fig-label" fontWeight="bold">(Version 1)</text>

      <rect x="175" y="40" width="80" height="40" fill="#dbeafe" stroke="#93c5fd" rx="3" />
      <text x="215" y="60" textAnchor="middle" className="fig-label">QAS System</text>
      <text x="215" y="72" textAnchor="middle" className="fig-label" fontWeight="bold">(Version 2)</text>

      <line x1="105" y1="60" x2="175" y2="60" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrow51)" />
      <g stroke="#ef4444" strokeWidth="3">
        <line x1="130" y1="50" x2="150" y2="70" />
        <line x1="150" y1="50" x2="130" y2="70" />
      </g>
      <text x="140" y="45" textAnchor="middle" className="fig-text" fill="#ef4444" fontWeight="bold">BLOCKED</text>

      {/* Separator */}
      <line x1="0" y1="110" x2="400" y2="110" stroke="#e5e7eb" />
      
      {/* Overtake Scenario */}
      <text x="200" y="130" textAnchor="middle" className="fig-text" fontWeight="bold">Overtake</text>

      <rect x="25" y="160" width="50" height="30" fill="#f3f4f6" stroke="#d1d5db" rx="3" />
      <text x="50" y="178" textAnchor="middle" className="fig-label">DEV</text>

      <rect x="100" y="145" width="80" height="30" fill="#f3f4f6" stroke="#d1d5db" rx="3" />
      <text x="140" y="163" textAnchor="middle" className="fig-label">Transport A (v2)</text>
      
      <rect x="100" y="185" width="80" height="30" fill="#fef9c3" stroke="#fcd34d" rx="3" />
      <text x="140" y="203" textAnchor="middle" className="fig-label">Transport B (v3)</text>
      
      <line x1="75" y1="175" x2="100" y2="160" stroke="#9ca3af" />
      <line x1="75" y1="175" x2="100" y2="200" stroke="#9ca3af" />

      <rect x="250" y="160" width="80" height="40" fill="#dbeafe" stroke="#93c5fd" rx="3" />
      <text x="290" y="180" textAnchor="middle" className="fig-label">QAS System</text>

      <line x1="180" y1="160" x2="250" y2="170" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrow51)" />
      <g stroke="#ef4444" strokeWidth="3">
        <line x1="205" y1="155" x2="225" y2="175" />
        <line x1="225" y1="155" x2="205" y2="175" />
      </g>
      <text x="215" y="150" textAnchor="middle" className="fig-text" fill="#ef4444" fontWeight="bold">BLOCKED</text>
      <text x="325" y="145" textAnchor="middle" className="fig-label">Transport B (v3)</text>
      <text x="325" y="155" textAnchor="middle" className="fig-label">must import first</text>

    </svg>
  );
};