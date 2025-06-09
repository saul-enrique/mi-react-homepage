
import React from 'react';

export const AIStudioIcon: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V5.5C8 4.67157 8.67157 4 9.5 4H14.5C15.3284 4 16 4.67157 16 5.5V7" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 17V18.5C8 19.3284 8.67157 20 9.5 20H14.5C15.3284 20 16 19.3284 16 18.5V17" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 8H5.5C4.67157 8 4 8.67157 4 9.5V14.5C4 15.3284 4.67157 16 5.5 16H7" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8H18.5C19.3284 8 20 8.67157 20 9.5V14.5C20 15.3284 19.3284 16 18.5 16H17" />
    <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.5V7" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M12 14.5V17" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 12H17" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 12H7" />
  </svg>
);
