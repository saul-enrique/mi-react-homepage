import React from 'react';

export const DailyDevIcon: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.12 15.47H8.5V8.53h2.38c1.71 0 2.92 1.03 2.92 2.77v2.41c0 1.74-1.21 2.76-2.92 2.76zm0-6.95H9.67v1.4h1.21c.83 0 1.23-.4 1.23-1.03v-.41c0-.52-.32-.96-1.23-.96zm5.55 4.49c-.64 0-1.12-.51-1.12-1.15s.48-1.15 1.12-1.15c.64 0 1.12.51 1.12 1.15s-.48 1.15-1.12 1.15z"/>
  </svg>
);
