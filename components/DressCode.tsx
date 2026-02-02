import React from 'react';

export const DressCode: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          <div className="space-y-4">
            <span className="text-gray-400 font-sans uppercase tracking-[0.2em] text-xs">O que vestir</span>
            <h2 className="text-4xl md:text-5xl font-serif text-black">Dress Code</h2>
            <p className="text-gray-600 font-sans font-light leading-relaxed max-w-2xl mx-auto">
              Para celebrarmos este momento especial em harmonia visual, pedimos gentilmente atenção a alguns detalhes sobre o traje dos convidados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* White Restriction */}
            <div className="bg-wedding-50 p-10 rounded-sm border border-wedding-200 flex flex-col items-center text-center space-y-4 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-2">
                <span className="sr-only">Branco</span>
              </div>
              <div>
                <h3 className="font-serif text-xl text-black mb-1">Branco</h3>
                <p className="text-xs font-sans text-red-400 uppercase tracking-widest font-bold">Não usar</p>
              </div>
              <p className="text-gray-500 font-sans font-light text-sm leading-relaxed">
                Reservamos o branco exclusivamente para os <strong className="text-gray-800">Noivos</strong>.
              </p>
            </div>

            {/* Black Restriction */}
            <div className="bg-wedding-50 p-10 rounded-sm border border-wedding-200 flex flex-col items-center text-center space-y-4 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-black shadow-sm flex items-center justify-center mb-2">
                 <span className="sr-only">Preto</span>
              </div>
              <div>
                <h3 className="font-serif text-xl text-black mb-1">Preto</h3>
                <p className="text-xs font-sans text-red-400 uppercase tracking-widest font-bold">Não usar</p>
              </div>
              <p className="text-gray-500 font-sans font-light text-sm leading-relaxed">
                Reservamos o preto exclusivamente para os <strong className="text-gray-800">Padrinhos</strong>.
              </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-100 mt-8">
            <h4 className="font-serif text-2xl text-black mb-2">Traje Sugerido</h4>
            <p className="font-sans text-gray-600 font-light">
              Passeio Completo / Social
            </p>
            <p className="text-gray-400 text-xs mt-2 italic">
              Sintam-se livres para usar outras cores e celebrar conosco!
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};