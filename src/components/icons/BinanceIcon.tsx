
import React from 'react';

export const BinanceIcon: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 12L6 6L12 12L6 18L0 12Z" />
    <path d="M6 12L12 6L18 12L12 18L6 12Z" />
    <path d="M12 12L18 6L24 12L18 18L12 12Z" />
    <path d="M7.5 12L9 10.5L10.5 12L9 13.5L7.5 12Z" />
    <path d="M13.5 12L15 10.5L16.5 12L15 13.5L13.5 12Z" />
  </svg>
);
