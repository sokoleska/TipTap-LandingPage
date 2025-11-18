'use client'

import { useState } from 'react'

export default function HowItWorks() {
     const [activeStep, setActiveStep] = useState(null)

     const serviceProviderSteps = [
          { number: 1, label: 'Generates QR Code' },
          { number: 2, label: 'Receives Tip Instantly' },
          { number: 3, label: 'Tracks Earnings & Withdrawals' },
     ]

     const tipperSteps = [
          { number: 4, label: 'Scans code' },
          { number: 5, label: 'Sends payment' },
          { number: 6, label: 'Leaves review' },
     ]

     // Map active step to image - these are placeholder images that change based on clicked circle
     const getPhoneImage = () => {
          const images = {
               1: 'src/assets/images/HIW-SP1-Generate_QRcode.jpg',
               2: 'src/assets/images/HIW-SP2-Tips_Balance.png',
               3: 'src/assets/images/HIW-SP3-My_Withdrawal.png',
               4: 'src/assets/images/HIW-TP1-Scan_QR.png',
               5: 'src/assets/images/HIW-TP2-Payment.png',
               6: 'src/assets/images/HIW-TP3-Review.png',
          }
          return images[activeStep]
     }

     return (
          <section id="how-it-works" className="py-20">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                         <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                              How It Works?
                         </h2>
                         <p className="text-[#C9C3FF] text-lg">
                              See how Service Providers and Tippers connect in seconds.
                         </p>
                    </div>

                    {/* Main Layout - Three columns */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
                         {/* Left Column - Service Provider */}
                         <div className="space-y-8 h-full">
                              <h3 className="text-3xl font-bold mb-12 text-center">
                                   <span className="bg-gradient-to-r from-white to-[#8B3DFF] bg-clip-text text-transparent">Service Provider</span>
                              </h3>

                              <div className="flex flex-col justify-between h-[calc(100%-80px)]">
                                   {serviceProviderSteps.map((step) => (
                                        <button
                                             key={step.number}
                                             onClick={() => setActiveStep(prev => prev === step.number ? null : step.number)}
                                             className="w-full flex items-center gap-4 group text-right justify-between"
                                        >
                                             {/* Label */}
                                             <span
                                                  className={`text-lg font-semibold transition-colors flex-1 text-center rounded-full py-3 bg-[#B8F3FF] bg-opacity-25
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
                         <div className="flex justify-center items-center h-full py-8 lg:py-0">
                              <div className="relative w-full h-full max-w-sm">
                                   {/* Glow effect */}
                                   <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>

                                   {/* Phone Container */}
                                   <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border-8 border-slate-700 shadow-2xl overflow-hidden w-full">
                                        {/* Phone Status Bar */}
                                        

                                        {/* Phone Screen - Image Display */}
                                        <div className="flex-1 w-full h-full flex items-center justify-center bg-gradient-to-b from-slate-800 to-slate-900">
                                        {getPhoneImage() ? (
                                             <img
                                                  src={getPhoneImage()}
                                                  alt={`App screen step ${activeStep}`}
                                                  className="object-cover w-full h-full"
                                             />
                                        ) : (
                                             <div className="flex inset-0 items-center justify-center text-center p-4 bg-gradient-to-b from-purple-900/50 to-slate-900/50 backdrop-blur-sm w-full h-[796px]">
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
                         <div className="space-y-8 h-full">
                              <h3 className="text-3xl font-bold mb-12 text-center">
                                   <span className="bg-gradient-to-r from-[#3A7CFD] to-white bg-clip-text text-transparent">Tipper</span>
                              </h3>

                              <div className="flex flex-col justify-between h-[calc(100%-80px)]">
                                   {tipperSteps.map((step) => (
                                        <button
                                             key={step.number}
                                             onClick={() => setActiveStep(prev => prev === step.number ? null : step.number)}
                                             className="w-full flex items-center gap-4 group text-left"
                                        >
                                             {/* Circle Button */}
                                             <div
                                                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all cursor-pointer ${activeStep === step.number
                                                       ? 'bg-purple-500 text-white scale-110 shadow-[0_0_40px_0_#b8f3ff]'
                                                       : 'bg-purple-500/30 text-purple-300 hover:bg-purple-500/50'
                                                       }`}
                                             >
                                                  {step.number}
                                             </div>

                                             {/* Label */}
                                             <span
                                                  className={`text-lg font-semibold transition-colors flex-1 text-center rounded-full py-3 bg-[#B8F3FF] bg-opacity-25 
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
