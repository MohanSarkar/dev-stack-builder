import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  // Global Theme State
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  // Toggle Theme Handler
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Sticky Header Navigation Component */}
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      {/* Hero Banner Section */}
      <main>
        <Hero isDarkMode={isDarkMode} />
      </main>
    </div>
  );
}