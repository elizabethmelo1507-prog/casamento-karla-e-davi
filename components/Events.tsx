import React from 'react';
import { TIMELINE_ITEMS, WEDDING_EVENT } from '../constants';
import { Button } from './ui/Button';
import { CalendarPlus, GlassWater, Music, Heart, MapPin } from 'lucide-react';

interface EventsProps {
  onRsvpClick: () => void;
}

export const Events: React.FC<EventsProps> = ({ onRsvpClick }) => {
  
  const getIcon = (type?: string) => {
    switch(type) {
      case 'Glass': return <GlassWater size={24} />;
      case 'Ring': return <Heart size={24} />; 
      case 'Music': return <Music size={24} />;
      default: return <Heart size={24} />;
    }
  };

  return (
    <section className="py-24 px-4 bg-white relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <span className="text-gray-400 font-sans uppercase tracking-[0.2em] text-xs">A Programação</span>
          <h2 className="text-4xl md:text-5xl font-serif text-black">Eventos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TIMELINE_ITEMS.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 border border-gray-100 bg-gray-50/50 rounded-sm hover:shadow-lg transition-all duration-300 group">
              
              <div className="mb-6 p-4 rounded-full bg-white border border-gray-200 text-gray-800 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                {getIcon(item.icon)}
              </div>

              <h3 className="font-serif text-2xl text-black mb-2">{item.title}</h3>
              
              <div className="space-y-1 mb-6">
                <p className="font-sans text-sm font-bold uppercase tracking-widest text-wedding-600">
                  {item.date}
                </p>
                <p className="font-sans text-lg font-light text-black">
                  {item.time}
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 mb-4 text-gray-500 text-xs uppercase tracking-wider border-t border-b border-gray-200 py-2 w-full max-w-[200px]">
                <MapPin size={12} />
                <span className="truncate">{item.location}</span>
              </div>

              <p className="font-sans text-gray-500 font-light text-sm leading-relaxed max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center space-y-4 max-w-md mx-auto">
          <Button fullWidth onClick={onRsvpClick}>
            Confirmar Presença na Cerimônia
          </Button>
          
          {WEDDING_EVENT.googleCalendarLink && (
            <Button 
              fullWidth 
              variant="outline" 
              onClick={() => window.open(WEDDING_EVENT.googleCalendarLink, '_blank')}
              className="flex items-center justify-center gap-2"
            >
              <CalendarPlus size={16} />
              Adicionar à Agenda
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};