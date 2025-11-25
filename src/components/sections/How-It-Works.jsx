'use client'

import { useState } from 'react'

export default function HowItWorks() {
     const [activeStep, setActiveStep] = useState(null)

     const serviceProviderSteps = [
          { number: 1, label: 'Generates QR Code', icon: "1"},
          { number: 2, label: 'Receives Tip Instantly', icon: "2"},
          { number: 3, label: 'Tracks Earnings & Withdrawals', icon: "3"},
     ]

     const tipperSteps = [
          { number: 4, label: 'Scans code', icon: "src/assets/icons/qr-code.svg" },
          { number: 5, label: 'Sends payment', icon: "src/assets/icons/hand-coins.svg" },
          { number: 6, label: 'Leaves review', icon: "src/assets/icons/star.svg" },
     ]

     // placeholder images that change based on clicked circle
     const getPhoneImage = () => {
          const images = {
               1: 'src/assets/images/HIW-SP1-Generate_QR.png',
               2: 'src/assets/images/HIW-SP2-Tips_Balance.png',
               3: 'src/assets/images/HIW-SP3-My_Withdrawal.png',
               4: 'src/assets/images/HIW-TP1-Scan_QR.png',
               5: 'src/assets/images/HIW-TP2-Payment.png',
               6: 'src/assets/images/HIW-TP3-Review.png',
          }
          return images[activeStep]
     }

     return (
          <section id="how-it-works" className="py-20 px-4 md:py-24 md:px-8">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                         <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
                              How It Works?
                         </h2>
                         <p className="text-[#C9C3FF] text-sm sm:text-base md:text-lg">
                              See how Service Providers and Tippers connect in seconds.
                         </p>
                    </div>

                    {/* Main Layout - Three columns */}
                    <div className="flex lg:grid lg:grid-cols-3 gap-4 md:gap-8 h-full">
                         {/* Left Column - Service Provider */}
                         <div className="flex-shrink-0 lg:w-full w-[95px] space-y-8 h-full">
                              <h3 className="w-full lg:text-3xl md:text-2xl text-lg font-bold mb-8 text-center">
                                   <span className="bg-gradient-to-r from-white to-[#8B3DFF] bg-clip-text text-transparent">Service Provider</span>
                              </h3>

                              <div className="flex flex-1 flex-col items-center justify-between sm:h-[520px] h-[300px]">
                                   {serviceProviderSteps.map((step) => (
                                        <button
                                             key={step.number}
                                             onClick={() => setActiveStep(prev => prev === step.number ? null : step.number)}
                                             className="w-full flex items-center gap-4 group text-right justify-center lg:justify-between"
                                        >
                                             {/* Label */}
                                             <span
                                                  className={`hidden lg:block lg:flex-1 text-lg font-semibold transition-colors text-center rounded-full py-3 bg-[#B8F3FF] bg-opacity-25
                                                       ${activeStep === step.number
                                                       ? 'text-white bg-[linear-gradient(to_bottom_right,_rgba(139,61,255,0.35)_0%,_rgba(58,124,253,0.35)_100%)] shadow-[0_0_20px_0_#b8f3ff]'
                                                       : 'text-gray-400 group-hover:text-gray-300'
                                                       }`}
                                             >
                                                  {step.label}
                                             </span>
                                             
                                             {/* Circle Button */}
                                             <div
                                                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all cursor-pointer ${activeStep === step.number
                                                       ? 'bg-purple-500 text-white scale-110 shadow-[0_0_40px_0_#b8f3ff]'
                                                       : 'bg-purple-500/30 text-purple-300 hover:bg-purple-500/50'
                                                       }`}
                                             >
                                                  {step.number}
                                             </div>
                                        </button>
                                   ))}
                              </div>
                         </div>

                         {/* Center Column - Phone Mockup */}
                         <div className="flex-1 flex justify-center items-center py-8 lg:py-0">
                              <div className="relative w-full max-w-[240px]">
                                   {/* Glow effect */}
                                   <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>

                                   {/* Phone Container */}
                                   <div 
                                        className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border-8 border-slate-700 shadow-2xl overflow-hidden w-full"
                                        style={{ aspectRatio: '375 / 813', maxHeight: '520px' }}>

                                        {/* Phone Screen - Image Display */}
                                        <div className="flex-1 w-full h-full flex items-center justify-center bg-gradient-to-b from-slate-800 to-slate-900">
                                        {getPhoneImage() ? (
                                             <img
                                                  src={getPhoneImage()}
                                                  alt={`App screen step ${activeStep}`}
                                                  className="object-cover w-full h-full"
                                             />
                                        ) : (
                                             <div className="flex inset-0 items-center justify-center text-center p-4 bg-gradient-to-b from-purple-900/50 to-slate-900/50 backdrop-blur-sm w-full h-full min-h-[160px]">
                                                  <p className="text-white text-md font-medium">
                                                       Click on the circles for preview
                                                  </p>
                                             </div>
                                        )}
                                        </div>
                                   </div>
                              </div>
                         </div>

                         {/* Right Column - Tipper */}
                         <div className="flex-shrink-0 lg:w-full w-[95px] space-y-8 h-full">
                              <h3 className="w-full lg:text-3xl md:text-2xl text-lg font-bold mb-8 text-center">
                                   <span className="bg-gradient-to-r from-[#3A7CFD] to-white bg-clip-text text-transparent">Tipper</span>
                              </h3>

                              <div className="flex flex-1 flex-col items-center justify-between sm:h-[520px] h-[300px]">
                                   {tipperSteps.map((step) => (
                                        <button
                                             key={step.number}
                                             onClick={() => setActiveStep(prev => prev === step.number ? null : step.number)}
                                             className="w-full flex items-center gap-4 group text-left justify-center lg:justify-between"
                                        >
                                             {/* Circle Button */}
                                             <div
                                                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all cursor-pointer ${activeStep === step.number
                                                       ? 'bg-purple-500 text-white scale-110 shadow-[0_0_40px_0_#b8f3ff]'
                                                       : 'bg-purple-500/30 text-purple-300 hover:bg-purple-500/50'
                                                       }`}
                                             >
                                                  <img src={step.icon} alt={step.label} className="w-6 h-6" />
                                             </div>

                                             {/* Label */}
                                             <span
                                                  className={`hidden lg:block lg:flex-1 text-lg font-semibold transition-colors text-center rounded-full py-3 bg-[#B8F3FF] bg-opacity-25 
                                                       ${activeStep === step.number
                                                       ? 'text-white bg-[linear-gradient(to_bottom_right,_rgba(139,61,255,0.35)_0%,_rgba(58,124,253,0.35)_100%)] shadow-[0_0_20px_0_#b8f3ff]'
                                                       : 'text-gray-400 group-hover:text-gray-300'
                                                       }`}
                                             >
                                                  {step.label}
                                             </span>
                                        </button>
                                   ))}
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}
