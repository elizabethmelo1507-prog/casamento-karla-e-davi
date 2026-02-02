import React from 'react';
import { WEDDING_EVENT } from '../constants';
import { MapPin } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <section className="py-20 bg-wedding-50 border-t border-wedding-200">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <span className="text-gray-400 font-sans tracking-[0.3em] uppercase text-xs">Localização</span>
          <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight">
            {WEDDING_EVENT.location}
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-600 font-sans font-light">
            <MapPin size={16} />
            <p>{WEDDING_EVENT.address}</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto h-[400px] md:h-[500px] w-full bg-gray-100 shadow-xl rounded-sm overflow-hidden border border-gray-200">
          <iframe 
            src={WEDDING_EVENT.mapUrl} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa do Local - A Capela Eventos"
            className="grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>

        <div className="text-center mt-8">
           <a 
            href={WEDDING_EVENT.mapUrl} 
            target="_blank" 
            rel="noreferrer"
            className="inline-block border-b border-black pb-1 text-xs uppercase tracking-widest hover:text-gray-600 transition-colors"
          >
            Abrir no Google Maps
          </a>
        </div>
        
      </div>
    </section>
  );
};