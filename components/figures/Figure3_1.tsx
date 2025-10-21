import React from 'react';

export const Figure3_1: React.FC = () => {
  return (
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" aria-labelledby="fig3-1-title">
      <title id="fig3-1-title">Rev-Trac Console UI Wireframe</title>
      <defs>
        <style>{`
          .fig-text { font-family: sans-serif; font-size: 12px; fill: #1f2937; }
          .fig-label { font-family: sans-serif; font-size: 10px; fill: #4b5563; }
        `}</style>
      </defs>

      {/* Main Window */}
      <rect x="1" y="1" width="398" height="248" fill="#ffffff" stroke="#d1d5db" rx="5" />
      
      {/* Menu Bar */}
      <rect x="1" y="1" width="398" height="30" fill="#f9fafb" stroke="#d1d5db" />
      <text x="15" y="21" className="fig-label">File</text>
      <text x="50" y="21" className="fig-label">Edit</text>
      <text x="85" y="21" className="fig-label">Goto</text>
      <rect x="120" y="10" width="80" height="15" fill="#dbeafe" stroke="#93c5fd" />
      <text x="130" y="21" className="fig-label" fontWeight="bold">Configuration</text>
      <text x="210" y="21" className="fig-label">Utilities</text>
      
      {/* Title */}
      <text x="20" y="55" className="fig-text" fontWeight="bold">Rev-Trac Console</text>

      {/* Buttons */}
      <rect x="230" y="45" width="70" height="25" fill="#2563eb" rx="3" />
      <text x="238" y="61" fill="white" className="fig-label">Create</text>
      <rect x="310" y="45" width="70" height="25" fill="#f9fafb" stroke="#d1d5db" rx="3" />
      <text x="322" y="61" className="fig-label">Search</text>
      
      {/* Tabs */}
      <rect x="20" y="80" width="60" height="25" fill="#ffffff" stroke="#d1d5db" strokeDasharray="0 0 2 0" />
      <text x="35" y="96" className="fig-label" fontWeight="bold">Owner</text>
      <rect x="80" y="80" width="80" height="25" fill="#f9fafb" stroke="#d1d5db" />
      <text x="95" y="96" className="fig-label">Programmer</text>
      <rect x="160" y="80" width="50" height="25" fill="#f9fafb" stroke="#d1d5db" />
      <text x="172" y="96" className="fig-label">Actor</text>

      {/* Content Area */}
      <rect x="20" y="105" width="360" height="125" fill="#ffffff" stroke="#d1d5db" />
      <line x1="20" y1="130" x2="380" y2="130" stroke="#e5e7eb" />
      <text x="30" y="122" className="fig-label" fontWeight="bold">RTR No.</text>
      <text x="100" y="122" className="fig-label" fontWeight="bold">Title</text>
      <text x="250" y="122" className="fig-label" fontWeight="bold">Status</text>
      
      <text x="30" y="145" className="fig-label">102345</text>
      <text x="100" y="145" className="fig-label">Fix critical production bug</text>
      <text x="250" y="145" className="fig-label">In Development</text>
      
      <line x1="20" y1="155" x2="380" y2="155" stroke="#e5e7eb" />
      <text x="30" y="170" className="fig-label">102346</text>
      <text x="100" y="170" className="fig-label">Add new reporting feature</text>
      <text x="250" y="170" className="fig-label">Peer Review</text>

    </svg>
  );
};