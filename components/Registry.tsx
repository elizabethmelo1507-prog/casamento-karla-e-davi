import React, { useState } from 'react';
import { GIFTS } from '../constants';
import { Gift } from '../types';
import {
  Wine, Utensils, Coffee, Flame, Sparkles, Sun, Gift as GiftIcon,
  LucideIcon, Archive, Beer, Tv, Monitor, X, CreditCard, Copy, Check
} from 'lucide-react';

// Martini não existe no lucide — usando um fallback
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
  Martini: Wine,
  Tv: Tv,
  Monitor: Monitor,
};

const PIX_KEY = '00020126580014BR.GOV.BCB.PIX01364c006e4f-fa2c-4d8c-abf9-7664570f4e5e5204000053039865802BR5919Karla Gentil Vieira6009SAO PAULO62140510Roo0HwCB1H6304B9E0';
const PIX_BENEFICIARY = 'Karla Gentil Vieira';

type ModalStep = 'choose' | 'pix';

export const Registry: React.FC = () => {
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);
  const [step, setStep] = useState<ModalStep>('choose');
  const [copied, setCopied] = useState(false);

  const openModal = (gift: Gift) => {
    setSelectedGift(gift);
    setStep('choose');
    setCopied(false);
  };

  const closeModal = () => {
    setSelectedGift(null);
  };

  const handleCreditCard = () => {
    if (selectedGift?.link) {
      window.open(selectedGift.link, '_blank', 'noopener,noreferrer');
    }
    closeModal();
  };

  const handlePix = () => {
    setStep('pix');
  };

  const copyPixKey = () => {
    navigator.clipboard.writeText(PIX_KEY).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
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
                <button
                  onClick={() => openModal(gift)}
                  className="mt-2 w-full border border-wedding-300 text-wedding-800 text-xs uppercase tracking-widest py-2 px-4 rounded hover:bg-wedding-50 transition-colors duration-200"
                >
                  Presentear
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedGift && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative overflow-hidden">

            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
            >
              <X size={20} />
            </button>

            {/* STEP: Escolha de pagamento */}
            {step === 'choose' && (
              <div className="p-8 text-center space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Presentear</p>
                  <h3 className="font-serif text-2xl text-gray-900">{selectedGift.name}</h3>
                  <p className="text-wedding-600 font-semibold text-lg mt-1">{selectedGift.price}</p>
                </div>

                <p className="text-gray-500 text-sm">Como você prefere pagar?</p>

                <div className="grid grid-cols-2 gap-4">
                  {/* PIX */}
                  <button
                    onClick={handlePix}
                    className="flex flex-col items-center gap-3 p-5 border-2 border-wedding-200 rounded-xl hover:border-wedding-500 hover:bg-wedding-50 transition-all group"
                  >
                    <img src="/images/qrcode-pix.jpg" alt="Pix" className="w-10 h-10 object-contain rounded opacity-80 group-hover:opacity-100 transition-opacity" />
                    <span className="font-semibold text-gray-800 text-sm">Pix</span>
                    <span className="text-xs text-gray-400">Transferência instantânea</span>
                  </button>

                  {/* Cartão */}
                  <button
                    onClick={handleCreditCard}
                    className="flex flex-col items-center gap-3 p-5 border-2 border-wedding-200 rounded-xl hover:border-wedding-500 hover:bg-wedding-50 transition-all group"
                  >
                    <CreditCard size={40} strokeWidth={1.2} className="text-wedding-400 group-hover:text-wedding-600 transition-colors" />
                    <span className="font-semibold text-gray-800 text-sm">Cartão de Crédito</span>
                    <span className="text-xs text-gray-400">Link de pagamento seguro</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP: Pix */}
            {step === 'pix' && (
              <div className="p-8 text-center space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Pagamento via Pix</p>
                  <h3 className="font-serif text-xl text-gray-900">{selectedGift.name}</h3>
                  <p className="text-wedding-600 font-bold text-2xl mt-1">{selectedGift.price}</p>
                </div>

                {/* QR Code */}
                <div className="flex justify-center">
                  <div className="border-4 border-wedding-100 rounded-xl p-2 inline-block">
                    <img
                      src="/images/qrcode-pix.jpg"
                      alt="QR Code Pix"
                      className="w-44 h-44 object-contain"
                    />
                  </div>
                </div>

                <div className="text-sm text-gray-600 space-y-1">
                  <p className="font-medium text-gray-800">Beneficiária</p>
                  <p>{PIX_BENEFICIARY}</p>
                </div>

                {/* Chave Pix */}
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-gray-400">Chave Pix (código copia e cola)</p>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-left">
                    <p className="text-xs text-gray-500 break-all font-mono leading-relaxed">
                      {PIX_KEY.slice(0, 60)}…
                    </p>
                  </div>
                  <button
                    onClick={copyPixKey}
                    className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-wedding-800 text-white text-xs uppercase tracking-widest rounded-lg hover:bg-wedding-700 transition-colors"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? 'Copiado!' : 'Copiar chave Pix'}
                  </button>
                </div>

                <button
                  onClick={() => setStep('choose')}
                  className="text-xs text-gray-400 hover:text-gray-600 underline transition-colors"
                >
                  ← Voltar às opções
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};