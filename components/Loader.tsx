import React, { useEffect, useState } from 'react';

interface LoaderProps {
  ready: boolean;
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ ready, onComplete }) => {
  const [isDissipating, setIsDissipating] = useState(false);

  // Trigger dissipation when ready
  useEffect(() => {
    if (ready) {
      setIsDissipating(true);
    }
  }, [ready]);

  // Handle the dissipation animation timer
  useEffect(() => {
    if (isDissipating) {
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 1500); // 1.5s fade out duration matching the CSS animation

      return () => clearTimeout(completeTimer);
    }
  }, [isDissipating, onComplete]);

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-1000 ${isDissipating ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <style>{`
        @keyframes elegant-zoom-in {
            0% { opacity: 0; transform: scale(0.6); }
            100% { opacity: 1; transform: scale(1); }
        }
        @keyframes fade-out-dissolve {
            0% { opacity: 1; transform: scale(1); filter: blur(0px); }
            100% { opacity: 0; transform: scale(1.1); filter: blur(10px); }
        }
        .animate-enter { animation: elegant-zoom-in 2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-exit { animation: fade-out-dissolve 1.5s ease-out forwards; }
      `}</style>
      
      <div className={`w-64 h-64 relative flex justify-center items-center ${isDissipating ? 'animate-exit' : 'animate-enter'}`}>
        <img 
            src="/images/preload-logo.png" 
            alt="Logo Casamento" 
            className="w-full h-full object-contain drop-shadow-xl"
            fetchPriority="high"
            loading="eager"
        />
      </div>
    </div>
  );
};