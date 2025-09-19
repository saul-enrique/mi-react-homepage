// src/components/AddLinkModal.tsx
import React, { useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { name: string; url: string }) => void;
}

export function AddLinkModal({ isOpen, onClose, onSave }: Props) {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !url) return;
    onSave({ name, url });
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      {/* ===== INICIO DE LOS CAMBIOS DE ESTILO ===== */}
      <div
        className="bg-slate-800/50 backdrop-blur-md border border-slate-500/30 rounded-lg shadow-xl p-6 w-full max-w-md mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-white mb-4">Añadir Nuevo Enlace</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="link-name" className="block text-sm font-medium text-slate-300 mb-1">Nombre</label>
              <input
                id="link-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej: Google"
                className="w-full bg-slate-900/50 text-white p-2 rounded border border-slate-600/50 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>
            <div>
              <label htmlFor="link-url" className="block text-sm font-medium text-slate-300 mb-1">URL</label>
              <input
                id="link-url"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://www.google.com"
                className="w-full bg-slate-900/50 text-white p-2 rounded border border-slate-600/50 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>
          </div>
          
          <div className="flex justify-end gap-4 mt-6">
            <button 
              type="button" 
              onClick={onClose}
              className="px-4 py-2 rounded text-white bg-slate-600/80 hover:bg-slate-700 transition-colors"
            >
              Cancelar
            </button>
            <button 
              type="submit"
              className="px-4 py-2 rounded text-white bg-sky-500 hover:bg-sky-600 transition-colors"
            >
              Guardar Enlace
            </button>
          </div>
        </form>
      </div>
      {/* ===== FIN DE LOS CAMBIOS DE ESTILO ===== */}
    </div>
  );
}