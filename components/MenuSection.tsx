import React from 'react';
import { Button } from './ui/Button';

interface MenuSectionProps {
  onRegistryClick: () => void;
  onGodparentsClick: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onRegistryClick, onGodparentsClick }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-wedding-50 border border-wedding-200 p-12 text-center space-y-6 hover:shadow-lg transition-all duration-500 group">
            <h3 className="font-serif text-2xl text-black">Lista de Presentes</h3>
            <p className="font-sans text-gray-500 font-light">
              Escolhemos cada item com muito carinho para a nossa casa nova.
            </p>
            <Button variant="outline" onClick={onRegistryClick} className="group-hover:bg-black group-hover:text-white">
              Ver Lista
            </Button>
          </div>

          <div className="bg-wedding-50 border border-wedding-200 p-12 text-center space-y-6 hover:shadow-lg transition-all duration-500 group">
            <h3 className="font-serif text-2xl text-black">Área dos Padrinhos</h3>
            <p className="font-sans text-gray-500 font-light">
              Informações exclusivas e especiais para nossos queridos padrinhos.
            </p>
            <Button variant="outline" onClick={onGodparentsClick} className="group-hover:bg-black group-hover:text-white">
              Acessar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};