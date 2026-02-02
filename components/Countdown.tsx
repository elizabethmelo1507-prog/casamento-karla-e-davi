import React, { useState, useEffect } from 'react';

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTargetDate = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      
      // Target: April 18, 18:30 Manaus Time (UTC-4) -> 22:30 UTC
      // Month index 3 = April
      let target = new Date(Date.UTC(currentYear, 3, 18, 22, 30, 0));
      
      // If this date has passed, target next year
      if (target.getTime() < now.getTime()) {
        target = new Date(Date.UTC(currentYear + 1, 3, 18, 22, 30, 0));
      }
      
      return target.getTime();
    };

    const TARGET_DATE = calculateTargetDate();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = TARGET_DATE - now;

      if (distance < 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center mx-4 md:mx-8">
      <span className="text-4xl md:text-6xl font-serif text-black font-light tabular-nums">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 mt-2">
        {label}
      </span>
    </div>
  );

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 font-sans uppercase tracking-[0.2em] text-xs mb-10">
          Contagem Regressiva
        </p>
        <div className="flex flex-wrap justify-center items-center">
          <TimeUnit value={timeLeft.days} label="Dias" />
          <div className="h-8 w-px bg-gray-200 hidden md:block"></div>
          <TimeUnit value={timeLeft.hours} label="Horas" />
          <div className="h-8 w-px bg-gray-200 hidden md:block"></div>
          <TimeUnit value={timeLeft.minutes} label="Min" />
          <div className="h-8 w-px bg-gray-200 hidden md:block"></div>
          <TimeUnit value={timeLeft.seconds} label="Seg" />
        </div>
      </div>
    </section>
  );
};