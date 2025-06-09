import React from 'react';
import type { LinkItem } from '../types';

interface LinkCardProps extends Omit<LinkItem, 'id'> {}

export const LinkCard: React.FC<LinkCardProps> = ({ name, url, icon }) => {
  // icon is typed as React.ReactElement<{ className?: string }> via LinkItem
  // Access its className prop, providing a fallback if it's undefined.
  const originalIconClassName = icon.props.className || '';
  const additionalEventClassName = "group-hover:scale-110 transition-transform duration-300";

  // Combine original and additional class names correctly.
  // Ensures a single space if originalIconClassName exists and prevents leading/trailing spaces.
  const newClassName = originalIconClassName
    ? `${originalIconClassName} ${additionalEventClassName}`
    : additionalEventClassName;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 
                 bg-white/5 backdrop-blur-lg rounded-xl shadow-2xl
                 hover:bg-white/10 transition-all duration-300 ease-in-out 
                 transform hover:scale-105 hover:-translate-y-1
                 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40
                 border border-white/10 hover:border-white/20
                 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75"
      aria-label={`Link to ${name}`}
    >
      <div className="text-sky-300 group-hover:text-sky-200 transition-colors duration-300 mb-2 md:mb-3">
        {React.cloneElement(
          icon, // Pass the icon directly, its type is React.ReactElement<{ className?: string }>
          { className: newClassName } // Merge new className prop
        )}
      </div>
      <span className="text-xs sm:text-sm font-medium text-slate-100 group-hover:text-white transition-colors duration-300 text-center">
        {name}
      </span>
    </a>
  );
};
