
import React, { useState, useEffect } from 'react';
import { LinkCard } from './components/LinkCard';
import { AddLinkModal } from './components/AddLinkModal';
import type { LinkItem } from './types';
import { 
  YouTubeIcon, 
  FacebookIcon, 
  PinterestIcon, 
  WhatsAppIcon,
  GoogleIcon,
  DailyDevIcon,
  BinanceIcon,
  NetflixIcon,
  PrimeVideoIcon,
  JWOrgIcon,
  LinkIcon
} from './components/icons';

const defaultLinks: LinkItem[] = [
  { 
    id: 'youtube', 
    name: 'YouTube', 
    url: 'https://www.youtube.com', 
    icon: <YouTubeIcon className="w-10 h-10 md:w-12 md:h-12" /> 
  },
  { 
    id: 'facebook', 
    name: 'Facebook', 
    url: 'https://www.facebook.com', 
    icon: <FacebookIcon className="w-10 h-10 md:w-12 md:h-12" />
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

const App: React.FC = () => {
  const [title, setTitle] = useState(() => {
    return localStorage.getItem('homepageTitle') || 'Homepage Otanisau';
  });
  
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingLinks, setIsEditingLinks] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [links, setLinks] = useState<LinkItem[]>(() => {
    const savedLinks = localStorage.getItem('homepageLinks');
    // The following line is updated to handle the case where savedLinks is an empty array
    if (savedLinks) {
      const parsedLinks = JSON.parse(savedLinks);
      return parsedLinks.map((link: any) => {
        const iconMap: { [key: string]: React.ReactElement } = {
          youtube: <YouTubeIcon className="w-10 h-10 md:w-12 md:h-12" />,
          facebook: <FacebookIcon className="w-10 h-10 md:w-12 md:h-12" />,
          pinterest: <PinterestIcon className="w-10 h-10 md:w-12 md:h-12" />,
          whatsapp: <WhatsAppIcon className="w-10 h-10 md:w-12 md:h-12" />,
          google: <GoogleIcon className="w-10 h-10 md:w-12 md:h-12" />,
          dailydev: <DailyDevIcon className="w-10 h-10 md:w-12 md:h-12" />,
          binance: <BinanceIcon className="w-10 h-10 md:w-12 md:h-12" />,
          netflix: <NetflixIcon className="w-10 h-10 md:w-12 md:h-12" />,
          primevideo: <PrimeVideoIcon className="w-10 h-10 md:w-12 md:h-12" />,
          jworg: <JWOrgIcon className="w-10 h-10 md:w-12 md:h-12" />,
        };
        return { ...link, icon: iconMap[link.id] || <LinkIcon className="w-10 h-10 md:w-12 md:h-12" /> };
      });
    }    
    return defaultLinks;
  });

  useEffect(() => {
    localStorage.setItem('homepageTitle', title);
  }, [title]);

  useEffect(() => {
    // We need to store a serializable version of the links, without the icon components.
    const linksToSave = links.map(({ icon, ...rest }) => rest);
    localStorage.setItem('homepageLinks', JSON.stringify(linksToSave));
  }, [links]);

  const handleTitleSave = (newTitle: string) => {
    setTitle(newTitle);
    setIsEditingTitle(false);
  };

  const handleDeleteLink = (idToDelete: string) => {
    setLinks(prevLinks => prevLinks.filter(link => link.id !== idToDelete));
  };

  const handleAddLink = ({ name, url }: { name: string; url: string }) => {
    try {
      // Extraemos el nombre del dominio de la URL que el usuario introdujo.
      // Ej: de "https://www.spotify.com/es/download/", extrae "www.spotify.com"
      const domain = new URL(url).hostname;

      // Construimos la URL del favicon de Google
      const iconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

      const newLink: LinkItem = {
        id: `link-${Date.now()}`,
        name,
        url,
        icon: iconUrl, // ¡Guardamos la URL del icono en lugar de un componente!
      };

      setLinks(prevLinks => [...prevLinks, newLink]);
      setIsModalOpen(false);

    } catch (error) {
      // Si la URL es inválida (ej: "hola"), el `new URL(url)` fallará.
      console.error("URL inválida:", error);
      alert("Por favor, introduce una URL válida (ej: https://www.ejemplo.com)");
    }
  };

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
          {isEditingTitle ? (
            <input
              type="text"
              defaultValue={title}
              onBlur={(e) => handleTitleSave(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleTitleSave(e.currentTarget.value); }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold bg-transparent text-white text-center outline-none border-b-2 border-sky-500"
              autoFocus
            />
          ) : (
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white cursor-pointer hover:opacity-80 transition-opacity text-shadow"
              onClick={() => setIsEditingTitle(true)}
            >
              {title}
            </h1>
          )}
          <p className="text-lg md:text-xl text-slate-300 mt-3 text-shadow-sm">
            paz... amor... respeto... comprencion. para el alma, para la vida. conciencia
          </p>
        </header>

        {isEditingLinks && (
          <div className="mb-8">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-sky-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-sky-600 transition-colors"
            >
              + Add New Link
            </button>
          </div>
        )}

        {/* Grid para mostrar las tarjetas de enlaces */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {links.map(link => (
            <div key={link.id} className="relative">
              <LinkCard 
                name={link.name} 
                url={link.url} 
                icon={link.icon} 
              />
              {isEditingLinks && (
                <button 
                  onClick={() => handleDeleteLink(link.id)}
                  className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold hover:bg-red-600 transition-all"
                  aria-label={`Delete ${link.name}`}
                >
                  X
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Pie de página */}
        <footer className="absolute bottom-6 md:bottom-8 text-sm text-slate-400/80 flex items-center space-x-4">
          <span>otanisau ☮</span>
          <button 
            onClick={() => setIsEditingLinks(!isEditingLinks)}
            className="bg-slate-700/50 hover:bg-slate-600/50 text-white font-semibold py-1 px-3 rounded-lg text-xs transition-colors"
          >
            {isEditingLinks ? 'Finish Editing' : 'Edit Links'}
          </button>
        </footer>
      </main>

      <AddLinkModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddLink}
      />
    </div>
  );
};

export default App;
