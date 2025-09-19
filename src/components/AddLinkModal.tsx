// src/components/AddLinkModal.tsx
import React, { useState } from 'react';

// Definimos las "props" que este componente espera recibir de su padre (App.tsx)
interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { name: string; url: string }) => void;
}

export function AddLinkModal({ isOpen, onClose, onSave }: Props) {
  // Si el modal no debe estar abierto, no renderizamos nada.
  if (!isOpen) return null;

  // Estados internos para controlar los campos del formulario
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Previene que la página se recargue al enviar el form
    if (!name || !url) return; // Validación simple: no enviar si están vacíos
    
    onSave({ name, url }); // Llama a la función onSave que nos pasaron desde App.tsx
  };

  return (
    // Fondo semi-transparente que cubre toda la pantalla
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose} // Cierra el modal si se hace clic en el fondo
    >
      {/* Contenedor del Modal */}
      <div
        className="bg-slate-800 rounded-lg shadow-xl p-6 w-full max-w-md mx-4"
        onClick={(e) => e.stopPropagation()} // ¡Importante! Evita que el modal se cierre al hacer clic DENTRO de él.
      >
        <h2 className="text-2xl font-bold text-white mb-4">Añadir Nuevo Enlace</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Campo para el Nombre */}
            <div>
              <label htmlFor="link-name" className="block text-sm font-medium text-slate-300 mb-1">Nombre</label>
              <input
                id="link-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej: Google"
                className="w-full bg-slate-700 text-white p-2 rounded border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>
            {/* Campo para la URL */}
            <div>
              <label htmlFor="link-url" className="block text-sm font-medium text-slate-300 mb-1">URL</label>
              <input
                id="link-url"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://www.google.com"
                className="w-full bg-slate-700 text-white p-2 rounded border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>
          </div>
          
          {/* Botones de Acción */}
          <div className="flex justify-end gap-4 mt-6">
            <button 
              type="button" 
              onClick={onClose}
              className="px-4 py-2 rounded text-white bg-slate-600 hover:bg-slate-700 transition-colors"
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
    </div>
  );
}