import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-wedding-50 w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col rounded-lg shadow-2xl relative animate-in zoom-in-95 duration-200"
        role="dialog"
      >
        <div className="flex items-center justify-between p-6 border-b border-wedding-200 bg-white">
          <h2 className="text-2xl font-serif text-wedding-900 italic">{title}</h2>
          <button 
            onClick={onClose}
            className="p-2 text-wedding-600 hover:text-wedding-900 transition-colors hover:bg-wedding-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};
