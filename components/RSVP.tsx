import React, { useState } from 'react';
import { Button } from './ui/Button';

export const RSVP: React.FC = () => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [adultsCount, setAdultsCount] = useState<number>(1);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    // Calculate values based on requirements
    const totalAdults = parseInt(formData.get('guests') as string, 10) || 1;
    const companionsCount = totalAdults - 1;

    // Get all companion names
    const companionNames = formData.getAll('companion_name');
    const companionsString = companionNames
      .map(name => name.toString().trim())
      .filter(name => name !== '')
      .join(', ');

    // Construct payload with specific requested fields
    const data = {
      name: formData.get('name'),                 // The guest's name
      companions_count: companionsCount,          // The number of companions
      companions_names: companionsString,         // The names of the companions
      message: formData.get('message'),           // The message
      kids: formData.get('kids')                  // The number of children
    };

    try {
      const response = await fetch('https://dancingshrimp-n8n.cloudfy.live/webhook/261a092d-313e-4fb4-a07c-374800af2cfd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStep('success');
      } else {
        throw new Error('Falha no envio');
      }
    } catch (error) {
      console.error('Erro ao enviar RSVP:', error);
      alert('Ocorreu um erro ao enviar sua confirmação. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAdultsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value, 10);
    setAdultsCount(isNaN(value) ? 1 : value);
  };

  if (step === 'success') {
    return (
      <div className="text-center py-16 space-y-8 animate-in zoom-in duration-500">
        <div className="w-24 h-24 border border-black rounded-full flex items-center justify-center mx-auto">
          <span className="font-serif text-4xl italic">K&D</span>
        </div>
        <h3 className="text-4xl font-serif text-black">Confirmado!</h3>
        <p className="text-gray-600 font-sans font-light">
          Sua presença foi confirmada com sucesso.
        </p>
        <Button variant="outline" onClick={() => {
          setStep('form');
          setAdultsCount(1);
        }}>
          Enviar outra confirmação
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto py-8">
      <div className="text-center mb-10">
        <p className="text-gray-500 font-sans font-light">
          Por favor, confirme sua presença o quanto antes.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-2 group">
          <label htmlFor="name" className="block text-xs font-bold text-black uppercase tracking-widest">
            Seu Nome Completo
          </label>
          <input
            id="name"
            name="name"
            required
            type="text"
            className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-black outline-none transition-all font-serif text-lg placeholder:font-sans placeholder:text-sm"
            placeholder="Digite seu nome"
          />
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-2">
            <label htmlFor="guests" className="block text-xs font-bold text-black uppercase tracking-widest">
              Total de Adultos
            </label>
            <select
              id="guests"
              name="guests"
              value={adultsCount}
              onChange={handleAdultsChange}
              className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-black outline-none font-serif text-lg"
            >
              <option value="1">1 (Apenas eu)</option>
              <option value="2">2 (Eu + 1)</option>
              <option value="3">3 (Eu + 2)</option>
              <option value="4">4 (Eu + 3)</option>
              <option value="5">5 (Eu + 4)</option>
              <option value="6">6 (Eu + 5)</option>
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="kids" className="block text-xs font-bold text-black uppercase tracking-widest">
              Crianças
            </label>
            <select
              id="kids"
              name="kids"
              className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-black outline-none font-serif text-lg"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </select>
          </div>
        </div>

        {/* Dynamic Companion Fields */}
        {adultsCount > 1 && (
          <div className="space-y-6 animate-in slide-in-from-top-4 duration-500 fade-in">
            <div className="border-l-2 border-black pl-4 py-2 space-y-6">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-sans">
                Nome dos Acompanhantes
              </p>
              {Array.from({ length: adultsCount - 1 }).map((_, index) => (
                <div key={index} className="space-y-2">
                  <label htmlFor={`companion_${index}`} className="block text-xs font-bold text-gray-600 uppercase tracking-widest">
                    Acompanhante {index + 1}
                  </label>
                  <input
                    id={`companion_${index}`}
                    name="companion_name" 
                    required
                    type="text"
                    className="w-full px-0 py-2 bg-transparent border-b border-gray-200 focus:border-black outline-none transition-all font-serif text-base placeholder:font-sans placeholder:text-sm"
                    placeholder={`Nome do acompanhante ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-2">
          <label htmlFor="message" className="block text-xs font-bold text-black uppercase tracking-widest">
            Mensagem (Opcional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-black outline-none transition-all font-serif text-lg placeholder:font-sans placeholder:text-sm"
            placeholder="Deixe um recado para os noivos"
          />
        </div>

        <div className="pt-6">
           <Button type="submit" fullWidth variant="primary" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Confirmar Presença'}
           </Button>
        </div>
      </form>
    </div>
  );
};