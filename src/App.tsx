import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechGrid from './components/TechGrid';

export default function App() {
  // Global theme state for dark/light mode toggle
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <main>
        {/* Hero Section */}
        <Hero isDarkMode={isDarkMode} />
        
        {/* Technologies Grid & Your Stack Section */}
        <TechGrid isDarkMode={isDarkMode} />
      </main>
    </div>
  );
}