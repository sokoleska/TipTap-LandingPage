'use client'

export default function Hero() {
     return (
          <section id="hero" className="min-h-[85vh] flex items-center">
               <div className="max-w-7xl mx-auto w-full px-4 md:px-8 sm:px-6 lg:px-8 py-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-12 items-center">
                         {/* LEFT: title, subtitle, buttons */}
                         <div className="space-y-8 relative">
                              {/* Glow effect background */}
                              <div className="absolute inset-0 bg-[#3A7CFD] rounded-full blur-[100px] opacity-35 -z-10">
                              </div>

                              {/* Title */}
                              <div>
                                   <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4 [text-shadow:0_0_28px_#3A7CFD]">
                                        <span>Send Tips Instantly.</span>
                                        <br />
                                        <span>Anywhere. Anytime.</span>
                                   </h1>
                              </div>

                              {/* Subtitle */}
                              <div className="space-y-3">
                                   <p className="text-lg text-[#B4C2E8]">
                                        <span>Tip. Tap. Earn.</span>
                                        <br />
                                        <span className="leading-relaxed max-w-lg">
                                             A full-circle app where you can be both Tipper and Service Provider.
                                        </span>
                                   </p>
                              </div>

                              {/* CTA buttons */}
                              <div className="flex flex-col gap-6 pt-4 w-2/3 md:w-1/2 sm:w-2/3">
                                   <a href="#cta-buttons">
                                        <button
                                             className="text-white w-full py-2 rounded-2xl font-semibold text-2xl
                              bg-[#0077B6] [text-shadow:0_4px_4px_#00000040] scale-100
                              shadow-[0_0_18px_-1px_#5B93FF]
                              hover:bg-[linear-gradient(to bottom right, #5B93FF 0%, #3A7CFD 100%)] hover:shadow-[0_0_40px_0_#5B93FF] transition-all">
                                             Get Started
                                        </button>
                                   </a>
                                   <a href="/demo">
                                        <button
                                             className="text-[#EAF2FF] w-full py-2 rounded-2xl font-semibold text-2xl
                                   bg-transparent border-2 border-[#0077B6] scale-100 shadow-[0_0px_15px_0_#3A7CFD]
                                   hover:shadow-[0_0_18px_0_#FF6F6F] hover:border-[#FF6F6F] transition-all">
                                             Watch Demo
                                        </button>
                                   </a>
                              </div>
                         </div>

                         {/* RIGHT: phone mockups */}
                         <div className="hidden relative lg:flex flex-col justify-center items-center">
                              {/* Phone Mockup Image */}
                              <div className="relative w-full max-w-xs lg:max-w-sm mb-10">
                                   {/* Glow effect background */}
                                   <div className="absolute inset-0 bg-gradient-to-r from-[#3A7CFD] to-[#FF4E4E] rounded-full blur-[150px] opacity-60">
                                   </div>

                                   <div className="relative">
                                        <img
                                             src="/src/assets/images/v2-Hero-img.png"
                                             alt="Tip Tapp mobile app mockup"
                                             width={470}
                                             height={500}
                                             className="w-full h-auto rounded-3xl"
                                        />
                                   </div>
                              </div>

                              {/* Download button below */}
                              <div className="w-1/2">
                                   <a href="#cta-buttons">
                                        <div className='bg-gradient-to-r from-[#0077B6] to-[#d71921] rounded-2xl p-[3px]
                                             shadow-[0_0px_15px_0_#3A7CFD]
                                             hover:shadow-[0_0_40px_0_#5B93FF] transition-all
                                        '>
                                             <div className="flex items-center bg-[#2D5095] rounded-2xl">
                                                  <button
                                                       className="w-full text-white py-2 rounded-2xl font-semibold text-2xl
                                                            [text-shadow:0_4px_4px_#00000040] scale-100
                                                            hover:bg-[#2F549C]
                                                            transition-all">
                                                       Download the App
                                                  </button>
                                             </div>
                                        </div>



                                   </a>
                              </div>

                         </div>
                    </div>
               </div>
          </section>
     );
}
