import React from 'react';

export default function CardFeature({ title, icon }) {
     return (
          <div className="relative group">
               {/* Card background with glow effect */}
               <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 to-purple-900/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

               {/* Card content */}
               <div 
                    className="relative rounded-[40px] p-8 h-56 flex items-center justify-center 
                         bg-[#1d0a46] shadow-[inset_0px_0px_40px_10px_rgba(139,61,225,0.7)]
                         hover:shadow-[inset_0_0_60px_0_rgba(139,61,225,90%),0px_0px_40px_10px_rgba(184,243,255,0.6)] transition-all duration-300">
                    {/* Title centered vertically & horizontally */}
                    <h3 className="text-white text-lg font-semibold text-center">
                         {title}
                    </h3>

                    {/* Icon positioned independently at bottom-right with fixed size */}
                    <div className="absolute bottom-4 right-4 pointer-events-none">
                         <img
                              src={icon}
                              alt={title}
                              className="object-contain opacity-40 group-hover:opacity-60 transition-opacity duration-200"
                         />
                    </div>
               </div>
          </div>
     );
}