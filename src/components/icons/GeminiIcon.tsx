
import React from 'react';

export const GeminiIcon: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l2.35 4.76L19 7.6l-3.54 3.43L16.7 16 12 13.36 7.3 16l1.24-4.97L5 7.6l4.65-.84L12 2zm0 9.5c.27 0 .53.03.79.08l.87 1.77 2.05.3-1.49 1.44-.35 2.04L12 16.27l-1.87 1.17-.35-2.04-1.49-1.44 2.05-.3.87-1.77c.26-.05.52-.08.79-.08zM12 11.5a2.5 2.5 0 00-2.4 1.73l-.7 3.51L12 18.41l3.1-1.67-.7-3.51A2.5 2.5 0 0012 11.5z"/>
  </svg>
);
