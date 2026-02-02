import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

import { Hero } from './components/Hero';
import { Events } from './components/Events';
import { Location } from './components/Location';
import { Registry } from './components/Registry';
import { Godparents } from './components/Godparents';
import { RSVP } from './components/RSVP';
import { Modal } from './components/ui/Modal';
import { Loader } from './components/Loader';
import { MenuSection } from './components/MenuSection';
import { Countdown } from './components/Countdown';
import { DressCode } from './components/DressCode';

const App: React.FC = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  
  const [activeModal, setActiveModal] = useState<'registry' | 'godparents' | 'rsvp' | null>(null);

  // Minimum time for the loader (logo animation duration ~2.5s)
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Failsafe: If images take too long (e.g., > 3.5s) or fail, force the app to load
  useEffect(() => {
    const failsafeTimer = setTimeout(() => {
      if (!heroImageLoaded) {
        console.warn("Image loading timed out, forcing app display.");
        setHeroImageLoaded(true);
      }
    }, 3500);
    return () => clearTimeout(failsafeTimer);
  }, [heroImageLoaded]);

  // Prevent scrolling while loader is visible
  useEffect(() => {
    if (showLoader) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showLoader]);

  const closeModal = () => setActiveModal(null);

  // The loader is ready to dissipate when:
  // 1. The minimum animation time has passed AND
  // 2. The hero image has reported it's loaded (or timed out)
  const isLoaderReady = minTimeElapsed && heroImageLoaded;

  return (
    <>
      {showLoader && (
        <Loader 
          ready={isLoaderReady} 
          onComplete={() => setShowLoader(false)} 
        />
      )}
      
      <div className={`min-h-screen bg-white text-black selection:bg-gray-200 transition-opacity duration-1000 ${showLoader ? 'opacity-0' : 'opacity-100'}`}>
        
        <main>
          {/* Hero Section with Video */}
          <Hero onImageLoad={() => setHeroImageLoaded(true)} />
          
          <div className="relative z-20 bg-white shadow-2xl">
            
            {/* 1. Countdown Section */}
            <Countdown />

            {/* 2. Events Schedule - RSVP Trigger is here now */}
            <Events onRsvpClick={() => setActiveModal('rsvp')} />

            {/* 3. Location Map */}
            <Location />

            {/* 4. Dress Code Section */}
            <DressCode />
            
            {/* 5. Menu Section for Godparents & Registry (Moved here) */}
            <MenuSection 
              onGodparentsClick={() => setActiveModal('godparents')}
              onRegistryClick={() => setActiveModal('registry')}
            />
            
            {/* Bottom Section - Purely Decorative now */}
            <section className="py-24 px-4 bg-black text-white text-center">
              <div className="max-w-3xl mx-auto space-y-10">
                <Heart className="mx-auto text-white/80" size={32} />
                <h2 className="text-3xl md:text-5xl font-serif leading-tight">
                  Sua presença é essencial
                </h2>
                <div className="w-16 h-px bg-white/30 mx-auto"></div>
                <p className="text-gray-400 font-sans font-light text-lg">
                  Mal podemos esperar para viver este momento único ao seu lado.
                </p>
              </div>
            </section>

            <footer className="py-10 bg-black border-t border-gray-900 text-gray-500 text-center text-xs uppercase tracking-[0.2em]">
              <p>Karla & Davi</p>
            </footer>
          </div>
        </main>

        {/* Modals */}
        <Modal 
          isOpen={activeModal === 'registry'} 
          onClose={closeModal} 
          title="Lista de Presentes"
        >
          <Registry />
        </Modal>

        <Modal 
          isOpen={activeModal === 'godparents'} 
          onClose={closeModal} 
          title="Área dos Padrinhos"
        >
          <Godparents />
        </Modal>

        <Modal 
          isOpen={activeModal === 'rsvp'} 
          onClose={closeModal} 
          title="RSVP"
        >
          <RSVP />
        </Modal>
      </div>
    </>
  );
};

export default App;