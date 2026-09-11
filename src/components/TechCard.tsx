import React from 'react';
import { Technology } from '../Type/technology';

interface TechCardProps {
    tech: Technology;
    isDarkMode: boolean;
    isSelected: boolean;
    onToggleSelect: (tech: Technology) => void;
}

export default function TechCard({ tech, isDarkMode, isSelected, onToggleSelect }: TechCardProps) {
    return (
        <div
            onClick={() => onToggleSelect(tech)}
            className={`flex flex-col justify-between p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${isSelected
                    ? 'border-pink-400 ring-2 ring-pink-400/20 shadow-md'
                    : isDarkMode
                        ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                        : 'bg-white border-slate-100 shadow-sm hover:shadow-md'
                }`}
        >
            {/* Top Header */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <img src={tech.iconUrl} alt={tech.name} className="w-8 h-8 object-contain" />
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${tech.badgeColor}`}>
                        {tech.badge}
                    </span>
                </div>

                <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {tech.name}
                </h3>

                <p className={`mt-2 text-xs leading-relaxed line-clamp-3 min-h-[54px] ${isDarkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                    {tech.description}
                </p>
            </div>

            {/* Footer Info & Dynamic Button */}
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center justify-between text-xs mb-3">
                    <span className={`px-2 py-0.5 rounded ${isDarkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                        }`}>
                        {tech.category}
                    </span>
                    <span className="flex items-center text-amber-500 font-semibold">
                        ★ {tech.rating}
                    </span>
                </div>

                {/* Dynamic Action Button */}
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggleSelect(tech);
                    }}
                    className={`w-full py-2 px-3 rounded-xl text-xs font-bold transition-all ${isSelected
                            ? 'bg-pink-100 text-pink-600 hover:bg-pink-200 dark:bg-pink-950/40 dark:text-pink-400'
                            : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700'
                        }`}
                >
                    {isSelected ? '✓ Added to Stack' : 'Add to Stack'}
                </button>
            </div>
        </div>
    );
}