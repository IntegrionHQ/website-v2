"use client"
import React, { useEffect, useRef, useState } from 'react';

const steps = [
  {
    title: 'Connect',
    subtitle: 'Integrion auto-syncs with your workflow so you’re ready to ship instantly.',
  },
  {
    title: 'Run',
    subtitle: 'Work from your CLI. Push changes, run checks, and stay in flow without leaving your terminal.',
  },
  {
    title: 'Ship',
    subtitle: 'AI agents scan your code, simulate risks, and generate the right tests to keep things safe.',
  },
];

const ANIMATION_INTERVAL = 2200; // ms


const Workflow = () => {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeout = useRef<NodeJS.Timeout | null>(null);

  // Animation effect
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, ANIMATION_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    };
  }, []);

  // Click handler for steps
  const handleStepClick = (idx: number) => {
    setActive(idx);
    // Pause animation and resume after a delay
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % steps.length);
      }, ANIMATION_INTERVAL);
    }, 3500); // 3.5s pause after click
  };

  return (
    <div className="relative w-full mx-auto py-12">
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        {steps.map((step, idx) => (
          <React.Fragment key={step.title}>
            <div
              className="relative flex flex-col items-start justify-center flex-1 min-w-0 cursor-pointer group "
              onClick={() => handleStepClick(idx)}
              tabIndex={0}
              role="button"
              aria-label={`Go to step ${idx + 1}: ${step.title}`}
            >
              <div
                className={`w-12 h-12 flex items-center justify-center  border border-gray-500 transition-all duration-500 font-bold text-lg mb-4 z-10 group-hover:scale-105 group-hover:border-blue-300 ${
                  active === idx
                    ? 'active-step scale-110'
                    : 'border-gray-600 bg-[#181a2a] text-gray-400'
                }`}
              >
                0{idx + 1} 
              </div>
              <div className="flex flex-col items-start mb-2">
                <span
                  className={`text-center text-lg font-semibold transition-colors duration-500 ${
                    active === idx ? 'text-blue-200' : 'text-gray-200'
                  }`}
                >
                  {step.title}
                </span>
                <span
                  className={` font-graphik text-sm font-normal transition-colors duration-500 mt-1 w-4/5 ${
                    active === idx ? 'text-blue-300' : 'text-gray-400'
                  }`}
                >
                  {step.subtitle}
                </span>
              </div>
            </div>
            
            {idx < steps.length - 1 && (
              <div className="flex-0 flex items-center justify-center relative" style={{ width: '60px', minWidth: '100px', height: '0' }}>
                <div
                  className={`absolute top-0 left-0 right-0 -translate-x-1/2 h-1 rounded-full transition-all duration-500 ${
                    active === idx
                      ? 'bg-gradient-to-r from-blue-400 via-blue-200 to-transparent animate-lighting'
                      : 'bg-gray-700'
                  }`}
                  style={{ width: '100%' }}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes lighting {
          0% { filter: brightness(1.5) drop-shadow(0 0 8px #60a5fa); }
          50% { filter: brightness(2.5) drop-shadow(0 0 16px #3b82f6); }
          100% { filter: brightness(1.5) drop-shadow(0 0 8px #60a5fa); }
        }
        .animate-lighting {
          animation: lighting 1.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Workflow;
