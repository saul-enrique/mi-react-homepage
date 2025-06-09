import React from 'react';

export interface LinkItem {
  id: string;
  name: string;
  url: string;
  icon: React.ReactElement<{ className?: string }>;
}