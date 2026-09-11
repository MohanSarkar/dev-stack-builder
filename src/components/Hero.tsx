import React from 'react';
// Import local banner image from assets folder
import bannerImg from '../assets/banner-stack.png';

interface HeroProps {
  isDarkMode: boolean;
}

export default function Hero({ isDarkMode }: HeroProps) {
  return (
    <section className="py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Text & Buttons */}
          <div className="text-center lg:text-left">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
              Build Your Ideal <br />
              <span className="text-brand-gradient">Development Stack</span>
            </h1>

            <p className={`mt-6 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            <div className="mt-8 flex flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#technologies"
                className="px-6 py-3 rounded-xl font-semibold text-white bg-brand-gradient hover:opacity-95 transition-opacity shadow-md text-sm sm:text-base"
              >
                Explore Technologies
              </a>
              <a
                href="#docs"
                className={`px-6 py-3 rounded-xl font-semibold border transition-colors text-sm sm:text-base ${isDarkMode
                    ? 'border-slate-800 text-slate-300 hover:bg-slate-900 hover:text-white'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Column: Local Image Banner */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <img
                src={bannerImg}
                alt="Development Stack Illustration"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}