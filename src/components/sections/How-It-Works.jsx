'use client'

import { useState } from 'react'

export default function HowItWorks() {
     const [activeStep, setActiveStep] = useState(null)

     const serviceProviderSteps = [
          { number: 1, label: 'Generates QR Code', icon: "1" },
          { number: 2, label: 'Receives Tip Instantly', icon: "2" },
          { number: 3, label: 'Tracks Earnings & Withdrawals', icon: "3" },
     ]

     const tipperSteps = [
          { number: 4, label: 'Scans code', icon: "src/assets/icons/qr-code.svg" },
          { number: 5, label: 'Sends payment', icon: "src/assets/icons/hand-coins.svg" },
          { number: 6, label: 'Leaves review', icon: "src/assets/icons/star.svg" },
     ]

     // placeholder images that change based on clicked circle
     const getPhoneImage = () => {
          const images = {
               1: 'src/assets/images/HIW-SP1.jpg',
               2: 'src/assets/images/HIW-SP2.jpg',
               3: 'src/assets/images/HIW-SP3.jpg',
               4: 'src/assets/images/HIW-TP1-Scan_QR.png',
               5: 'src/assets/images/HIW-TP2-Payment.png',
               6: 'src/assets/images/HIW-TP3-Review.png',
          }
          return images[activeStep]
     }

     return (
          <section id="how-it-works" className="my-20 md:my-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-h-dvh">
               <div >
                    {/* Section Header */}
                    <div className="text-center mb-10">
                         <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
                              How It Works?
                         </h2>
                         <p className="text-[#B4C2E8] text-sm sm:text-base md:text-lg">
                              See how Service Providers and Tippers share gratitude in seconds.
                         </p>
                    </div>

                    <div className='flex flex-row justify-between'>
                         <div className='lg:w-[380px]'>
                              <h3 className="sm:w-full lg:text-3xl md:text-2xl text-lg font-bold mb-8 text-center w-[60px]">
                                   <span className="text-white leading-tight mb-4 [text-shadow:0_0_12px_#FF4E4E]">Service Provider</span>
                              </h3>
                         </div>
                         <div className='lg:w-[380px]'>
                              <h3 className="w-full lg:text-3xl md:text-2xl text-lg font-bold mb-8 text-center">
                                   <span className="text-white leading-tight mb-4 [text-shadow:0_0_12px_#3A7CFD]">Tipper</span>
                              </h3>
                         </div>
                    </div>

                    {/* Main Layout - Three columns */}
                    <div className="flex lg:grid lg:grid-cols-3 gap-4 md:gap-8 h-full">

                         {/* Left Column - Service Provider */}
                         <div className="flex-shrink-0 lg:w-full w-[90px] space-y-8 h-full">

                              <div className="flex flex-1 flex-col items-center justify-between sm:h-[520px] h-[300px]">
                                   {serviceProviderSteps.map((step) => (
                                        <button
                                             key={step.number}
                                             onClick={() => setActiveStep(prev => prev === step.number ? null : step.number)}
                                             className="w-full flex items-center gap-4 group  justify-center lg:justify-between"
                                        >
                                             {/* Label */}
                                             <span
                                                  className={`hidden lg:block lg:flex-1 text-lg font-semibold text-center rounded-full py-3  border border-[#FF4E4E]/40 text-white transition-all scale-100
                                                       ${activeStep === step.number
                                                            ? 'bg-[#FF4E4E]/40 shadow-[0_0_18px_0_#FF4E4E]'
                                                            : 'bg-gradient-to-r from-[#FF4E4E]/20 to-[#8B1E27]/40 group-hover:text-gray-300'
                                                       }`}
                                             >
                                                  {step.label}
                                             </span>

                                             {/* Circle Button */}
                                             <div
                                                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all cursor-pointer bg-[#d71921] text-white ${activeStep === step.number
                                                       ? ' scale-110 shadow-[0_0_40px_0_#b8f3ff]'
                                                       : 'shadow-[0_0_15px_0_#b8f3ff] '
                                                       }`}
                                             >
                                                  {step.number}
                                             </div>
                                        </button>
                                   ))}
                              </div>
                         </div>

                         {/* Center Column - Phone Mockup */}
                         <div className="flex-1 flex justify-center items-center">
                              <div className="relative w-full max-w-[240px]">
                                   {/* Glow effect */}
                                   <div className="absolute inset-0 bg-gradient-to-br from-[#d71921] to-[#0077B6] rounded-3xl blur-2xl opacity-50"></div>

                                   {/* Phone Container */}
                                   <div
                                        className="relative rounded-3xl border-8 border-slate-700 shadow-2xl overflow-hidden w-full"
                                        style={{ aspectRatio: '375 / 813', maxHeight: '520px' }}>

                                        {/* Phone Screen - Image Display */}
                                        <div className="flex-1 w-full h-full flex items-center justify-center bg-gradient-to-br from-[#d71921] to-[#0077B6]">
                                             {getPhoneImage() ? (
                                                  <img
                                                       src={getPhoneImage()}
                                                       alt={`App screen step ${activeStep}`}
                                                       className="object-cover w-full h-full"
                                                  />
                                             ) : (
                                                  <div className="flex flex-col inset-0 items-center justify-center text-center p-4 bg-gradient-to-b from-purple-900/50 to-slate-900/50 backdrop-blur-sm w-full h-full min-h-[160px]">     
                                                       <img className='w-12 h-12 mb-2 sm:w-20 sm:h-20 sm:mb-6' src="src\assets\images\Original_Logo.svg" alt="Logo" />
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
                         <div className="flex-shrink-0 lg:w-full w-[90px] space-y-8 h-full">

                              <div className="flex flex-1 flex-col items-center justify-between sm:h-[520px] h-[300px]">
                                   {tipperSteps.map((step) => (
                                        <button
                                             key={step.number}
                                             onClick={() => setActiveStep(prev => prev === step.number ? null : step.number)}
                                             className="w-full flex items-center gap-4 group text-left justify-center lg:justify-between"
                                        >
                                             {/* Circle Button */}
                                             <div
                                                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all cursor-pointer bg-[#0077B6] text-white ${activeStep === step.number
                                                       ? ' scale-110 shadow-[0_0_40px_0_#b8f3ff]'
                                                       : 'shadow-[0_0_15px_0_#b8f3ff] '
                                                       }`}
                                             >
                                                  <img src={step.icon} alt={step.label} className="w-6 h-6" />
                                             </div>

                                             {/* Label */}
                                             <span
                                                  className={`hidden lg:block lg:flex-1 text-lg font-semibold text-center rounded-full py-3 border border-[#0077B6]/60 text-white transition-all scale-100
                                                       ${activeStep === step.number
                                                            ? 'bg-[#0077B6]/40 shadow-[0_0_18px_0_#3A7CFD]'
                                                            : 'bg-gradient-to-r from-[#3A7CFD]/20 to-[#243D70]/40 group-hover:text-gray-300'
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
