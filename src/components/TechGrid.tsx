import React, { useState, useEffect } from 'react';
import { Technology } from '../Type/technology';
import TechCard from './TechCard';

interface TechGridProps {
  isDarkMode: boolean;
}

export default function TechGrid({ isDarkMode }: TechGridProps) {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Load saved stack state from localStorage
  const [selectedTechs, setSelectedTechs] = useState<Technology[]>(() => {
    const savedStack = localStorage.getItem('myStack');
    return savedStack ? JSON.parse(savedStack) : [];
  });

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Synchronize selected tech stack with localStorage
  useEffect(() => {
    localStorage.setItem('myStack', JSON.stringify(selectedTechs));
  }, [selectedTechs]);

  // Fetch technology data with a 1-second delay for smooth loading animation
  useEffect(() => {
    fetch('/data/technologies.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load JSON data');
        return res.json();
      })
      .then((data) => {
        setTechnologies(data);
        // Artificial delay of 1000ms for loading state
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((err) => {
        console.error('Data load error:', err);
        setLoading(false);
      });
  }, []);

  const handleToggleSelect = (tech: Technology) => {
    const isAlreadySelected = selectedTechs.some((item) => item.id === tech.id);
    
    if (isAlreadySelected) {
      setSelectedTechs(selectedTechs.filter((item) => item.id !== tech.id));
      showToast(`${tech.name} removed from your stack!`);
    } else {
      setSelectedTechs([...selectedTechs, tech]);
      showToast(`${tech.name} added to your stack!`);
    }
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleRemoveAll = () => {
    setSelectedTechs([]);
    showToast('All technologies removed from your stack!');
  };

  return (
    <section id="technologies" className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className={`text-3xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Explore the <span className="text-brand-gradient">Technologies</span>
          </h2>
          <p className={`mt-1 text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Add any technologies you like — each one can be added only once.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* Main Grid or Loading Screen */}
          <div className="lg:col-span-3">
            {loading ? (
              /* Custom Spinning Loader UI */
              <div className={`flex flex-col items-center justify-center py-20 rounded-2xl border ${
                isDarkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white/60 border-slate-100 shadow-sm'
              }`}>
                {/* Brand Styled Animated Spinner Logo */}
                <div className="relative flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full border-4 border-pink-500/20 border-t-pink-500 animate-spin"></div>
                  <div className="absolute w-6 h-6 rounded-lg bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-white text-[10px] font-black">
                    DS
                  </div>
                </div>

                {/* Loading Text with Dot Animation */}
                <p className={`text-sm font-semibold flex items-center space-x-1 ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  <span>Loading technologies</span>
                  <span className="animate-bounce inline-block">.</span>
                  <span className="animate-bounce inline-block [animation-delay:0.2s]">.</span>
                  <span className="animate-bounce inline-block [animation-delay:0.4s]">.</span>
                </p>
              </div>
            ) : (
              /* Actual Technology Cards Grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {technologies.map((tech) => (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    isDarkMode={isDarkMode}
                    isSelected={selectedTechs.some((item) => item.id === tech.id)}
                    onToggleSelect={handleToggleSelect}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Your Stack Sidebar */}
          <div className={`sticky top-24 p-5 rounded-2xl border transition-colors ${
            isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-100 shadow-sm'
          }`}>
            <h3 className={`text-base font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Your Stack
            </h3>
            <p className={`text-xs mt-0.5 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              {selectedTechs.length} {selectedTechs.length === 1 ? 'Technology' : 'Technologies'} Selected
            </p>

            {/* Selected Items */}
            <div className="mt-4 space-y-2.5">
              {selectedTechs.length === 0 ? (
                <div className={`p-8 text-center rounded-xl border border-dashed ${
                  isDarkMode ? 'border-slate-800 text-slate-500' : 'border-slate-200 text-slate-400'
                }`}>
                  <p className="text-xs">Your stack is empty.</p>
                </div>
              ) : (
                selectedTechs.map((tech) => (
                  <div
                    key={tech.id}
                    className={`flex items-center justify-between p-2.5 rounded-xl border ${
                      isDarkMode ? 'bg-slate-800/60 border-slate-700/50' : 'bg-slate-50 border-slate-100'
                    }`}
                  >
                    <div className="flex items-center space-x-2.5">
                      <img src={tech.iconUrl} alt={tech.name} className="w-5 h-5 object-contain" />
                      <div>
                        <p className={`text-xs font-bold leading-none ${
                          isDarkMode ? 'text-white' : 'text-slate-800'
                        }`}>
                          {tech.name}
                        </p>
                        <span className={`text-[10px] ${
                          isDarkMode ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          {tech.category}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleToggleSelect(tech)}
                      className={`p-1 rounded-md transition-colors ${
                        isDarkMode
                          ? 'text-slate-400 hover:text-white hover:bg-slate-700'
                          : 'text-slate-400 hover:text-slate-700 hover:bg-slate-200'
                      }`}
                      title="Remove"
                    >
                      ✕
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Clear All Button */}
            {selectedTechs.length > 0 && (
              <button
                onClick={handleRemoveAll}
                className="mt-4 w-full py-2 text-xs font-semibold text-rose-500 border border-rose-200 dark:border-rose-900/50 rounded-xl hover:bg-rose-500/10 transition-colors"
              >
                Remove All
              </button>
            )}
          </div>

        </div>

      </div>

      {/* Floating Bottom Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3 rounded-xl shadow-xl">
          <span className="flex items-center justify-center w-5 h-5 bg-emerald-500 text-white rounded-full text-xs font-bold">
            ✓
          </span>
          <p className="text-xs font-medium text-slate-800 dark:text-slate-200">
            {toastMessage}
          </p>
          <button
            onClick={() => setToastMessage(null)}
            className="ml-3 text-slate-400 hover:text-slate-600 text-xs font-bold"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}