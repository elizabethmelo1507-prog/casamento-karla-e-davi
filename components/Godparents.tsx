import React from 'react';
import { GODMOTHERS, GODFATHERS } from '../constants';

export const Godparents: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4 pt-4">
        <h3 className="text-4xl font-serif text-black">Nossos Padrinhos</h3>
        <p className="text-gray-500 font-sans font-light max-w-xl mx-auto leading-relaxed">
          Vocês são as pessoas que escolhemos para estar ao nosso lado no altar e na vida. 
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-4xl mx-auto">
        {/* Madrinhas Column */}
        <div className="space-y-8">
          <div className="text-center border-b border-gray-200 pb-4">
            <h4 className="font-serif text-2xl text-black italic">Madrinhas</h4>
          </div>
          <ul className="space-y-4 text-center">
            {GODMOTHERS.map((name, index) => (
              <li key={index} className="font-sans font-light text-gray-700 text-lg hover:text-black transition-colors">
                {name}
              </li>
            ))}
          </ul>
        </div>

        {/* Padrinhos Column */}
        <div className="space-y-8">
          <div className="text-center border-b border-gray-200 pb-4">
             <h4 className="font-serif text-2xl text-black italic">Padrinhos</h4>
          </div>
          <ul className="space-y-4 text-center">
            {GODFATHERS.map((name, index) => (
              <li key={index} className="font-sans font-light text-gray-700 text-lg hover:text-black transition-colors">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 p-8 text-center space-y-6 mt-12 rounded-sm">
        <h4 className="font-serif text-2xl text-black">Informações Importantes</h4>
        <div className="inline-block text-left max-w-md">
          <ul className="text-gray-600 space-y-4 text-sm font-sans font-light list-none">
            <li className="flex gap-3">
              <span className="text-black font-bold">•</span>
              <span>Chegada sugerida: 30 minutos antes da cerimônia (18:00).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-black font-bold">•</span>
              <span>Traje dos Padrinhos: Terno preto, camisa branca e gravata tradicional preta.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-black font-bold">•</span>
              <span>Traje das Madrinhas: Vestido preto.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};