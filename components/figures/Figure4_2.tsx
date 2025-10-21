import React from 'react';

export const Figure4_2: React.FC = () => {
  const Box = ({ x, y, text }: { x: number, y: number, text: string }) => (
    <g>
      <rect x={x} y={y} width="100" height="30" fill="#eff6ff" stroke="#93c5fd" rx="3" />
      <text x={x + 50} y={y + 18} textAnchor="middle" style={{ fontFamily: 'sans-serif', fontSize: '10px' }}>{text}</text>
    </g>
  );
  const Arrow = ({ x1, y1, x2, y2 }: { x1: number, y1: number, x2: number, y2: number }) => (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrow42)" />
      <circle cx={(x1 + x2) / 2} cy={(y1 + y2) / 2 + 15} r="10" fill="#d1fae5" stroke="#34d399" />
      <text x={(x1 + x2) / 2} y={(y1 + y2) / 2 + 18} textAnchor="middle" style={{ fontFamily: 'sans-serif', fontSize: '8px', fill: '#065f46' }}>DS</text>
    </g>
  );

  return (
    <svg viewBox="0 0 650 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" aria-labelledby="fig4-2-title">
      <title id="fig4-2-title">Sample Approval Workflow Diagram</title>
      <defs>
        <marker id="arrow42" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#6b7280" />
        </marker>
        <style>{`
          .fig-label { font-family: sans-serif; font-size: 8px; fill: #4b5563; }
        `}</style>
      </defs>
      
      <Box x={10} y={20} text="In Development" />
      <Arrow x1={110} y1={35} x2={120} y2={35} />
      <text x={75} y={75} textAnchor="middle" className="fig-label">Digital Signature</text>

      <Box x={120} y={20} text="Peer Review" />
      <Arrow x1={220} y1={35} x2={230} y2={35} />

      <Box x={230} y={20} text="Approved for QA" />
      <Arrow x1={330} y1={35} x2={340} y2={35} />
      
      <Box x={340} y={20} text="UAT Signoff" />
      <Arrow x1={440} y1={35} x2={450} y2={35} />

      <Box x={450} y={20} text="Approved for Prod" />
      <Arrow x1={550} y1={35} x2={560} y2={35} />
      
      <Box x={560} y={20} text="Complete" />

    </svg>
  );
};