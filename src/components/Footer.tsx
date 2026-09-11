import React from 'react';

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  return (
    <footer className={`border-t transition-colors duration-200 ${
      isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-white border-slate-100 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top Section: Branding & Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-10 border-b border-slate-200 dark:border-slate-800">
          
          {/* Brand Info (Spans 2 columns) */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-black text-sm">
                DS
              </div>
              <span className={`text-xl font-extrabold tracking-tight ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Dev<span className="text-pink-500">Stack</span>
              </span>
            </div>

            <p className="text-xs leading-relaxed max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-2 text-xs font-semibold">
              <a href="#github" className="hover:text-pink-500 transition-colors">GitHub</a>
              <a href="#twitter" className="hover:text-pink-500 transition-colors">Twitter</a>
              <a href="#linkedin" className="hover:text-pink-500 transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              PRODUCT
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-pink-500 transition-colors">Home</a></li>
              <li><a href="#technologies" className="hover:text-pink-500 transition-colors">Technologies</a></li>
              <li><a href="#projects" className="hover:text-pink-500 transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              COMPANY
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-pink-500 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-pink-500 transition-colors">Contact</a></li>
              <li><a href="#careers" className="hover:text-pink-500 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              LEGAL
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#privacy" className="hover:text-pink-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-pink-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400">
          <p>© 2026 SARKARSOFTBD. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="#privacy" className="hover:underline">Privacy</a>
            <a href="#terms" className="hover:underline">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}