import React from 'react';

export const GoogleIcon: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.19,4.73C14.03,4.73 15.69,5.36 16.95,6.57L19.02,4.5C17.14,2.73 14.92,1.73 12.19,1.73C7.03,1.73 3,6.17 3,12C3,17.83 7.03,22.27 12.19,22.27C17.9,22.27 21.7,18.35 21.7,11.33C21.7,10.77 21.53,10.38 21.35,11.1Z"/>
  </svg>
);
