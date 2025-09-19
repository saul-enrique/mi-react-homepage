// src/components/LinkCard.tsx
import type { LinkItem } from '../types';

// Modificamos las props para que coincidan con la nueva flexibilidad
export function LinkCard({ name, url, icon }: Omit<LinkItem, 'id'>) {
  
  const renderIcon = () => {
    // Si el 'icon' es una cadena de texto, es una URL. Renderizamos una imagen.
    if (typeof icon === 'string') {
      return <img src={icon} alt={`${name} icon`} className="w-10 h-10 md:w-12 md:h-12" />;
    }
    // Si no, es un componente React. Lo renderizamos directamente.
    return icon;
  };

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg flex flex-col items-center justify-center gap-2 text-white hover:bg-sky-500/50 transition-colors duration-300 shadow-lg"
    >
      {renderIcon()}
      <span className="text-sm font-medium">{name}</span>
    </a>
  );
}