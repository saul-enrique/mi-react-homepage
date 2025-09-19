
import React from 'react';
import { LinkCard } from './components/LinkCard';
import type { LinkItem } from './types';
import { 
  YouTubeIcon, 
  AIStudioIcon, 
  FacebookIcon, 
  GeminiIcon, 
  PinterestIcon, 
  WhatsAppIcon,
  GoogleIcon,
  DailyDevIcon,
  BinanceIcon,
  NetflixIcon,
  PrimeVideoIcon,
  JWOrgIcon
} from './components/icons';

const App: React.FC = () => {
  // Array de objetos que representan los enlaces a mostrar en la página.
  // Cada objeto contiene id, nombre, URL y el componente de icono correspondiente.
  const links: LinkItem[] = [
    { 
      id: 'youtube', 
      name: 'YouTube', 
      url: 'https://www.youtube.com', 
      icon: <YouTubeIcon className="w-10 h-10 md:w-12 md:h-12" /> 
    },
    { 
      id: 'aistudio', 
      name: 'AI Studio', 
      url: 'https://aistudio.google.com/', 
      icon: <AIStudioIcon className="w-10 h-10 md:w-12 md:h-12" /> 
    },
    { 
      id: 'facebook', 
      name: 'Facebook', 
      url: 'https://www.facebook.com', 
      icon: <FacebookIcon className="w-10 h-10 md:w-12 md:h-12" />
    },
    { 
      id: 'gemini', 
      name: 'Gemini', 
      url: 'https://gemini.google.com/', 
      icon: <GeminiIcon className="w-10 h-10 md:w-12 md:h-12" /> 
    },
    { 
      id: 'pinterest', 
      name: 'Pinterest', 
      url: 'https://www.pinterest.com', 
      icon: <PinterestIcon className="w-10 h-10 md:w-12 md:h-12" /> 
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      url: 'https://web.whatsapp.com/',
      icon: <WhatsAppIcon className="w-10 h-10 md:w-12 md:h-12" />
    },
    {
      id: 'google',
      name: 'Google',
      url: 'https://www.google.com',
      icon: <GoogleIcon className="w-10 h-10 md:w-12 md:h-12" />
    },
    {
      id: 'dailydev',
      name: 'daily.dev',
      url: 'https://daily.dev',
      icon: <DailyDevIcon className="w-10 h-10 md:w-12 md:h-12" />
    },
    {
      id: 'binance',
      name: 'Binance',
      url: 'https://www.binance.com',
      icon: <BinanceIcon className="w-10 h-10 md:w-12 md:h-12" />
    },
    {
      id: 'netflix',
      name: 'Netflix',
      url: 'https://www.netflix.com',
      icon: <NetflixIcon className="w-10 h-10 md:w-12 md:h-12" />
    },
    {
      id: 'primevideo',
      name: 'Prime Video',
      url: 'https://www.primevideo.com',
      icon: <PrimeVideoIcon className="w-10 h-10 md:w-12 md:h-12" />
    },
    {
      id: 'jworg',
      name: 'JW.ORG',
      url: 'https://www.jw.org',
      icon: <JWOrgIcon className="w-10 h-10 md:w-12 md:h-12" />
    }
  ];

  return (
    // Contenedor principal con imagen de fondo fija y cubierta.
    <div 
      className="relative min-h-screen bg-cover bg-center bg-fixed" 
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=3')" }}
    >
      {/* Capa de superposición con color y efecto de desenfoque */}
      <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-md" />
      
      {/* Contenido principal de la página */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8 selection:bg-sky-500 selection:text-white">
        {/* Encabezado con título y subtítulo */}
        <header className="mb-10 md:mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-shadow">
            Homepage Otanisau
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mt-3 text-shadow-sm">
            paz... amor... respeto... comprencion. para el alma, para la vida. conciencia
          </p>
        </header>

        {/* Grid para mostrar las tarjetas de enlaces */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {/* Mapea el array de enlaces y renderiza un componente LinkCard por cada uno */}
          {links.map(link => (
            <LinkCard 
              key={link.id} 
              name={link.name} 
              url={link.url} 
              icon={link.icon} 
            />
          ))}
        </div>

        {/* Pie de página */}
        <footer className="absolute bottom-6 md:bottom-8 text-sm text-slate-400/80">
          otanisau ☮
        </footer>
      </main>
    </div>
  );
};

export default App;
