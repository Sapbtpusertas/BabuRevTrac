import React from 'react';

interface FigureWrapperProps {
  caption: string;
  children: React.ReactNode;
}

export const FigureWrapper: React.FC<FigureWrapperProps> = ({ caption, children }) => {
  return (
    <figure className="my-8 flex flex-col items-center" aria-label={caption}>
      <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm w-full max-w-2xl">
        {children}
      </div>
      <figcaption className="mt-3 text-sm text-center text-gray-600 italic max-w-xl">{caption}</figcaption>
    </figure>
  );
};