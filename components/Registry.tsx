import React from 'react';
import { GIFTS } from '../constants';
import { Button } from './ui/Button';
import { Gift } from '../types';
import { Wine, Utensils, Coffee, Flame, Sparkles, Sun, Gift as GiftIcon, LucideIcon, Archive, Beer, Martini, Tv, Monitor } from 'lucide-react';

const IconMap: Record<string, LucideIcon> = {
  Wine: Wine,
  Utensils: Utensils,
  Coffee: Coffee,
  Flame: Flame,
  Sparkles: Sparkles,
  Sun: Sun,
  Gift: GiftIcon,
  Archive: Archive,
  Beer: Beer,
  Martini: Martini,
  Tv: Tv,
  Monitor: Monitor
};

export const Registry: React.FC = () => {
  const handleGift = (gift: Gift) => {
    if (gift.link) {
      window.open(gift.link, '_blank', 'noopener,noreferrer');
    } else {
      alert(`Obrigado! Você selecionou: ${gift.name}.`);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <p className="text-wedding-700 leading-relaxed max-w-2xl mx-auto">
          A sua presença é o nosso maior presente! Mas, se você desejar nos presentear,
          ficaremos muito felizes com qualquer escolha abaixo para nos ajudar a começar nossa nova vida.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {GIFTS.map((gift) => {
          const IconComponent = IconMap[gift.iconName] || GiftIcon;

          return (
            <div key={gift.id} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all border border-wedding-100">
              <div className="relative h-48 bg-wedding-50 flex items-center justify-center overflow-hidden">
                <div className="transform group-hover:scale-110 transition-transform duration-500 text-wedding-300">
                  <IconComponent size={64} strokeWidth={1} />
                </div>
                <div className="absolute top-2 right-2 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-wedding-800 uppercase tracking-wide border border-wedding-100">
                  {gift.category === 'Honeymoon' ? 'Lua de Mel' : gift.category === 'Home' ? 'Casa' : gift.category === 'Experience' ? 'Experiência' : gift.category}
                </div>
              </div>
              <div className="p-6 text-center space-y-3">
                <h3 className="font-serif text-xl text-wedding-900 leading-tight">{gift.name}</h3>
                <p className="text-wedding-600 font-medium">{gift.price}</p>
                <Button
                  variant="outline"
                  fullWidth
                  className="mt-2 text-xs"
                  onClick={() => handleGift(gift)}
                >
                  Presentear
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};